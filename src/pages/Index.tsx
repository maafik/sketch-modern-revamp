import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowToOrder from '@/components/HowToOrder';
import ProductGallery from '@/components/ProductGallery';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowToOrder />
        <ProductGallery />
        <About />
        <Reviews />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
