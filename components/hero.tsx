"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {ProductCard} from "@/components/product-card";
import {products} from "@/data/data-product";


export function Hero() {
    const [showCard, setShowCard] = useState(false)

    return (
        <section className="relative overflow-hidden bg-secondary/30">
            <div className="container px-4 py-16 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
                        Enjoy Matcha with your soulmate
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                        Matcha has a quiet way of speaking to the soul. It tells us that love, like life, is built on small, mindful moments —
                        the warmth of a hand, the patience of waiting, the joy found in something simple yet pure.
                        We don’t need noise or rush to feel alive; sometimes all it takes is a cup of matcha and someone we care about to remind us what peace truly feels like.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-green-800 hover:bg-green-700 text-white"
                            onClick={() => setShowCard(!showCard)} // toggle display
                        >
                            Order Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {showCard && (
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                            {products.map((item) => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
