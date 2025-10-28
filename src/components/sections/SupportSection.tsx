import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export function SupportSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Техподдержка</h2>
        <p className="text-muted-foreground">Мы всегда на связи</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex p-4 bg-gradient-to-br from-accent to-primary rounded-2xl mb-4">
              <Icon name="Headphones" size={48} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Нужна помощь?</h3>
            <p className="text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => window.open('https://t.me/Alfa_Bank778', '_blank')}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-6 rounded-xl"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>

            <Card className="p-5 bg-card/50">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="MessageCircle" size={18} className="text-accent" />
                Часто задаваемые вопросы
              </h4>
              <div className="space-y-3 text-sm">
                <details className="group">
                  <summary className="cursor-pointer font-medium flex items-center gap-2">
                    <Icon name="ChevronRight" size={16} className="group-open:rotate-90 transition-transform" />
                    Как получить 500 рублей?
                  </summary>
                  <p className="mt-2 ml-6 text-muted-foreground">
                    Оформите Альфа-Карту по ссылке, активируйте её и совершите покупку от 200₽
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-medium flex items-center gap-2">
                    <Icon name="ChevronRight" size={16} className="group-open:rotate-90 transition-transform" />
                    Как вывести деньги?
                  </summary>
                  <p className="mt-2 ml-6 text-muted-foreground">
                    Перейдите в раздел "Вывод", заполните данные и отправьте заявку
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-medium flex items-center gap-2">
                    <Icon name="ChevronRight" size={16} className="group-open:rotate-90 transition-transform" />
                    Сколько обрабатывается заявка?
                  </summary>
                  <p className="mt-2 ml-6 text-muted-foreground">
                    Обработка заявки занимает до 24 часов
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-medium flex items-center gap-2">
                    <Icon name="ChevronRight" size={16} className="group-open:rotate-90 transition-transform" />
                    Есть ли комиссия за вывод?
                  </summary>
                  <p className="mt-2 ml-6 text-muted-foreground">
                    Нет, вывод средств полностью бесплатный
                  </p>
                </details>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
