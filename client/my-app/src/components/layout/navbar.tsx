"use client"
import Link from "next/link";
import { navItems } from "@/constants/nav";
import ThemeToggle from "../shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="hidden md:flex items-center gap-6">

            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm hover:opacity-70 transition"
                >
                    {item.label}
                </Link>
            ))}

            <ThemeToggle />

            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                    Login
                </Button>

                <Button size="sm">
                    Register
                </Button>
            </div>

        </nav>
    );
}