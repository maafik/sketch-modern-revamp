import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MessageCircle, Phone, Mail, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const OrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carBrand: '',
    carModel: '',
    color: '',
    seatType: 'front', // 'front', 'front-rear', 'steering'
    message: ''
  });
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [productsDialogOpen, setProductsDialogOpen] = useState(false);

  // Данные о товарах (копируем из ProductGallery)
  const products = {
    front: [
      {
        id: 1,
        name: "Накидка чёрный/синий",
        image: "https://sketch-master.store/assets/img/gallery-5/gallery-1.webp",
        colors: ["Чёрный", "Синий"],
        price: 1999
      },
      {
        id: 2,
        name: "Накидка чёрный/красный",
        image: "https://sketch-master.store/assets/img/gallery-5/gallery-2.webp",
        colors: ["Чёрный", "Красный"],
        price: 1999
      },
      {
        id: 3,
        name: "Накидка чёрная",
        image: "https://sketch-master.store/assets/img/gallery-5/gallery-3.webp",
        colors: ["Чёрный"],
        price: 1999
      },
      {
        id: 4,
        name: "Накидка серая",
        image: "https://sketch-master.store/assets/img/gallery-5/gallery-4.webp",
        colors: ["Серый"],
        price: 1999
      },
      {
        id: 5,
        name: "Накидка бежевая",
        image: "https://sketch-master.store/assets/img/gallery-5/gallery-5.webp",
        colors: ["Бежевый"],
        price: 1999
      }
    ],
    'front-rear': [
      {
        id: 6,
        name: "Комплект черно-бежевый",
        image: "/src/assets/seats/7666667986.webp",
        colors: ["Чёрный", "Бежевый"],
        price: 3999
      },
      {
        id: 7,
        name: "Комплект чёрный",
        image: "/src/assets/seats/7666669193.webp",
        colors: ["Чёрный"],
        price: 3999
      },
      {
        id: 8,
        name: "Комплект чёрно-синий",
        image: "/src/assets/seats/7666670075.webp",
        colors: ["Чёрный", "Синий"],
        price: 3999
      },
      {
        id: 9,
        name: "Комплект бежевый",
        image: "/src/assets/seats/7666670487.webp",
        colors: ["Бежевый"],
        price: 3999
      },
      {
        id: 10,
        name: "Комплект чёрно-серый",
        image: "/src/assets/seats/7666671249.webp",
        colors: ["Чёрный", "Серый"],
        price: 3999
      },
      {
        id: 11,
        name: "Комплект чёрно-белый",
        image: "/src/assets/seats/7666672417.webp",
        colors: ["Чёрный", "Белый"],
        price: 3999
      }
    ],
    steering: [
      {
        id: 12,
        name: "Оплетка на руль универсальная 37-39см чёрно-синяя",
        image: "/src/assets/role/7312390070.webp",
        colors: ["Чёрный", "Синий"],
        price: 599
      },
      {
        id: 13,
        name: "Оплетка на руль универсальная 37-39см чёрно-белая",
        image: "/src/assets/role/7343248197.webp",
        colors: ["Чёрный", "Белый"],
        price: 599
      },
      {
        id: 14,
        name: "Оплетка на руль универсальная 37-39см чёрно-голубая",
        image: "/src/assets/role/7343261889.webp",
        colors: ["Чёрный", "Голубой"],
        price: 599
      },
      {
        id: 15,
        name: "Оплетка на руль универсальная 37-39см чёрно-жёлтая",
        image: "/src/assets/role/7343266486.webp",
        colors: ["Чёрный", "Жёлтый"],
        price: 599
      },
      {
        id: 16,
        name: "Оплетка на руль универсальная 37-39см чёрно-розовая",
        image: "/src/assets/role/7343271053.webp",
        colors: ["Чёрный", "Розовый"],
        price: 599
      },
      {
        id: 17,
        name: "Оплетка на руль универсальная 37-39см чёрно-красная",
        image: "/src/assets/role/7343275804.webp",
        colors: ["Чёрный", "Красный"],
        price: 599
      }
    ]
  };

  const getPrice = (type: string, selectedProduct?: any) => {
    if (selectedProduct) {
      return selectedProduct.price;
    }
    switch (type) {
      case 'front': return 1999;
      case 'front-rear': return 3999;
      case 'steering': return 599;
      default: return 1999;
    }
  };

  const selectedProduct = formData.color ? 
    products[formData.seatType as keyof typeof products]?.find(p => p.name === formData.color) : 
    null;

  const totalPrice = getPrice(formData.seatType, selectedProduct);


  const carBrands = [
    'Toyota', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai',
    'Kia', 'Nissan', 'Mazda', 'Honda', 'Renault', 'Peugeot', 'Citroen',
    'Skoda', 'Chevrolet', 'Ford', 'Mitsubishi', 'Subaru', 'Другой'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => {
      const newData = {
      ...prev,
      [field]: value
      };
      
      // Сбрасываем цвет при смене раздела
      if (field === 'seatType') {
        newData.color = '';
      }
      
      return newData;
    });
  };

  const formatPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, '');
    let d = digits;
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d; // ensure country
    d = d.slice(0, 11);
    const p1 = d.slice(1, 4);
    const p2 = d.slice(4, 7);
    const p3 = d.slice(7, 9);
    const p4 = d.slice(9, 11);
    let out = '+7';
    if (p1) out += ` (${p1}`;
    if (p1 && p1.length === 3) out += ')';
    if (p2) out += ` ${p2}`;
    if (p3) out += `-${p3}`;
    if (p4) out += `-${p4}`;
    return out;
  };

  const normalizePhone = (raw: string) => {
    const hasLetters = /[A-Za-zА-Яа-я]/.test(raw);
    if (hasLetters) return { valid: false, normalized: '' };
    const digits = raw.replace(/\D/g, '');
    if (digits.length !== 11) return { valid: false, normalized: '' };
    const first = digits[0];
    if (first !== '7' && first !== '8') return { valid: false, normalized: '' };
    const normalized = `+7${digits.slice(1)}`;
    return { valid: true, normalized };
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

    const phoneCheck = normalizePhone(formData.phone);
    if (!phoneCheck.valid) {
      toast({
        title: "Неверный телефон",
        description: "Введите правильный российский номер телефона",
        variant: "destructive",
      });
      return;
    }

    const sectionName = formData.seatType === 'front-rear' ? 'Передние + задние сиденья' : 
                       formData.seatType === 'steering' ? 'Руль' : 'Передние сиденья';

    const message = `🚗 Новый заказ накидок!

👤 Имя: ${formData.name}
📱 Телефон: ${phoneCheck.normalized}

🚙 Автомобиль: ${formData.carBrand} ${formData.carModel || ''}
🎨 Товар: ${formData.color}
📦 Раздел: ${sectionName}

💰 Итого: ${totalPrice} ₽

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
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', formatPhone(e.target.value))}
                      onFocus={() => {
                        if (!formData.phone) {
                          setFormData((p) => ({ ...p, phone: '+7 '}));
                        }
                      }}
                      className="bg-muted/30 border-border/50 focus:border-accent transition-colors duration-300"
                    />
                  </div>
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

                {/* Seat Type Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Выберите раздел</Label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleInputChange('seatType', 'front')}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                        formData.seatType === 'front'
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border/50 bg-muted/20 hover:border-accent/50'
                      }`}
                    >
                      Передние
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('seatType', 'front-rear')}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                        formData.seatType === 'front-rear'
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border/50 bg-muted/20 hover:border-accent/50'
                      }`}
                    >
                      Передние + задние
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('seatType', 'steering')}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                        formData.seatType === 'steering'
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border/50 bg-muted/20 hover:border-accent/50'
                      }`}
                    >
                      Руль
                    </button>
                  </div>
                </div>

                {/* Product Selection */}
                <div className="space-y-2">
                  <Label>Выберите товар *</Label>
                  <Dialog open={productsDialogOpen} onOpenChange={setProductsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full justify-start bg-muted/30 border-border/50 focus:border-accent h-10"
                      >
                        {formData.color ? 
                          (formData.color.includes('чёрно-') ? 
                            formData.color.split(' ').slice(-1)[0] : 
                            formData.color.split(' ').slice(-1)[0]
                          ) : 
                          "Выберите товар"
                        }
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gradient-card backdrop-blur-glass border border-border/50 max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-playfair bg-gradient-primary bg-clip-text text-transparent">
                          Выберите товар
                        </DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {products[formData.seatType as keyof typeof products]?.map((product) => (
                          <div
                            key={product.id}
                            className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                              formData.color === product.name
                                ? 'border-accent bg-accent/10'
                                : 'border-border/50 bg-muted/20 hover:border-accent/50'
                            }`}
                            onClick={() => {
                              handleInputChange('color', product.name);
                              setProductsDialogOpen(false);
                            }}
                          >
                            <div className="space-y-3">
                              <div className="text-center">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-48 object-contain rounded-md mb-3"
                                />
                                <p className="text-sm font-medium mb-1">{product.name}</p>
                                <p className="text-xs text-muted-foreground mb-2">
                                  {product.colors.join(', ')} • {product.price} ₽
                                </p>
                              </div>
                              
                              <button
                                type="button"
                                className={`w-full py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${
                                  formData.color === product.name
                                    ? 'bg-accent text-accent-foreground'
                                    : 'bg-muted/50 hover:bg-muted/70'
                                }`}
                              >
                                {formData.color === product.name ? 'Выбрано' : 'Выбрать'}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
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

                {/* Total and Submit */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/30">
                  <span className="text-muted-foreground">Итого</span>
                  <span className="text-xl font-bold">{totalPrice} ₽</span>
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