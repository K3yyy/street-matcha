"use client"

import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
    const [cartCount] = useState(0)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Menu</span>
                    </Button>
                    <h1 className="text-xl font-semibold tracking-tight">Street-Matcha</h1>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <a href="#products" className="text-sm font-medium hover:text-accent transition-colors">
                        Products
                    </a>
                    <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
                        About
                    </a>
                    <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
                        Contact
                    </a>
                </nav>

                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
              {cartCount}
            </span>
                    )}
                    <span className="sr-only">Shopping cart</span>
                </Button>
            </div>
        </header>
    )
}
