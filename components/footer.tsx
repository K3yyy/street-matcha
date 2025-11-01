export function Footer() {
    return (
        <footer className="border-t border-border bg-secondary/20">
            <div className="container px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/share/19YHLjQMBx/?mibextid=wwXIfr" className="text-muted-foreground hover:text-accent transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                    Shipping
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                    Returns
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} Owned by Keyy. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    )
}
