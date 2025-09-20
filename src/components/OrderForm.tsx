import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const OrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carBrand: '',
    carModel: '',
    color: '',
    backSeats: false,
    message: ''
  });

  const colors = [
    'Чёрный/синий',
    'Чёрный/красный', 
    'Чёрный',
    'Серый',
    'Бежевый'
  ];

  const carBrands = [
    'Toyota', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai',
    'Kia', 'Nissan', 'Mazda', 'Honda', 'Renault', 'Peugeot', 'Citroen',
    'Skoda', 'Chevrolet', 'Ford', 'Mitsubishi', 'Subaru', 'Другой'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWhatsAppOrder = () => {
    if (!formData.name || !formData.phone || !formData.carBrand || !formData.color) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    const message = `🚗 Новый заказ накидок!

👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
${formData.email ? `📧 Email: ${formData.email}` : ''}

🚙 Автомобиль: ${formData.carBrand} ${formData.carModel || ''}
🎨 Цвет накидок: ${formData.color}
${formData.backSeats ? '🪑 Задние сиденья: +2000₽' : ''}

${formData.message ? `💬 Комментарий: ${formData.message}` : ''}`;

    const whatsappUrl = `https://wa.me/79517623467?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Отлично!",
      description: "Заказ отправлен в WhatsApp. Мы свяжемся с вами в течение 30 минут.",
    });
  };

  return (
    <section id="order" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              <span className="text-foreground">Сделать</span>{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">заказ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Заполните форму или свяжитесь с нами удобным способом
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Order Form */}
            <Card className="bg-gradient-card backdrop-blur-glass border border-border/50 p-8 animate-fade-in-up">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-center">
                Форма заказа
              </h3>

              <div className="space-y-6">
                {/* Personal Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-muted/30 border-border/50 focus:border-accent transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-muted/30 border-border/50 focus:border-accent transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-muted/30 border-border/50 focus:border-accent transition-colors duration-300"
                  />
                </div>

                {/* Car Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Марка автомобиля *</Label>
                    <Select onValueChange={(value) => handleInputChange('carBrand', value)}>
                      <SelectTrigger className="bg-muted/30 border-border/50 focus:border-accent">
                        <SelectValue placeholder="Выберите марку" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border/50">
                        {carBrands.map((brand) => (
                          <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carModel">Модель</Label>
                    <Input
                      id="carModel"
                      placeholder="Модель автомобиля"
                      value={formData.carModel}
                      onChange={(e) => handleInputChange('carModel', e.target.value)}
                      className="bg-muted/30 border-border/50 focus:border-accent transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div className="space-y-2">
                  <Label>Цвет накидок *</Label>
                  <Select onValueChange={(value) => handleInputChange('color', value)}>
                    <SelectTrigger className="bg-muted/30 border-border/50 focus:border-accent">
                      <SelectValue placeholder="Выберите цвет" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border/50">
                      {colors.map((color) => (
                        <SelectItem key={color} value={color}>{color}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Back Seats Option */}
                <div className="flex items-center space-x-2 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <input
                    type="checkbox"
                    id="backSeats"
                    checked={formData.backSeats}
                    onChange={(e) => handleInputChange('backSeats', e.target.checked)}
                    className="w-4 h-4 text-accent bg-muted border-border rounded focus:ring-accent"
                  />
                  <Label htmlFor="backSeats" className="text-sm">
                    Накидки на задние сиденья <span className="text-accent font-semibold">+2000 ₽</span>
                  </Label>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    placeholder="Дополнительные пожелания..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-muted/30 border-border/50 focus:border-accent transition-colors duration-300 min-h-[80px]"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow hover:scale-105 transition-all duration-300 py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Заказать через WhatsApp
                </Button>
              </div>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up [animation-delay:0.3s]">
              <Card className="bg-gradient-card backdrop-blur-glass border border-border/50 p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-accent" />
                  Связаться напрямую
                </h3>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/79517623467"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-300 group"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+7 (951) 762-34-67</p>
                    </div>
                  </a>

                  <div className="flex items-center p-4 bg-muted/20 rounded-lg">
                    <Phone className="w-5 h-5 mr-3 text-accent" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-sm text-muted-foreground">+7 (951) 762-34-67</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-muted/20 rounded-lg">
                    <Mail className="w-5 h-5 mr-3 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">info@sketch-master.store</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-card backdrop-blur-glass border border-border/50 p-6">
                <h3 className="text-xl font-semibold mb-4">Гарантии качества</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Быстрая обработка заказа — ответ в течение 30 минут
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Только качественные натуральные материалы
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Индивидуальный подход к каждому заказу
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Доставка по всей России
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;