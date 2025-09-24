import { createContext, useContext, useMemo, useState, ReactNode } from 'react';

export type CartItem = {
  id: string;
  name: string;
  image: string;
  colors: string[];
  withRearSeats: boolean;
  quantity: number;
  price: number; // unit price based on withRearSeats
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
  totalCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem: CartContextValue['addItem'] = (item) => {
    const id = `${item.name}-${item.withRearSeats ? 'rear' : 'front'}-${item.colors.join('-')}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + item.quantity } : i));
      }
      return [...prev, { ...item, id }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));
  const increment = (id: string) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)));
  const decrement = (id: string) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i)));
  const clear = () => setItems([]);

  const { totalCount, totalPrice } = useMemo(() => {
    const totalCount = items.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = items.reduce((s, i) => s + i.quantity * i.price, 0);
    return { totalCount, totalPrice };
  }, [items]);

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    increment,
    decrement,
    clear,
    totalCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};


