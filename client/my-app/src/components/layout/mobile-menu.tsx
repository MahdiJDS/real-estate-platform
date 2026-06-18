"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { navItems } from "@/constants/nav";
import Link from "next/link";
import ThemeToggle from "../shared/theme-toggle";

export default function MobileMenu() {
    return (
        <Sheet>

            <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex items-center flex-col gap-6 p-[10%]">

                <div className="text-xl font-bold">
                    RealNest
                </div>

                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm hover:translate-x-1 hover:text-blue-200 duration-300"
                    >
                        {item.label}
                    </Link>
                ))}
                <ThemeToggle/>

            </SheetContent>

        </Sheet>
    );
}