import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-card/80 backdrop-blur-glass border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-playfair font-bold bg-gradient-primary bg-clip-text text-transparent">
            Sketch Master
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              Каталог
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              О мне
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              Отзывы
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('order')}
            variant="outline"
            className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-all duration-300"
          >
            Заказать
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;