import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useCart } from '@/hooks/use-cart';
import { Car, CarFront, CircleDot } from 'lucide-react';

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [includeRearSeats, setIncludeRearSeats] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<string>('front');
  const { addItem } = useCart();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const products = {
    front: [
    {
      id: 1,
      name: "Накидка чёрный/синий",
      image: "/src/assets/seats/7666670075.webp",
      colors: ["Чёрный", "Синий"],
        description: "Элегантное сочетание черного и синего цветов для стильного интерьера",
        price: 1999
    },
    {
      id: 2,
      name: "Накидка чёрный/красный",
      image: "/src/assets/role/7343275804.webp",
      colors: ["Чёрный", "Красный"],
        description: "Динамичное сочетание черного и красного для спортивного образа",
        price: 1999
    },
    {
      id: 3,
      name: "Накидка чёрная",
      image: "/src/assets/seats/7666669193.webp",
      colors: ["Чёрный"],
        description: "Классическая черная накидка - универсальное решение",
        price: 1999
    },
    {
      id: 4,
      name: "Накидка серая",
      image: "/src/assets/seats/7666671249.webp",
      colors: ["Серый"],
        description: "Стильная серая накидка для элегантного интерьера",
        price: 1999
    },
    {
      id: 5,
      name: "Накидка бежевая",
      image: "/src/assets/seats/7666670487.webp",
      colors: ["Бежевый"],
        description: "Теплая бежевая накидка для уютного салона",
        price: 1999
      }
    ],
    'front-rear': [
      {
        id: 6,
        name: "Комплект черно-бежевый",
        image: "/src/assets/seats/7666667986.webp",
        colors: ["Чёрный", "Бежевый"],
        description: "Элегантный черно-бежевый комплект накидок для всех сидений автомобиля",
        price: 3999
      },
      {
        id: 7,
        name: "Комплект чёрный",
        image: "/src/assets/seats/7666669193.webp",
        colors: ["Чёрный"],
        description: "Классический черный комплект накидок для всех сидений автомобиля",
        price: 3999
      },
      {
        id: 8,
        name: "Комплект чёрно-синий",
        image: "/src/assets/seats/7666670075.webp",
        colors: ["Чёрный", "Синий"],
        description: "Полный комплект накидок для передних и задних сидений в элегантном черно-синем цвете",
        price: 3999
      },
      {
        id: 9,
        name: "Комплект бежевый",
        image: "/src/assets/seats/7666670487.webp",
        colors: ["Бежевый"],
        description: "Теплый бежевый комплект накидок для уютного салона",
        price: 3999
      },
      {
        id: 10,
        name: "Комплект чёрно-серый",
        image: "/src/assets/seats/7666671249.webp",
        colors: ["Чёрный", "Серый"],
        description: "Стильный черно-серый комплект накидок для современного интерьера",
        price: 3999
      },
      {
        id: 11,
        name: "Комплект чёрно-белый",
        image: "/src/assets/seats/7666672417.webp",
        colors: ["Чёрный", "Белый"],
        description: "Контрастный черно-белый комплект накидок для элегантного салона",
        price: 3999
      }
    ],
    steering: [
      {
        id: 12,
        name: "Оплетка на руль универсальная 37-39см чёрно-синяя",
        image: "/src/assets/role/7312390070.webp",
        colors: ["Чёрный", "Синий"],
        description: "Универсальная оплетка на руль 37-39см в элегантном черно-синем цвете",
        price: 599
      },
      {
        id: 13,
        name: "Оплетка на руль универсальная 37-39см чёрно-белая",
        image: "/src/assets/role/7343248197.webp",
        colors: ["Чёрный", "Белый"],
        description: "Универсальная оплетка на руль 37-39см в контрастном черно-белом цвете",
        price: 599
      },
      {
        id: 14,
        name: "Оплетка на руль универсальная 37-39см чёрно-голубая",
        image: "/src/assets/role/7343261889.webp",
        colors: ["Чёрный", "Голубой"],
        description: "Универсальная оплетка на руль 37-39см в свежем черно-голубом цвете",
        price: 599
      },
      {
        id: 15,
        name: "Оплетка на руль универсальная 37-39см чёрно-жёлтая",
        image: "/src/assets/role/7343266486.webp",
        colors: ["Чёрный", "Жёлтый"],
        description: "Универсальная оплетка на руль 37-39см в ярком черно-жёлтом цвете",
        price: 599
      },
      {
        id: 16,
        name: "Оплетка на руль универсальная 37-39см чёрно-розовая",
        image: "/src/assets/role/7343271053.webp",
        colors: ["Чёрный", "Розовый"],
        description: "Универсальная оплетка на руль 37-39см в стильном черно-розовом цвете",
        price: 599
      },
      {
        id: 17,
        name: "Оплетка на руль универсальная 37-39см чёрно-красная",
        image: "/src/assets/role/7343275804.webp",
        colors: ["Чёрный", "Красный"],
        description: "Универсальная оплетка на руль 37-39см в спортивном черно-красном цвете",
        price: 599
      }
    ]
  };

  const handleOrder = (product: any) => {
    const message = `Здравствуйте! Хочу заказать ${product.name}. Цвета: ${product.colors.join(', ')}. Цена: ${product.price} ₽`;
    const whatsappUrl = `https://wa.me/79517623467?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Наши накидки
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Каждая накидка создана с любовью и вниманием к деталям. Выберите свой стиль.
          </p>
          
          {/* Section Switcher */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 px-4">
            <button
              onClick={() => setSelectedSection('front')}
              className={`flex flex-col items-center p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 min-h-[80px] sm:min-h-[100px] w-full sm:w-auto ${
                selectedSection === 'front'
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border/50 bg-muted/20 hover:border-accent/50'
              }`}
            >
              <CarFront className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
              <span className="text-xs sm:text-sm font-medium text-center">Передние</span>
            </button>
            <button
              onClick={() => setSelectedSection('front-rear')}
              className={`flex flex-col items-center p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 min-h-[80px] sm:min-h-[100px] w-full sm:w-auto ${
                selectedSection === 'front-rear'
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border/50 bg-muted/20 hover:border-accent/50'
              }`}
            >
              <Car className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
              <span className="text-xs sm:text-sm font-medium text-center">Передние + задние</span>
            </button>
            <button
              onClick={() => setSelectedSection('steering')}
              className={`flex flex-col items-center p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 min-h-[80px] sm:min-h-[100px] w-full sm:w-auto ${
                selectedSection === 'steering'
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border/50 bg-muted/20 hover:border-accent/50'
              }`}
            >
              <CircleDot className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
              <span className="text-xs sm:text-sm font-medium text-center">Руль</span>
            </button>
          </div>
          
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products[selectedSection as keyof typeof products].map((product, index) => (
            <div 
              key={product.id} 
              className={`group relative animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-gradient-card backdrop-blur-glass border border-border/50 rounded-3xl overflow-hidden hover:shadow-hover transition-all duration-500 hover:-translate-y-2 hover:border-accent/50">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline"
                          className="bg-foreground/10 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-foreground/20 hover:scale-105 transition-all duration-300 min-h-[44px] touch-manipulation"
                          style={{ touchAction: 'manipulation' }}
                          onClick={() => {
                            setSelectedProduct(product);
                            setIncludeRearSeats(false);
                            setDialogOpen(true);
                          }}
                        >
                          Подробнее
                        </Button>
                      </DialogTrigger>
                      <DialogContent 
                        className="bg-gradient-card backdrop-blur-glass border border-border/50 max-w-md"
                        onCloseAutoFocus={(e) => e.preventDefault()}
                        onOpenAutoFocus={(e) => e.preventDefault()}
                      >
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-playfair bg-gradient-primary bg-clip-text text-transparent">
                            {selectedProduct?.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img 
                            src={selectedProduct?.image} 
                            alt={selectedProduct?.name}
                            className="w-full h-64 object-contain rounded-lg"
                          />
                          <p className="text-muted-foreground">{selectedProduct?.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedProduct?.colors.map((color: string) => (
                              <span key={color} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                                {color}
                              </span>
                            ))}
                          </div>
                          <div className="pt-4 space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Итого</span>
                              <span className="font-semibold">{selectedProduct?.price} ₽</span>
                            </div>
                            <Button 
                              onClick={() => handleOrder(selectedProduct)}
                              className="w-full bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-all duration-300 min-h-[44px] touch-manipulation"
                              style={{ touchAction: 'manipulation' }}
                            >
                              Заказать в WhatsApp — {selectedProduct?.price} ₽
                            </Button>
                            <Button 
                              variant="secondary"
                              className="w-full min-h-[44px] touch-manipulation"
                              style={{ touchAction: 'manipulation' }}
                              onClick={() => {
                                if (!selectedProduct) return;
                                addItem({
                                  name: selectedProduct.name,
                                  image: selectedProduct.image,
                                  colors: selectedProduct.colors,
                                  withRearSeats: includeRearSeats,
                                  quantity: 1,
                                  price: selectedProduct.price,
                                });
                                setDialogOpen(false);
                                const source = document.getElementById(`add-to-cart-btn-${selectedProduct.id}`);
                                const target = document.getElementById('cart-fab');
                                if (source && target) {
                                  const sRect = source.getBoundingClientRect();
                                  const tRect = target.getBoundingClientRect();
                                  const ghost = document.createElement('div');
                                  ghost.className = 'fixed z-[60] w-10 h-10 rounded-full bg-gradient-primary shadow-lg';
                                  ghost.style.left = `${sRect.left + sRect.width / 2 - 20}px`;
                                  ghost.style.top = `${sRect.top + sRect.height / 2 - 20}px`;
                                  ghost.style.transition = 'transform 600ms cubic-bezier(0.22,1,0.36,1), opacity 600ms';
                                  document.body.appendChild(ghost);
                                  const dx = tRect.left + tRect.width / 2 - (sRect.left + sRect.width / 2);
                                  const dy = tRect.top + tRect.height / 2 - (sRect.top + sRect.height / 2);
                                  requestAnimationFrame(() => {
                                    ghost.style.transform = `translate(${dx}px, ${dy}px) scale(0.2)`;
                                    ghost.style.opacity = '0.2';
                                  });
                                  setTimeout(() => ghost.remove(), 650);
                                }
                              }}
                            >
                              Добавить в корзину — {selectedProduct?.price} ₽
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.colors.map((color) => (
                      <span key={color} className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                  <div className="mb-4 text-lg font-semibold">{product.price} ₽</div>

                  <Button 
                    onClick={() => handleOrder(product)}
                    className="w-full bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow hover:scale-105 transition-all duration-300 min-h-[44px] touch-manipulation"
                    style={{ touchAction: 'manipulation' }}
                  >
                    Заказать — {product.price} ₽
                  </Button>
                  <Button 
                    id={`add-to-cart-btn-${product.id}`}
                    onClick={() => {
                      addItem({
                        name: product.name,
                        image: product.image,
                        colors: product.colors,
                        withRearSeats: false,
                        quantity: 1,
                        price: product.price,
                      });
                      const source = document.getElementById(`add-to-cart-btn-${product.id}`);
                      const target = document.getElementById('cart-fab');
                      if (source && target) {
                        const sRect = source.getBoundingClientRect();
                        const tRect = target.getBoundingClientRect();
                        const ghost = document.createElement('div');
                        ghost.className = 'fixed z-[60] w-10 h-10 rounded-full bg-gradient-primary shadow-lg';
                        ghost.style.left = `${sRect.left + sRect.width / 2 - 20}px`;
                        ghost.style.top = `${sRect.top + sRect.height / 2 - 20}px`;
                        ghost.style.transition = 'transform 600ms cubic-bezier(0.22,1,0.36,1), opacity 600ms';
                        document.body.appendChild(ghost);
                        const dx = tRect.left + tRect.width / 2 - (sRect.left + sRect.width / 2);
                        const dy = tRect.top + tRect.height / 2 - (sRect.top + sRect.height / 2);
                        requestAnimationFrame(() => {
                          ghost.style.transform = `translate(${dx}px, ${dy}px) scale(0.2)`;
                          ghost.style.opacity = '0.2';
                        });
                        setTimeout(() => ghost.remove(), 650);
                      }
                    }}
                    className="w-full mt-2 min-h-[44px] touch-manipulation" 
                    variant="secondary"
                    style={{ touchAction: 'manipulation' }}
                  >
                    Добавить в корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;