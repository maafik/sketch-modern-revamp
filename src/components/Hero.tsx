import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/123123.mp4';

const Hero = () => {
  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Blurred fill layer for side bands */}
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 blur-lg"
        />
        {/* Centered, sharp main video without stretching */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-auto max-w-none object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 animate-fade-in-up">
            Привет! Меня зовут{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent relative drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Ирина
              <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-xl animate-glow-pulse"></div>
            </span>
            ,<br />
            и я создаю автонакидки с душой.
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.3s]">
            Я помогаю сделать интерьер автомобиля стильным и комфортным. Мои{' '}
            <span className="text-accent font-semibold">универсальные льняные накидки</span>{' '}
            не только защищают сиденья, но и придают салону особый характер. 
            Я лично подбираю материалы и слежу за качеством — чтобы каждая пара накидок радовала вас каждый день.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={scrollToOrder}
            size="lg"
            className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-hover hover:scale-105 transition-all duration-300 text-lg px-12 py-6 animate-bounce-in [animation-delay:0.6s]"
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