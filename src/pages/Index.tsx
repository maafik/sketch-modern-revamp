import RestaurantHeader from '@/components/RestaurantHeader';
import RestaurantHero from '@/components/RestaurantHero';
import RestaurantAbout from '@/components/RestaurantAbout';
import RestaurantMenu from '@/components/RestaurantMenu';
import RestaurantEvents from '@/components/RestaurantEvents';
import RestaurantContacts from '@/components/RestaurantContacts';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <RestaurantHeader />
      <main>
        <RestaurantHero />
        <RestaurantAbout />
        <RestaurantMenu />
        <RestaurantEvents />
        <RestaurantContacts />
      </main>
    </div>
  );
};

export default Index;
