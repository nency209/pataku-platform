import Image from "next/image"

export default function BlogPosts() {
    const posts = [
        {
            title: "Numpam voluptatem quat",
            image: "/img/blog_1_d2c1f6a3-df38-4a49-a6af-0ebfe2e04f7f_1024x1024.jpg"

        },
        {
            title: "Repellendus rem deserunt vitae",
            image: "/img/blog_8_1024x1024.jpg"
        },
        {
            title: "Vitae alias ullam voluptatibus",
            image: "/img/blog_9_1024x1024.jpg"
        }
    ]

    return (
        <section className="py-8 md:py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Blog Posts</h2>
                    <p className="text-gray-600 text-sm md:text-base">Do you want to present posts in the best way to highlight interesting moments of your blog?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="overflow-hidden ">
                            <div className="aspect-[4/3] flex items-center justify-center ">
                              <Image src={post.image} alt={post.title} width={400} height={300} className="object-contain transition-colors duration-300 hover:brightness-50"/>
                            </div>
                            <div className="pb-3">
                                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
                            </div>
                            <div className="pt-0">
                                <button  className="p-0 text-gray-600 hover:text-gray-900">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
