import { MessageCircle, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 mt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-playfair font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Sketch Master
                </h3>
                <p className="text-muted-foreground">
                  Автонакидки с душой от мастера Ирины
                </p>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                Создаю универсальные льняные накидки для автомобилей уже более 3 лет. 
                Каждое изделие — это сочетание качества, стиля и индивидуального подхода.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Навигация</h4>
              <nav className="space-y-3">
                {[
                  { name: 'Главная', href: '#hero' },
                  { name: 'Каталог', href: '#products' },
                  { name: 'О мне', href: '#about' },
                  { name: 'Отзывы', href: '#reviews' },
                  { name: 'Заказать', href: '#order' }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-muted-foreground hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Контакты</h4>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/79517623467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <MessageCircle className="w-5 h-5 mr-3 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-sm font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+7 (951) 762-34-67</p>
                  </div>
                </a>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-accent" />
                  <div>
                    <p className="text-sm font-medium">Телефон</p>
                    <p className="text-sm text-muted-foreground">+7 (951) 762-34-67</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">info@sketch-master.store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © 2024 Sketch Master Store. Все права защищены.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Сделано с</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>для автолюбителей</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;