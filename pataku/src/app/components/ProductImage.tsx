import Image from 'next/image'

export default function ProductImage() {
    return (
        <div className="relative">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-square relative">
                    <Image
                        src="/slider1.jpg"
                        alt="Sofa"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>               
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-200 rounded-full opacity-30"></div>
        </div>
    )
}



