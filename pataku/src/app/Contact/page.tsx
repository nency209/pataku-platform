import { Navbar, Contact, BrowseCategories } from "@/components";
import MapComponent from "@/components/sections/map";
import { Footer, Header, NavigationIndex } from "@/layout";

export default function RegisterHome() {
  return (
    <main className="min-h-screen">
      <Header/>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.2fr_2.3fr] items-center justify-center gap-6">
          <BrowseCategories />
          <Navbar />
        </div>
      <NavigationIndex />
      <MapComponent/>
      <Contact />
      <Footer/>
    </main>
  );
}
