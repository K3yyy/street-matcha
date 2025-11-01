import { ProductCard } from "@/components/product-card"
import {products} from "@/data/data-product";



export function ProductGrid() {
    return (
        <section id="products" className="py-12 md:py-20">
            <div className="container px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Drinks you can enjoy</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                        Order your collection of Matcha now!!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
