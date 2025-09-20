import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 1,
      name: "Накидка чёрный/синий",
      image: "https://sketch-master.store/assets/img/gallery-5/gallery-1.webp",
      colors: ["Чёрный", "Синий"],
      description: "Элегантное сочетание черного и синего цветов для стильного интерьера"
    },
    {
      id: 2,
      name: "Накидка чёрный/красный",
      image: "https://sketch-master.store/assets/img/gallery-5/gallery-2.webp",
      colors: ["Чёрный", "Красный"],
      description: "Динамичное сочетание черного и красного для спортивного образа"
    },
    {
      id: 3,
      name: "Накидка чёрная",
      image: "https://sketch-master.store/assets/img/gallery-5/gallery-3.webp",
      colors: ["Чёрный"],
      description: "Классическая черная накидка - универсальное решение"
    },
    {
      id: 4,
      name: "Накидка серая",
      image: "https://sketch-master.store/assets/img/gallery-5/gallery-4.webp",
      colors: ["Серый"],
      description: "Стильная серая накидка для элегантного интерьера"
    },
    {
      id: 5,
      name: "Накидка бежевая",
      image: "https://sketch-master.store/assets/img/gallery-5/gallery-5.webp",
      colors: ["Бежевый"],
      description: "Теплая бежевая накидка для уютного салона"
    }
  ];

  const handleOrder = (product: any) => {
    const message = `Здравствуйте! Хочу заказать ${product.name}. Цвета: ${product.colors.join(', ')}`;
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
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline"
                          className="bg-foreground/10 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-foreground/20 hover:scale-105 transition-all duration-300"
                          onClick={() => setSelectedProduct(product)}
                        >
                          Подробнее
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-gradient-card backdrop-blur-glass border border-border/50 max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-playfair bg-gradient-primary bg-clip-text text-transparent">
                            {selectedProduct?.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img 
                            src={selectedProduct?.image} 
                            alt={selectedProduct?.name}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <p className="text-muted-foreground">{selectedProduct?.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedProduct?.colors.map((color: string) => (
                              <span key={color} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                                {color}
                              </span>
                            ))}
                          </div>
                          <div className="pt-4">
                            <p className="text-sm text-muted-foreground mb-3">
                              Задние сиденья +2000 ₽
                            </p>
                            <Button 
                              onClick={() => handleOrder(selectedProduct)}
                              className="w-full bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-all duration-300"
                            >
                              Заказать в WhatsApp
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

                  <Button 
                    onClick={() => handleOrder(product)}
                    className="w-full bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow hover:scale-105 transition-all duration-300"
                  >
                    Заказать
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