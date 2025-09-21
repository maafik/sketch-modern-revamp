import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import grillFlames from '@/assets/grill-flames.jpg';
import premiumSteak from '@/assets/premium-steak.jpg';

const RestaurantMenu = () => {
  const menuCategories = [
    {
      title: "Стейки",
      icon: "🥩",
      description: "Из отборной говядины на угольном гриле",
      items: [
        { name: "Рибай", price: "1890₽", description: "300г мраморной говядины" },
        { name: "Филе-миньон", price: "2190₽", description: "250г нежнейшей вырезки" },
        { name: "Стриплойн", price: "1690₽", description: "280г классический стейк" }
      ]
    },
    {
      title: "Бургеры",
      icon: "🍔",
      description: "12 разновидностей авторских бургеров",
      items: [
        { name: "Угольный", price: "890₽", description: "С котлетой на гриле" },
        { name: "BBQ Бекон", price: "990₽", description: "С хрустящим беконом" },
        { name: "Трюфельный", price: "1290₽", description: "С трюфельным соусом" }
      ]
    },
    {
      title: "Рыба",
      icon: "🐟",
      description: "Изысканные рыбные блюда",
      items: [
        { name: "Лосось", price: "1390₽", description: "На угольном гриле" },
        { name: "Дорадо", price: "1190₽", description: "Целая рыба с овощами" },
        { name: "Тунец", price: "1590₽", description: "Стейк тунца средней прожарки" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in-up">
            <span className="fire-text">Меню</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            Основа меню ресторана — блюда, приготовленные в настоящем угольном гриле. 
            Стейки из отборной говядины, изысканные рыбные блюда, дюжина разновидностей бургеров, 
            десерты с эффектной подачей.
          </p>
        </div>

        {/* Hero Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative group">
            <img 
              src={grillFlames} 
              alt="Пламя угольного гриля с готовящимися стейками"
              className="w-full h-64 object-cover rounded-xl brutal-card hover:shadow-fire transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-playfair font-bold text-accent fire-effect">Угольный гриль</h3>
              <p className="text-foreground/90">Аутентичный вкус огня</p>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src={premiumSteak} 
              alt="Премиальный стейк на деревянной доске"
              className="w-full h-64 object-cover rounded-xl brutal-card hover:shadow-fire transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-playfair font-bold text-accent fire-effect">Премиум качество</h3>
              <p className="text-foreground/90">Отборное мясо</p>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`brutal-card p-8 hover:shadow-fire transition-all duration-500 animate-fade-in-up [animation-delay:${0.1 * (index + 1)}s] hover:scale-105`}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4 animate-fire-flicker">{category.icon}</div>
                <h3 className="text-2xl font-playfair font-bold text-accent mb-2">{category.title}</h3>
                <p className="text-foreground/70 text-sm">{category.description}</p>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-border/20 pb-3">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                    <p className="text-foreground/60 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Wine Pairing */}
        <div className="brutal-card p-8 rounded-xl text-center animate-fade-in-up [animation-delay:0.6s]">
          <h3 className="text-2xl font-playfair font-bold text-accent mb-4">🍷 Винная карта</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Многочисленные закуски и продуманная винная карта помогут подчеркнуть вкус основных блюд. 
            Наши сомелье подберут идеальное сочетание к каждому стейку.
          </p>
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Полное меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;