import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      image: "https://sketch-master.store/assets/img/gallery-5/pavlovsk.jpg",
      author: "Иван",
      rating: 5,
      text: "Отличные накидки! Качество превосходное, сидят как влитые. Ирина очень внимательно отнеслась к моим пожеланиям.",
      car: "Toyota Camry"
    },
    {
      id: 2,
      image: "https://sketch-master.store/assets/img/gallery-5/pavlovsk1.jpg",
      author: "Дмитрий",
      rating: 5,
      text: "Заказывал накидки для своего BMW. Результат превзошел ожидания! Салон преобразился, стал намного стильнее.",
      car: "BMW X5"
    },
    {
      id: 3,
      image: "https://sketch-master.store/assets/img/gallery-5/pavlovsk2.jpg",
      author: "Данилов",
      rating: 5,
      text: "Очень довольна покупкой! Накидки не только красивые, но и практичные. Легко стираются и быстро сохнут.",
      car: "Hyundai Tucson"
    },
    {
      id: 4,
      image: "https://sketch-master.store/assets/img/gallery-5/pavlovsk3.jpg",
      author: "Игорь",
      rating: 5,
      text: "Рекомендую всем! Быстрая доставка, отличное качество. Накидки смотрятся дорого и благородно.",
      car: "Volkswagen Polo"
    },
    {
      id: 5,
      image: "https://sketch-master.store/assets/img/gallery-5/pavlovsk4.jpg",
      author: "Петя",
      rating: 5,
      text: "Прекрасная работа! Накидки идеально подошли к интерьеру моего автомобиля. Спасибо Ирине за профессионализм!",
      car: "Kia Rio"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'text-accent fill-accent'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Отзывы</span>{' '}
            <span className="text-foreground">наших клиентов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 500 довольных клиентов уже оценили качество наших накидок
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`group animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-gradient-card backdrop-blur-glass border border-border/50 rounded-3xl p-6 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 h-full">
                {/* Review Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-black/10">
                  <img 
                    src={review.image}
                    alt={`Отзыв от ${review.author}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">{review.author}</p>
                      <p className="text-sm text-muted-foreground">{review.car}</p>
                    </div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up [animation-delay:1s]">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">500+</div>
            <p className="text-muted-foreground">Довольных клиентов</p>
          </div>
          <div className="animate-fade-in-up [animation-delay:1.2s]">
            <div className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">5.0</div>
            <p className="text-muted-foreground">Средняя оценка</p>
          </div>
          <div className="animate-fade-in-up [animation-delay:1.4s]">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">3</div>
            <p className="text-muted-foreground">Года на рынке</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;