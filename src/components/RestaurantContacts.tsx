import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const RestaurantContacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Формируем сообщение для WhatsApp
    const whatsappMessage = `
🔥 БРОНИРОВАНИЕ СТОЛА В РЕСТОРАНЕ "УГЛИ"

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📅 Дата: ${formData.date}
⏰ Время: ${formData.time}
👥 Количество гостей: ${formData.guests}
💬 Дополнительно: ${formData.message}

Ждем вас в ресторане "Угли"! 🍖🔥
    `.trim();

    const whatsappUrl = `https://wa.me/79631312038?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения брони.",
    });

    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacts" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float [animation-delay:1s]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in-up">
            <span className="fire-text">Контакты</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            Забронируйте столик и насладитесь незабываемым вечером в ресторане "Угли"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up [animation-delay:0.3s]">
            <h3 className="text-3xl font-playfair font-bold text-accent mb-8 fire-effect">
              Свяжитесь с нами
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              <Card className="brutal-card p-6 hover:shadow-fire transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl animate-fire-flicker">📞</div>
                  <div>
                    <h4 className="font-playfair font-bold text-accent">Бронирование стола</h4>
                    <a 
                      href="tel:+73472163509"
                      className="text-primary hover:text-primary-glow text-lg font-semibold transition-colors duration-300"
                    >
                      +7 (347) 216-35-09
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="brutal-card p-6 hover:shadow-fire transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl animate-fire-flicker">📱</div>
                  <div>
                    <h4 className="font-playfair font-bold text-accent">Отзывы и предложения</h4>
                    <a 
                      href="tel:+79631312038"
                      className="text-primary hover:text-primary-glow text-lg font-semibold transition-colors duration-300"
                    >
                      +7 (963) 131-20-38
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="brutal-card p-6 hover:shadow-fire transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl animate-fire-flicker">📍</div>
                  <div>
                    <h4 className="font-playfair font-bold text-accent">Адрес</h4>
                    <p className="text-foreground/80">Уфа, ул. Кавказская, 8/1</p>
                  </div>
                </div>
              </Card>

              <Card className="brutal-card p-6 hover:shadow-fire transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl animate-fire-flicker">⏰</div>
                  <div>
                    <h4 className="font-playfair font-bold text-accent">Время работы</h4>
                    <div className="text-foreground/80 space-y-1">
                      <p>Пн-Чт, Вс: 12:00-00:00</p>
                      <p>Пт, Сб: 12:00-01:00</p>
                      <p className="text-primary font-semibold">Живая музыка: с 21:00</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bonus Program */}
            <Card className="brutal-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl animate-fire-flicker">💳</div>
                <h4 className="font-playfair font-bold text-accent">Бонусная программа</h4>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Получайте бонусы при каждом посещении ресторанов «VKUSNO projects», 
                накапливайте и используйте их для оплаты последующих посещений. 
                Бонусная карта выдается при первом посещении.
              </p>
            </Card>
          </div>

          {/* Reservation Form */}
          <div className="animate-fade-in-up [animation-delay:0.5s]">
            <h3 className="text-3xl font-playfair font-bold text-accent mb-8 fire-effect">
              Забронировать стол
            </h3>

            <Card className="brutal-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground/80 text-sm font-medium mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      required
                      className="bg-background/50 border-border/30 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground/80 text-sm font-medium mb-2">
                      Телефон *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="bg-background/50 border-border/30 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-foreground/80 text-sm font-medium mb-2">
                      Дата *
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/30 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground/80 text-sm font-medium mb-2">
                      Время *
                    </label>
                    <Input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/30 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground/80 text-sm font-medium mb-2">
                      Гостей *
                    </label>
                    <Input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      placeholder="1"
                      min="1"
                      max="20"
                      required
                      className="bg-background/50 border-border/30 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground/80 text-sm font-medium mb-2">
                    Дополнительные пожелания
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Особые пожелания, аллергии, торжество..."
                    className="bg-background/50 border-border/30 focus:border-primary transition-colors duration-300 min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover:shadow-fire hover:scale-105 transition-all duration-300 py-3 text-lg fire-effect"
                >
                  Забронировать стол
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border/20 text-center">
                <p className="text-foreground/60 text-sm">
                  * Обязательные поля. Мы свяжемся с вами для подтверждения брони
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16 animate-fade-in-up [animation-delay:0.7s]">
          <div className="brutal-card p-6 rounded-xl inline-block">
            <p className="text-foreground/60 text-sm">
              © 2024 Ресторан "Угли" | VKUSNO Projects | Все права защищены
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantContacts;