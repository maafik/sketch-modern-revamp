import { Card } from '@/components/ui/card';

const RestaurantAbout = () => {
  const features = [
    {
      icon: "👥",
      title: "150 посадочных мест",
      description: "Комфортные кабинки, маленькие столики и VIP-кабина для торжеств"
    },
    {
      icon: "🏆",
      title: "Сертификат TripAdvisor",
      description: "Обладатель сертификата качества от TripAdvisor за отличный сервис"
    },
    {
      icon: "🔥",
      title: "Настоящий угольный гриль",
      description: "Уникальный вкус блюд, приготовленных на настоящих углях"
    },
    {
      icon: "🎵",
      title: "Живая музыка ежедневно",
      description: "С 21:00 лучшие музыканты города создают неповторимую атмосферу"
    }
  ];

  const atmospherePoints = [
    "Уютный зал на 150 мест",
    "Приватные кабинки для компаний",
    "VIP-кабина для торжеств",
    "Романтическая атмосфера для пар",
    "Профессиональное звуковое оборудование",
    "Авторские коктейли от барменов"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in-up">
            О ресторане <span className="fire-text">"Угли"</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            В уютном зале ресторана, рассчитанном на 150 посадочных мест, есть и комфортные кабинки, 
            и маленькие столики, а также VIP-кабина, идеальная для небольшого торжества. 
            Все гости «Углей», будь то большая компания или влюбленная пара, найдут себе место по вкусу.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`brutal-card p-6 text-center hover:shadow-fire transition-all duration-500 animate-fade-in-up [animation-delay:${0.1 * (index + 1)}s] hover:scale-105 group`}
            >
              <div className="text-4xl mb-4 animate-fire-flicker">{feature.icon}</div>
              <h3 className="text-lg font-playfair font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Detailed Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Atmosphere */}
          <div className="animate-fade-in-up [animation-delay:0.5s]">
            <h3 className="text-3xl font-playfair font-bold text-accent mb-6 fire-effect">
              Атмосфера уюта
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Ресторан «Угли» создан для тех, кто ценит качественную кухню, 
              живую музыку и неповторимую атмосферу. Каждый вечер здесь 
              превращается в особенное событие благодаря продуманному интерьеру 
              и профессиональной команде.
            </p>
            
            <div className="space-y-3">
              {atmospherePoints.map((point, index) => (
                <div key={point} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                  <span className="text-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Quality */}
          <div className="animate-fade-in-up [animation-delay:0.7s]">
            <h3 className="text-3xl font-playfair font-bold text-accent mb-6 fire-effect">
              Качество превыше всего
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Со дня открытия ресторан сумел завоевать доверие любителей стейков 
              и блюд из мяса. Мы используем только отборное мясо и готовим его 
              на настоящем угольном гриле, что придает блюдам неповторимый вкус и аромат.
            </p>
            
            <div className="brutal-card p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl animate-fire-flicker">🏆</div>
                <div>
                  <h4 className="font-playfair font-bold text-accent">TripAdvisor</h4>
                  <p className="text-sm text-foreground/70">Сертификат качества</p>
                </div>
              </div>
              <p className="text-foreground/80 text-sm">
                Наш ресторан отмечен престижным сертификатом качества TripAdvisor, 
                что подтверждает высокий уровень сервиса и качества блюд.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up [animation-delay:0.9s]">
          <div className="brutal-card p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-playfair font-bold text-accent mb-4">
              Время работы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-primary mb-2">Пн-Чт, Вс</h4>
                <p className="text-foreground/80">12:00 - 00:00</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Пт, Сб</h4>
                <p className="text-foreground/80">12:00 - 01:00</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border/20">
              <p className="text-foreground/70 text-sm">
                <span className="text-accent font-semibold">Живая музыка:</span> ежедневно с 21:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantAbout;