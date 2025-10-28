import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ReferralSectionProps {
  referralLink: string;
}

export function ReferralSection({ referralLink }: ReferralSectionProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Ссылка скопирована!');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Реферальная программа</h2>
        <p className="text-muted-foreground">Приглашай друзей и получай бонусы!</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex p-4 bg-gradient-to-br from-accent to-primary rounded-2xl mb-4">
              <Icon name="Users" size={48} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Зарабатывай с друзьями!</h3>
            <p className="text-muted-foreground">Получай бонусы за каждого приглашенного друга</p>
          </div>

          <div className="bg-card/50 p-5 rounded-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Icon name="Gift" size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold">100 ₽</p>
                <p className="text-sm text-muted-foreground">за каждого друга</p>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground mb-3">Ваша реферальная ссылка:</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-sm"
                />
                <Button
                  onClick={copyToClipboard}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <Icon name="Copy" size={18} />
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-5 bg-accent/10 border-accent/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Lightbulb" size={18} className="text-accent" />
              Как это работает?
            </h4>
            <ol className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">1</span>
                <span>Поделитесь своей реферальной ссылкой</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">2</span>
                <span>Ваш друг регистрируется по ссылке</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">3</span>
                <span>Вы получаете 100 ₽ на баланс</span>
              </li>
            </ol>
          </Card>

          <Button
            onClick={copyToClipboard}
            className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-all text-white font-bold py-6 rounded-xl"
          >
            <Icon name="Share2" size={20} className="mr-2" />
            Поделиться ссылкой
          </Button>
        </div>
      </Card>
    </div>
  );
}
