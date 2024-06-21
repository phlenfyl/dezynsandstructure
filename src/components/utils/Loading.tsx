'use client'
import { signOut, useSession} from "next-auth/react";

type Props = {
    children: React.ReactNode;
};
export function Loading({ children }: Props) {
    const { data: session, status } = useSession();
    if (status === "loading") {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-[#451606]" />
            </div>
        );
    }

    return (
        <>
            {children}
        </>
    );

}
  