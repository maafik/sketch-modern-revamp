import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const Cart = () => {
  const { items, removeItem, increment, decrement, totalCount, totalPrice, clear } = useCart();
  const [open, setOpen] = useState(false);

  const handleWhatsappOrder = () => {
    const lines = items.map((i) => `• ${i.name}${i.withRearSeats ? ' (с задним сиденьем)' : ''} — ${i.quantity} шт × ${i.price} ₽`);
    const message = `Здравствуйте! Хочу оформить заказ:\n\n${lines.join('\n')}\n\nИтого: ${totalPrice} ₽`;
    const url = `https://wa.me/79517623467?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {totalCount > 0 && (
        <SheetTrigger asChild>
          <button id="cart-fab" className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full p-4 bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-glow">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-black/80 text-white text-[11px] leading-5 text-center">
              {totalCount}
            </span>
          </button>
        </SheetTrigger>
      )}
      <SheetContent side="right" className="w-[100vw] max-w-[420px] box-border h-[100dvh]">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        <div className="mt-2 h-full flex flex-col">
          <ScrollArea className="flex-1 pr-3">
            <div className="space-y-4">
              {items.length === 0 && <div className="text-sm text-muted-foreground">Ваша корзина пуста</div>}
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 items-center border border-border/50 rounded-xl p-3">
                  <img src={i.image} alt={i.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="font-medium leading-tight">
                      {i.name}{i.withRearSeats ? ' (с задним сиденьем)' : ''}
                    </div>
                    <div className="text-xs text-muted-foreground">{i.colors.join(', ')}</div>
                    <div className="mt-1 text-sm font-semibold">{i.price} ₽</div>
                    <div className="mt-2 inline-flex items-center gap-2">
                      <Button size="sm" variant="outline" onClick={() => decrement(i.id)}>-</Button>
                      <span>{i.quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => increment(i.id)}>+</Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(i.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="border-t border-border/50 pt-4 pb-4 mt-2 space-y-3 sticky bottom-0 bg-background">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Итого</span>
              <span className="text-lg font-bold">{totalPrice} ₽</span>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1" variant="secondary" onClick={clear} disabled={items.length === 0}>Очистить</Button>
              <Button className="flex-1 bg-gradient-primary" onClick={handleWhatsappOrder} disabled={items.length === 0}>Заказать в WhatsApp</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;


