import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function UIComponentsShowcase() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">UI Components Showcase</h2>
                    <p className="text-gray-600">Built with TypeScript, Tailwind CSS, and Next.js</p>
                </div>

                {/* Buttons Section */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-6">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="default">Default Button</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                        <Button variant="black">Black</Button>
                        <Button variant="white">White</Button>
                    </div>
                </div>

                {/* Badges Section */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-6">Badges</h3>
                    <div className="flex flex-wrap gap-4">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="discount">-50% OFF</Badge>
                        <Badge variant="new">NEW</Badge>
                        <Badge variant="sale">SALE</Badge>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-6">Cards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Product Card</CardTitle>
                                <CardDescription>Beautiful product display</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg mb-4 flex items-center justify-center">
                                    <span className="text-4xl">🪑</span>
                                </div>
                                <p className="text-sm text-gray-600">Perfect for showcasing products with images, descriptions, and actions.</p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Add to Cart</Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Feature Card</CardTitle>
                                <CardDescription>Highlight important features</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="w-12 h-12 bg-amber-100 rounded-lg mb-4 flex items-center justify-center">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <p className="text-sm text-gray-600">Use cards to organize content and create visual hierarchy.</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">Learn More</Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Info Card</CardTitle>
                                <CardDescription>Display information clearly</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                                    <span className="text-2xl">ℹ️</span>
                                </div>
                                <p className="text-sm text-gray-600">Cards provide a clean way to present information and actions.</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full">View Details</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                {/* Usage Examples */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Usage Examples</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium mb-2">Button with Badge</h4>
                            <div className="flex items-center gap-2">
                                <Button variant="default">
                                    Cart
                                    <Badge variant="discount" className="ml-2">3</Badge>
                                </Button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2">Product with Multiple Badges</h4>
                            <div className="flex items-center gap-2">
                                <Badge variant="new">NEW</Badge>
                                <Badge variant="discount">-30%</Badge>
                                <Badge variant="sale">HOT</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
