import { Button } from '@/components/ui/button';
import restaurantHero from '@/assets/restaurant-hero.jpg';

const RestaurantHero = () => {
  const scrollToReservation = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Fire Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={restaurantHero} 
          alt="Роскошный интерьер ресторана Угли с угольным грилем"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        {/* Fire particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ember-rise opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-ember-rise [animation-delay:1s] opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary-glow rounded-full animate-ember-rise [animation-delay:2s] opacity-50"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent-glow rounded-full animate-ember-rise [animation-delay:3s] opacity-30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Restaurant Logo */}
          <div className="mb-8">
            <div className="inline-block p-6 rounded-lg bg-gradient-card backdrop-blur-sm border border-primary/20">
              <h1 className="text-6xl md:text-8xl font-playfair font-bold fire-text animate-fire-flicker leading-tight">
                УГЛИ
              </h1>
              <p className="text-lg text-accent font-semibold tracking-widest mt-2 animate-fade-in-up [animation-delay:0.3s]">
                РЕСТОРАН
              </p>
            </div>
          </div>

          {/* Main Description */}
          <h2 className="text-2xl md:text-4xl font-playfair font-semibold mb-8 text-foreground animate-fade-in-up [animation-delay:0.5s] leading-relaxed">
            Гриль, живая музыка<br />
            <span className="text-accent">& настоящий вкус</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.7s]">
            В уютном зале ресторана на 150 посадочных мест есть комфортные кабинки, 
            маленькие столики и VIP-кабина. Ежедневно с 21:00 звучит{' '}
            <span className="text-primary font-semibold">живая музыка</span>{' '}
            от лучших музыкантов города.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-bounce-in [animation-delay:0.9s]">
            <Button 
              onClick={scrollToReservation}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover:shadow-fire hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-xl fire-effect"
            >
              Забронировать стол
            </Button>
            <a 
              href="tel:+73472163509"
              className="text-accent hover:text-accent-glow font-semibold text-lg hover:scale-105 transition-all duration-300"
            >
              +7 (347) 216-35-09
            </a>
          </div>

          {/* Restaurant Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up [animation-delay:1.1s]">
            <div className="brutal-card p-6 rounded-xl text-center hover:shadow-fire">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="font-semibold text-lg mb-2 text-accent">Угольный гриль</h3>
              <p className="text-sm text-foreground/80">Стейки из отборной говядины</p>
            </div>
            <div className="brutal-card p-6 rounded-xl text-center hover:shadow-fire">
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="font-semibold text-lg mb-2 text-accent">Живая музыка</h3>
              <p className="text-sm text-foreground/80">Каждый день с 21:00</p>
            </div>
            <div className="brutal-card p-6 rounded-xl text-center hover:shadow-fire">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-semibold text-lg mb-2 text-accent">TripAdvisor</h3>
              <p className="text-sm text-foreground/80">Сертификат качества</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Fire Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float fire-effect"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float [animation-delay:1s]"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/20 rounded-full blur-xl animate-float [animation-delay:2s]"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantHero;