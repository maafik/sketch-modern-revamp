import { Heart, Shield, Sparkles, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "С душой",
      description: "Каждая накидка создается с любовью и вниманием к деталям"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Качество",
      description: "Использую только проверенные материалы высшего качества"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Стиль",
      description: "Превращаю обычный салон в стильное и уютное пространство"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Персонально",
      description: "Индивидуальный подход к каждому клиенту и автомобилю"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  Обо{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">мне</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-primary rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                <p>
                  Меня зовут <span className="text-accent font-semibold">Ярослав</span>, и уже более 3 лет я помогаю автовладельцам 
                  создавать стильный и комфортный интерьер в своих автомобилях.
                </p>
                
                <p>
                  Моя специализация — универсальные льняные накидки, которые не просто защищают сиденья, 
                  а становятся настоящим украшением салона. Я лично подбираю каждый материал, 
                  контролирую качество пошива и слежу за тем, чтобы каждая пара накидок была идеальной.
                </p>

                <p>
                  Для меня важно, чтобы каждый клиент остался доволен. Поэтому я всегда готова проконсультировать, 
                  помочь с выбором и ответить на все ваши вопросы.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`group bg-gradient-card backdrop-blur-glass border border-border/50 rounded-2xl p-6 hover:shadow-hover transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-accent mb-4 group-hover:text-accent-glow group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-20 text-center max-w-4xl mx-auto animate-fade-in-up [animation-delay:0.8s]">
            <div className="bg-gradient-card backdrop-blur-glass border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Marks */}
              <div className="absolute top-4 left-4 text-6xl text-accent/20 font-playfair">"</div>
              <div className="absolute bottom-4 right-4 text-6xl text-accent/20 font-playfair rotate-180">"</div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 italic leading-relaxed">
                Каждая накидка — это не просто изделие, это частичка моей души, 
                которую я вкладываю в работу. Ваш комфорт и удовольствие от поездок — 
                моя главная награда.
              </blockquote>
              <cite className="block mt-6 text-accent font-semibold text-lg">— Ирина</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;