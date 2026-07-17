"use client"
import Link from "next/link";
import ThemeToggle from "../shared/theme-toggle";
import AuthButton from "../shared/authButton";
import { useAuthStore } from "@/store/auth.store";
import { getNavigation } from "@/config/navigation";

export default function Navbar() {
    const accessToken = useAuthStore(
        (state) => state.accessToken
    );

    const navigation = getNavigation(
        !!accessToken
    );
    return (
        <nav className="hidden md:flex items-center gap-6">

            {navigation.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                >
                    {item.label}
                </Link>
            ))}

            <ThemeToggle />

            <div className="flex items-center gap-2">
                <AuthButton />
            </div>

        </nav>
    );
}