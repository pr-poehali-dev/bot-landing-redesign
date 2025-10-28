import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export function DonateSection() {
  const phoneNumber = '89069892267';

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    alert('Номер скопирован!');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Поддержать проект</h2>
        <p className="text-muted-foreground">Спасибо за вашу поддержку! ❤️</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex p-4 bg-gradient-to-br from-accent to-primary rounded-2xl mb-4">
              <Icon name="Heart" size={48} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Ваша поддержка важна!</h3>
            <p className="text-muted-foreground">Помогите нам развивать проект</p>
          </div>

          <Card className="p-6 bg-card/50">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Номер для перевода</p>
                <p className="text-3xl font-bold mb-1">{phoneNumber}</p>
                <p className="text-sm text-muted-foreground">Озон Банк</p>
              </div>

              <Button
                onClick={copyPhoneNumber}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                <Icon name="Copy" size={18} className="mr-2" />
                Скопировать номер
              </Button>
            </div>
          </Card>

          <Card className="p-5 bg-accent/10 border-accent/30">
            <div className="flex items-start gap-3">
              <Icon name="Sparkles" size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-2">На что пойдут средства:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Улучшение функционала сервиса</li>
                  <li>• Добавление новых возможностей</li>
                  <li>• Поддержка работы платформы</li>
                  <li>• Развитие команды</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>Любая сумма будет оценена по достоинству!</p>
            <p className="mt-1">Благодарим вас за доверие 🙏</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
