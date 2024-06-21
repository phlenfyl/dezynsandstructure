export const EmptyCart = () => {
    return (
        <section className="bg-white h-screen py-8 antialiased dark:bg-gray-900 md:py-7">
            <div className="max-w-screen-xl px-4 2xl:px-0">
                <h2 className="font-semibold text-[#451606] text-xl">Shopping Cart</h2>

                <div className="mt-6 sm:mt-3 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    <div className="space-y-6 mb-2">
                                <div className="rounded-lg border border-[#451606]/40 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    Your Cart is empty
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};