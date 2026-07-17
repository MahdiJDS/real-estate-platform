"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggle from "../shared/theme-toggle";
import AuthButton from "../shared/authButton";
import { useState } from "react";
import { useAuthStore } from "@/store/auth.store";
import { getNavigation } from "@/config/navigation";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    const accessToken = useAuthStore(
        (state) => state.accessToken
    );

    const navigation = getNavigation(
        !!accessToken
    );
    return (
        <Sheet
            open={open}
            onOpenChange={setOpen}
        >

            <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden hover:cursor-pointer">
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex items-center flex-col gap-6 p-[10%]">

                <div className="text-xl font-bold">
                    RealNest
                </div>

                {navigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                    >
                        {item.label}
                    </Link>
                ))}

                <ThemeToggle />

                <AuthButton
                    onNavigate={() => setOpen(false)}
                />

            </SheetContent>

        </Sheet>
    );
}