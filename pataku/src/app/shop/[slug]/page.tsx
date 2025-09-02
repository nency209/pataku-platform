import { Metadata } from "next";
import { productsdetail } from "@/constants/Productdetails";
import { BrowseCategories, Navbar } from "@/components";
import ProductDetail from "@/components/product/ProductDetail";
import CustomeCollection from "@/components/shop/Customecollection";
import RelatedProduct from "@/components/shop/RelatedProduct";
import ProductTabs from "@/components/shop/ProductTabs";
import { Footer, Header, NavigationIndex } from "@/layout";


type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productsdetail.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: product.name, 
    description: product.description || `Buy ${product.name} at best price.`,
    keywords: [product.name,  "pataku", "shopping"],
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 600,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}


export default function NewSaleProductPage({ params }: Props) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="sticky top-0 z-50 bg-white border-t border-color">
        <div
          className="
          grid 
          grid-cols-1 
          gap-6 
          lg:grid-cols-[0.5fr_1fr] lg:items-center lg:justify-start
          xl:grid-cols-[1.2fr_2.3fr]
        "
        >
          <BrowseCategories />

          <Navbar />
        </div>
      </div>
      <NavigationIndex />
      <ProductDetail slug={params.slug}/>
      <ProductTabs />
      <RelatedProduct />
      <CustomeCollection />
      <Footer />
    </main>
  );
}
