import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-car-interior.jpg';

const Hero = () => {
  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury car interior with elegant seat covers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8 animate-fade-in-up leading-tight">
            Привет! Меня зовут{' '}
            <span className="text-gradient relative inline-block">
              Ирина
            </span>
            ,<br />
            и я создаю автонакидки с душой.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.3s]">
            Я помогаю сделать интерьер автомобиля стильным и комфортным. Мои{' '}
            <span className="text-accent font-semibold">универсальные льняные накидки</span>{' '}
            не только защищают сиденья, но и придают салону особый характер. 
            Я лично подбираю материалы и слежу за качеством — чтобы каждая пара накидок радовала вас каждый день.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={scrollToOrder}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-xl animate-bounce-in [animation-delay:0.6s]"
          >
            Сделать заказ
          </Button>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float [animation-delay:1s]"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;