import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const RestaurantHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/20 shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer group"
          >
            <h1 className="text-2xl md:text-3xl font-playfair font-bold fire-text group-hover:scale-105 transition-transform duration-300">
              УГЛИ
            </h1>
            <p className="text-xs text-accent font-medium tracking-wider -mt-1">РЕСТОРАН</p>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
            >
              Меню
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
            >
              Афиша
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
            >
              Контакты
            </button>
          </nav>

          {/* Contact & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Phone - Desktop */}
            <a 
              href="tel:+73472163509"
              className="hidden md:block text-accent hover:text-accent-glow font-semibold transition-colors duration-300"
            >
              +7 (347) 216-35-09
            </a>

            {/* Reserve Button - Desktop */}
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Бронировать
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4 bg-card/95 backdrop-blur-lg rounded-lg border border-border/20 mt-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-6 py-2 text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left px-6 py-2 text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
            >
              Меню
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="block w-full text-left px-6 py-2 text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
            >
              Афиша
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="block w-full text-left px-6 py-2 text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
            >
              Контакты
            </button>
            <div className="px-6 py-2 border-t border-border/20">
              <a 
                href="tel:+73472163509"
                className="block text-accent hover:text-accent-glow font-semibold transition-colors duration-300 mb-3"
              >
                +7 (347) 216-35-09
              </a>
              <Button 
                onClick={() => scrollToSection('contacts')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover:shadow-glow transition-all duration-300"
              >
                Забронировать стол
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default RestaurantHeader;