import { CheckCircle, Car, ShoppingCart } from 'lucide-react';

const HowToOrder = () => {
  const steps = [
    {
      id: 1,
      icon: <Car className="w-8 h-8" />,
      title: "Выберите нужный цвет накидок",
      description: "Просмотрите нашу коллекцию и выберите цвет, который подойдет вашему интерьеру"
    },
    {
      id: 2,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Укажите марку и модель автомобиля",
      description: "Это поможет нам подобрать идеальную посадку накидок для вашего авто"
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Оформите заказ любым удобным способом",
      description: "Свяжитесь с нами через WhatsApp или заполните форму заказа"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Как заказать накидки на авто
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`group relative animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-primary transform -translate-y-1/2 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-50 blur-sm"></div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative bg-gradient-card backdrop-blur-glass border border-border/50 rounded-2xl p-8 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 group-hover:border-primary/50">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="text-accent mb-6 group-hover:text-accent-glow transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-card backdrop-blur-glass border border-border/50 rounded-2xl p-6 hover:shadow-card transition-all duration-300 animate-fade-in-up [animation-delay:0.8s]">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse"></div>
              <span className="text-accent font-semibold">⏱ 30 минут</span>
            </div>
            <p className="text-foreground/90">
              В течение 30 минут мы свяжемся с вами для подтверждения заказа и уточнения деталей.
            </p>
          </div>

          <div className="bg-gradient-card backdrop-blur-glass border border-border/50 rounded-2xl p-6 hover:shadow-card transition-all duration-300 animate-fade-in-up [animation-delay:1s]">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse [animation-delay:0.5s]"></div>
              <span className="text-primary font-semibold">📦 Доставка</span>
            </div>
            <p className="text-foreground/90">
              После согласования — отправим накидки в ваш город!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;