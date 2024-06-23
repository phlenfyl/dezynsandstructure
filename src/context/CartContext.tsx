"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CartItem } from '@/app/api/auth/types';
import { useSession } from 'next-auth/react';
import { getCart } from '@/app/api/auth/api';

interface CartContextType {
    cart: CartItem[];
    totalQuantity: number;
    totalPrice: number;
    plan_name: string;
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const { data: session } = useSession();
    const [cart, setCart] = useState<CartItem[]>([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [plan_name, setPlanName] = useState('')

    useEffect(() => {
        const fetchCart = async () => {
            if (!session) return;
            try {
                const response = await getCart('cart', session?.access_token)
                setCart(response);
                updateCartTotals(response);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };
        fetchCart();
    }, [session]);

    const updateCartTotals = (cartItems: CartItem[]) => {
        const totalQty = cartItems.reduce((acc: number, item: CartItem) => acc + (item.quantity ?? 0), 0);
        const totalPrice = cartItems.reduce((acc: number, item: CartItem) => {
          const price = + (item.item_price ?? 0); // Convert item_price to a number using unary +
          return acc + (price * (item.quantity ?? 0));
        }, 0);
        setTotalQuantity(totalQty);
        setTotalPrice(totalPrice);
      };

    const addToCart = (item: CartItem) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        updateCartTotals(updatedCart);
        setPlanName(item.plan_name?? '')
    };

    const removeFromCart = (itemId: string) => {
        const updatedCart = cart.filter(item => item.id !== Number(itemId));
        const removedItem = cart.find(item => item.id === Number(itemId));
        if (removedItem) {
            const updatedQuantity = totalQuantity - removedItem.quantity;
            const updatedPrice = totalPrice - ((removedItem.item_price ?? 0) * removedItem.quantity);
            setTotalQuantity(updatedQuantity);
            setTotalPrice(updatedPrice);
        }
        setCart(updatedCart);

        const remainingPlanNames = updatedCart.map((item) => item.plan_name ?? '');
        setPlanName(remainingPlanNames.join(', '));
    };
    console.log(totalPrice)
    const clearCart = () => {  // Add this function
        setCart([]);
        setTotalQuantity(0);
        setTotalPrice(0);
        setPlanName('');
    };

    return (
        <CartContext.Provider value={{ cart, totalQuantity, totalPrice, plan_name, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
