import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface BalanceSectionProps {
  balance: number;
}

export function BalanceSection({ balance }: BalanceSectionProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Мой баланс</h2>
        <p className="text-muted-foreground">Ваши средства</p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 bg-gradient-to-br from-accent to-primary rounded-2xl">
            <Icon name="Wallet" size={48} className="text-white" />
          </div>
          <div>
            <p className="text-muted-foreground mb-2">Доступно</p>
            <p className="text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {balance} ₽
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Icon name="TrendingUp" size={20} className="text-accent" />
          Как увеличить баланс?
        </h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <span>Оформите Альфа-Карту и получите 500 ₽</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <span>Приглашайте друзей по реферальной ссылке</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <span>Участвуйте в акциях и конкурсах</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
