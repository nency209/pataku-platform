import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function BlogPosts() {
    const posts = [
        {
            title: "Numpam voluptatem quat",
            image: "living-room-grey-sofa"
        },
        {
            title: "Repellendus rem deserunt vitae",
            image: "colorful-geometric-wall"
        },
        {
            title: "Vitae alias ullam voluptatibus",
            image: "modern-interior"
        }
    ]

    return (
        <section className="py-8 md:py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Blog Posts</h2>
                    <p className="text-gray-600 text-sm md:text-base">Do you want to present posts in the best way to highlight interesting moments of your blog?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {posts.map((post, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div className="text-center p-4">
                                    <div className="w-24 h-24 bg-gray-400 rounded-lg mx-auto mb-4"></div>
                                    <p className="text-sm text-gray-600">Blog image</p>
                                </div>
                            </div>
                            <CardHeader className="pb-3">
                                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <Button variant="link" className="p-0 text-gray-600 hover:text-gray-900">
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
