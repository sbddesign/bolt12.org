"use client";
import { usePathname } from "next/navigation";
import { EditIcon } from "@bitcoin-design/bitcoin-icons-react/filled";

export default function Footer(){
    return (
        <footer className="p-6 border-t border-t-gray-200 text-center">
            <div className="max-w-6xl text-center flex flex-col sm:flex-row gap-2 items-center justify-between mx-auto">
                <p>BOLT12.org is open source.</p>
                <a href={`https://github.com/sbddesign/bolt12.org/blob/main/app${usePathname()}/page.tsx`} className="flex flex-row gap-1 items-center justify-center">
                    <EditIcon className="w-5 h-5" /> <span>Edit this page on GitHub</span>
                </a>
            </div>
        </footer>
    );
}