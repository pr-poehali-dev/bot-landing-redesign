import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface WithdrawSectionProps {
  balance: number;
  withdrawAmount: string;
  setWithdrawAmount: (value: string) => void;
  withdrawPhone: string;
  setWithdrawPhone: (value: string) => void;
  withdrawBank: string;
  setWithdrawBank: (value: string) => void;
  handleWithdraw: () => void;
}

export function WithdrawSection({
  balance,
  withdrawAmount,
  setWithdrawAmount,
  withdrawPhone,
  setWithdrawPhone,
  withdrawBank,
  setWithdrawBank,
  handleWithdraw
}: WithdrawSectionProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Вывод средств</h2>
        <p className="text-muted-foreground">Выведите деньги на свой счет</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Доступно для вывода</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {balance} ₽
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Сумма вывода</label>
              <Input
                type="number"
                placeholder="Введите сумму"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Номер телефона</label>
              <Input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={withdrawPhone}
                onChange={(e) => setWithdrawPhone(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Банк</label>
              <select
                value={withdrawBank}
                onChange={(e) => setWithdrawBank(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg"
              >
                <option value="СПБ">СПБ</option>
                <option value="Сбербанк">Сбербанк</option>
                <option value="Тинькофф">Тинькофф</option>
                <option value="Альфа-Банк">Альфа-Банк</option>
                <option value="ВТБ">ВТБ</option>
              </select>
            </div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Важная информация:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Минимальная сумма вывода: 100 ₽</li>
                  <li>• Обработка заявки: до 24 часов</li>
                  <li>• Комиссия: 0%</li>
                </ul>
              </div>
            </div>
          </Card>

          <Button
            onClick={handleWithdraw}
            disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0}
            className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 disabled:opacity-50 transition-all text-white font-bold py-6 rounded-xl"
          >
            <Icon name="Send" size={20} className="mr-2" />
            Отправить заявку
          </Button>
        </div>
      </Card>
    </div>
  );
}
