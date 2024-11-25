import ProductDetails from "@/components/ProductDetails";
import ProductGallery from "@/components/ProductGallery";
import "../app/globals.css";
import SimilarProducts from "@/components/SimilarProducts";
import ReviewSection from "@/components/ReviewSection";
import ProductNavbar from "@/components/ui/productNavbar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-6 py-44">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductGallery />
          <ProductDetails />
        </div>

        {/* Similar Products Section */}
        <SimilarProducts />

        {/* Review Section */}
        <ReviewSection />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
