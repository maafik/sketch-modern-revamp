import { Card } from '@/components/ui/card';

const RestaurantEvents = () => {
  const events = [
    {
      date: "21",
      month: "Сентября",
      time: "21:00",
      artist: "Елена Кордо",
      image: "🎤",
      description: "Душевные песни под гитару"
    },
    {
      date: "21",
      month: "Сентября", 
      time: "21:00",
      artist: "BOGDANA",
      image: "🎵",
      description: "Современные хиты и классика"
    },
    {
      date: "23",
      month: "Сентября",
      time: "21:00", 
      artist: "NOVA",
      image: "🎸",
      description: "Рок-баллады и авторские песни"
    },
    {
      date: "24",
      month: "Сентября",
      time: "21:00",
      artist: "Dejavu",
      image: "🎹",
      description: "Джаз и blues в современной обработке"
    },
    {
      date: "25",
      month: "Сентября",
      time: "21:00",
      artist: "Виктория Шансино",
      image: "🎤",
      description: "Французские шансоны и романсы"
    },
    {
      date: "26",
      month: "Сентября",
      time: "21:00",
      artist: "Play Band",
      image: "🎸",
      description: "Кавер-группа популярных хитов"
    }
  ];

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float [animation-delay:1s]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in-up">
            <span className="fire-text">Афиша</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            Ежедневно с 21:00 звучит живая музыка от лучших музыкантов города. 
            Погрузитесь в атмосферу уютного вечера под звуки качественной музыки.
          </p>
        </div>

        {/* Music Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
            <Card 
              key={`${event.date}-${event.artist}`}
              className={`brutal-card p-6 hover:shadow-fire transition-all duration-500 animate-fade-in-up [animation-delay:${0.1 * (index + 1)}s] hover:scale-105 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-accent fire-effect">{event.date}</div>
                  <div className="text-sm text-foreground/70 font-medium">{event.month}</div>
                </div>
                <div className="text-3xl animate-fire-flicker">{event.image}</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">{event.time}</span>
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center animate-glow-pulse">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-playfair font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {event.artist}
                </h3>
                
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Music Info */}
        <div className="brutal-card p-8 rounded-xl text-center animate-fade-in-up [animation-delay:0.8s]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3 animate-fire-flicker">🎵</div>
              <h3 className="text-xl font-playfair font-bold text-accent mb-2">Живая музыка</h3>
              <p className="text-foreground/70">Каждый день с 21:00</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-border"></div>
            
            <div className="text-center">
              <div className="text-4xl mb-3 animate-fire-flicker">🎤</div>
              <h3 className="text-xl font-playfair font-bold text-accent mb-2">Лучшие музыканты</h3>
              <p className="text-foreground/70">Города Уфы</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-border"></div>
            
            <div className="text-center">
              <div className="text-4xl mb-3 animate-fire-flicker">🍷</div>
              <h3 className="text-xl font-playfair font-bold text-accent mb-2">Уютная атмосфера</h3>
              <p className="text-foreground/70">Для романтического вечера</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantEvents;