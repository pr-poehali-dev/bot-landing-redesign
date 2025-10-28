import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface DashboardSectionProps {
  balance: number;
  onNavigate: (section: 'card' | 'balance' | 'referral' | 'withdraw' | 'support' | 'donate' | 'admin') => void;
  showAdminButton: boolean;
  setShowAdminButton: (show: boolean) => void;
}

export function DashboardSection({ 
  balance, 
  onNavigate, 
  showAdminButton, 
  setShowAdminButton 
}: DashboardSectionProps) {
  let clickCount = 0;
  let clickTimer: NodeJS.Timeout;

  const handleLogoClick = () => {
    clickCount++;
    clearTimeout(clickTimer);
    
    if (clickCount === 5) {
      setShowAdminButton(!showAdminButton);
      alert(showAdminButton ? 'Админ-панель скрыта' : 'Админ-панель активирована!');
      clickCount = 0;
    }
    
    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, 2000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <div 
          className="inline-flex p-6 bg-gradient-to-br from-accent to-primary rounded-3xl mb-4 cursor-pointer hover:scale-105 transition-transform"
          onClick={handleLogoClick}
        >
          <Icon name="Sparkles" size={64} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Money Bot
        </h1>
        <p className="text-muted-foreground">Ваш путь к финансовой свободе</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Текущий баланс</p>
            <p className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {balance} ₽
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() => onNavigate('card')}
          className="h-32 bg-gradient-to-br from-primary to-accent hover:opacity-90 transition-all flex flex-col items-center justify-center gap-3 rounded-2xl"
        >
          <Icon name="CreditCard" size={32} className="text-white" />
          <span className="text-white font-semibold text-lg">Карта</span>
        </Button>

        <Button
          onClick={() => onNavigate('balance')}
          className="h-32 bg-gradient-to-br from-accent to-secondary hover:opacity-90 transition-all flex flex-col items-center justify-center gap-3 rounded-2xl"
        >
          <Icon name="Wallet" size={32} className="text-white" />
          <span className="text-white font-semibold text-lg">Баланс</span>
        </Button>

        <Button
          onClick={() => onNavigate('referral')}
          className="h-32 bg-gradient-to-br from-secondary to-primary hover:opacity-90 transition-all flex flex-col items-center justify-center gap-3 rounded-2xl"
        >
          <Icon name="Users" size={32} className="text-white" />
          <span className="text-white font-semibold text-lg">Рефералы</span>
        </Button>

        <Button
          onClick={() => onNavigate('withdraw')}
          className="h-32 bg-gradient-to-br from-primary via-accent to-secondary hover:opacity-90 transition-all flex flex-col items-center justify-center gap-3 rounded-2xl"
        >
          <Icon name="Send" size={32} className="text-white" />
          <span className="text-white font-semibold text-lg">Вывод</span>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Button
          onClick={() => onNavigate('support')}
          variant="outline"
          className="h-20 flex flex-col items-center justify-center gap-2 rounded-xl border-primary/30 hover:bg-primary/10"
        >
          <Icon name="Headphones" size={24} className="text-primary" />
          <span className="text-xs font-medium">Поддержка</span>
        </Button>

        <Button
          onClick={() => onNavigate('donate')}
          variant="outline"
          className="h-20 flex flex-col items-center justify-center gap-2 rounded-xl border-accent/30 hover:bg-accent/10"
        >
          <Icon name="Heart" size={24} className="text-accent" />
          <span className="text-xs font-medium">Донат</span>
        </Button>

        <Button
          onClick={() => onNavigate('dashboard')}
          variant="outline"
          className="h-20 flex flex-col items-center justify-center gap-2 rounded-xl border-secondary/30 hover:bg-secondary/10"
        >
          <Icon name="Home" size={24} className="text-secondary" />
          <span className="text-xs font-medium">Главная</span>
        </Button>
      </div>

      {showAdminButton && (
        <Button
          onClick={() => onNavigate('admin')}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90"
        >
          <Icon name="ShieldCheck" size={20} className="mr-2" />
          Админ-панель
        </Button>
      )}
    </div>
  );
}
