import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-secondary/30">
            <div className="container px-4 py-16 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
                        Enjoy Fresh Matcha in Cambodia
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                        Taste the smooth, rich flavor of authentic matcha made from high-quality Japanese green tea.
                        Perfect for your café, office, or a refreshing moment at home — made fresh and delivered right here in Cambodia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            Order Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
