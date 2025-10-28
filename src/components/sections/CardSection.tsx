import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export function CardSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Привет, друзья! 👋</h2>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-2xl">
              <Icon name="Sparkles" size={32} className="text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">У нас отличная новость! 🌟</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary via-accent to-secondary p-6 rounded-2xl text-center">
            <p className="text-white/90 mb-2 text-lg">Вы можете получить</p>
            <p className="text-5xl font-bold text-white mb-2">500 ₽</p>
            <p className="text-white/90 text-sm">от нас</p>
            <div className="my-3">
              <Icon name="Plus" size={24} className="text-white mx-auto" />
            </div>
            <p className="text-5xl font-bold text-white mb-2">500 ₽</p>
            <p className="text-white/90 text-sm mb-4">от Альфа-Банка</p>
            <div className="border-t border-white/30 pt-4 mt-4">
              <p className="text-white/90 mb-1">Итого</p>
              <p className="text-6xl font-bold text-white">1000 ₽</p>
            </div>
          </div>

          <div className="space-y-3 bg-card/50 p-5 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Icon name="ListChecks" size={22} className="text-primary" />
              Что нужно сделать?
            </h3>
            
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <p className="text-sm leading-relaxed">Оформить Альфа-Карту по ссылке:</p>
                <a 
                  href="https://alfa.me/ASQWHN" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent font-semibold underline mt-1 block"
                >
                  https://alfa.me/ASQWHN
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                2
              </div>
              <p className="text-sm leading-relaxed pt-1">Активировать карту в приложении</p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <p className="text-sm leading-relaxed">Сделать покупку от <span className="font-bold text-primary">200 ₽</span></p>
                <p className="text-sm mt-1">Отправить чек сюда: <a href="https://t.me/Alfa_Bank778" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent font-semibold underline">@Alfa_Bank778</a></p>
                <p className="text-xs text-muted-foreground mt-1">для выплаты <span className="text-primary font-semibold">500 ₽</span></p>
              </div>
            </div>
          </div>

          <Card className="p-5 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Heart" size={20} className="text-accent" />
              Преимущества Альфа-Карты
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Бесплатное обслуживание</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Кэшбэк каждый месяц</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Множество классных предложений от партнёров</span>
              </li>
            </ul>
          </Card>

          <Button 
            onClick={() => window.open('https://alfa.me/ASQWHN', '_blank')}
            className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-all text-white font-bold py-7 rounded-xl text-lg"
          >
            <Icon name="ExternalLink" size={22} className="mr-2" />
            Оформить Альфа-Карту
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Не упустите шанс! ❤️
          </p>
        </div>
      </Card>
    </div>
  );
}
