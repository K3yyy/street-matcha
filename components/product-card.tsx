"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Product {
    id: number
    name: string
    price: number
    image: string
    category: string
}

export function ProductCard({ product }: { product: Product }) {
    const [isAdding, setIsAdding] = useState(false)

    const handleAddToCart = () => {
        setIsAdding(true)
        setTimeout(() => setIsAdding(false), 1000)
    }

    return (
        <Card className="group overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="p-0">
                <div className="relative transform translate-y-[-24px] aspect-square overflow-hidden bg-secondary/20">
                    <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
            <span className="inline-block rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
              {product.category}
            </span>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-balance">{product.name}</h3>
                    <p className="text-2xl font-bold text-black text-accent">${product.price.toFixed(2)}</p>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={handleAddToCart}
                    disabled={isAdding}
                >
                    {isAdding ? (
                        "Added!"
                    ) : (
                        <>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                        </>
                    )}
                </Button>
            </CardFooter>
        </Card>
    )
}
