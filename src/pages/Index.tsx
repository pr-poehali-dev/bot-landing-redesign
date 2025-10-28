import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type Section = 'dashboard' | 'card' | 'balance' | 'referral' | 'withdraw';

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard');
  const [balance, setBalance] = useState(25000);
  const [cardNumber, setCardNumber] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleCardFormat = () => {
    if (cardNumber.length >= 16) {
      alert(`Карта ${cardNumber} успешно добавлена!`);
      setCardNumber('');
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount > 0 && amount <= balance) {
      setBalance(balance - amount);
      alert(`Заявка на вывод ${amount}₽ принята!`);
      setWithdrawAmount('');
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'card':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-2xl">
                <Icon name="CreditCard" size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Формить карту</h2>
                <p className="text-muted-foreground">Добавьте банковскую карту</p>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-xl border-primary/20">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Номер карты</label>
                  <Input
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                    className="bg-background/50 border-primary/30 text-lg"
                    maxLength={16}
                  />
                </div>
                <Button 
                  onClick={handleCardFormat} 
                  className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-all text-white font-semibold py-6 rounded-xl"
                >
                  <Icon name="Check" size={20} className="mr-2" />
                  Добавить карту
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
                <Icon name="Shield" size={24} className="text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Безопасное хранение</p>
              </Card>
              <Card className="p-4 bg-gradient-to-br from-secondary/20 to-primary/20 border-secondary/30">
                <Icon name="Zap" size={24} className="text-secondary mb-2" />
                <p className="text-sm text-muted-foreground">Мгновенные выплаты</p>
              </Card>
            </div>
          </div>
        );

      case 'balance':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-secondary to-primary rounded-2xl">
                <Icon name="Wallet" size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Баланс</h2>
                <p className="text-muted-foreground">Управление средствами</p>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary via-accent to-secondary border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
              <div className="relative">
                <p className="text-white/80 text-sm mb-2">Доступно</p>
                <h3 className="text-5xl font-bold text-white mb-1">{balance.toLocaleString('ru-RU')} ₽</h3>
                <Badge className="bg-white/20 text-white border-0 mt-3">
                  <Icon name="TrendingUp" size={14} className="mr-1" />
                  +12.5% за месяц
                </Badge>
              </div>
            </Card>

            <div className="grid gap-4">
              <Card className="p-5 bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-xl">
                      <Icon name="ArrowDownLeft" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Последнее пополнение</p>
                      <p className="text-sm text-muted-foreground">Сегодня, 14:32</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-primary">+5,000 ₽</p>
                </div>
              </Card>

              <Card className="p-5 bg-card/80 backdrop-blur border-border/50 hover:border-secondary/50 transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/20 rounded-xl">
                      <Icon name="ArrowUpRight" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold">Последний вывод</p>
                      <p className="text-sm text-muted-foreground">Вчера, 18:45</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-secondary">-3,500 ₽</p>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'referral':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-2xl">
                <Icon name="Users" size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Реферальная программа</h2>
                <p className="text-muted-foreground">Приглашай и зарабатывай</p>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Ваш код</p>
                    <p className="text-2xl font-bold text-accent">REF2024XYZ</p>
                  </div>
                  <Button variant="outline" className="border-accent/50 hover:bg-accent/20">
                    <Icon name="Copy" size={18} className="mr-2" />
                    Копировать
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-5 text-center bg-card/80 backdrop-blur">
                <Icon name="UserPlus" size={32} className="text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Рефералов</p>
              </Card>
              <Card className="p-5 text-center bg-card/80 backdrop-blur">
                <Icon name="DollarSign" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold">12,350 ₽</p>
                <p className="text-sm text-muted-foreground">Заработано</p>
              </Card>
            </div>

            <Card className="p-5 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Gift" size={20} className="text-primary" />
                Условия программы
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>15% с каждого пополнения реферала</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>Бонус 500₽ за первого реферала</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                  <span>Безлимитное количество рефералов</span>
                </li>
              </ul>
            </Card>
          </div>
        );

      case 'withdraw':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-2xl">
                <Icon name="Banknote" size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Вывод средств</h2>
                <p className="text-muted-foreground">Быстрый перевод на карту</p>
              </div>
            </div>

            <Card className="p-6 bg-card/80 backdrop-blur border-secondary/30">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block flex items-center justify-between">
                    <span>Сумма вывода</span>
                    <span className="text-muted-foreground">Доступно: {balance.toLocaleString('ru-RU')} ₽</span>
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="0"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      className="bg-background/50 border-secondary/30 text-2xl font-bold pr-12 py-6"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-muted-foreground">₽</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setWithdrawAmount('1000')}
                    className="flex-1"
                  >
                    1,000 ₽
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setWithdrawAmount('5000')}
                    className="flex-1"
                  >
                    5,000 ₽
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setWithdrawAmount(balance.toString())}
                    className="flex-1"
                  >
                    Всё
                </Button>
                </div>

                <Button 
                  onClick={handleWithdraw} 
                  className="w-full bg-gradient-to-r from-secondary via-primary to-accent hover:opacity-90 transition-all text-white font-semibold py-6 rounded-xl text-lg"
                  disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Вывести средства
                </Button>
              </div>
            </Card>

            <Card className="p-5 bg-muted/50 border-border/50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Info" size={18} className="text-secondary" />
                Информация о выводе
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Минимальная сумма:</span>
                  <span className="font-medium text-foreground">100 ₽</span>
                </li>
                <li className="flex justify-between">
                  <span>Комиссия:</span>
                  <span className="font-medium text-foreground">0%</span>
                </li>
                <li className="flex justify-between">
                  <span>Время обработки:</span>
                  <span className="font-medium text-foreground">до 5 минут</span>
                </li>
              </ul>
            </Card>
          </div>
        );

      default:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl mb-4">
                <Icon name="Sparkles" size={48} className="text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Личный кабинет
              </h1>
              <p className="text-muted-foreground text-lg">Добро пожаловать в систему управления</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 hover:scale-105 transition-transform">
                <Icon name="Wallet" size={32} className="text-primary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Баланс</p>
                <p className="text-2xl font-bold">{balance.toLocaleString('ru-RU')} ₽</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/20 to-primary/20 border-secondary/30 hover:scale-105 transition-transform">
                <Icon name="Users" size={32} className="text-secondary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Рефералы</p>
                <p className="text-2xl font-bold">47</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/20 to-secondary/20 border-accent/30 hover:scale-105 transition-transform">
                <Icon name="TrendingUp" size={32} className="text-accent mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Доход</p>
                <p className="text-2xl font-bold">12,350 ₽</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/20 to-accent/20 border-secondary/30 hover:scale-105 transition-transform">
                <Icon name="Activity" size={32} className="text-secondary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Активность</p>
                <p className="text-2xl font-bold">98%</p>
              </Card>
            </div>

            <Card className="p-6 bg-card/80 backdrop-blur border-border/50">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="History" size={20} className="text-primary" />
                Последние операции
              </h3>
              <div className="space-y-3">
                {[
                  { type: 'in', amount: 5000, desc: 'Пополнение баланса', time: '14:32' },
                  { type: 'ref', amount: 750, desc: 'Реферальный бонус', time: '12:15' },
                  { type: 'out', amount: 3500, desc: 'Вывод средств', time: 'Вчера' },
                ].map((op, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        op.type === 'in' ? 'bg-primary/20' : 
                        op.type === 'ref' ? 'bg-accent/20' : 'bg-secondary/20'
                      }`}>
                        <Icon 
                          name={op.type === 'in' ? 'ArrowDownLeft' : op.type === 'ref' ? 'Gift' : 'ArrowUpRight'} 
                          size={18}
                          className={
                            op.type === 'in' ? 'text-primary' : 
                            op.type === 'ref' ? 'text-accent' : 'text-secondary'
                          }
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{op.desc}</p>
                        <p className="text-xs text-muted-foreground">{op.time}</p>
                      </div>
                    </div>
                    <p className={`font-bold ${
                      op.type === 'out' ? 'text-secondary' : 'text-primary'
                    }`}>
                      {op.type === 'out' ? '-' : '+'}{op.amount.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pb-24">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        {renderContent()}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border/50 shadow-2xl">
        <div className="container max-w-2xl mx-auto px-4 py-3">
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant={activeSection === 'card' ? 'default' : 'ghost'}
              className={`flex flex-col items-center gap-1 h-auto py-3 rounded-xl ${
                activeSection === 'card' 
                  ? 'bg-gradient-to-br from-primary to-accent text-white' 
                  : 'hover:bg-primary/10'
              }`}
              onClick={() => setActiveSection('card')}
            >
              <Icon name="CreditCard" size={22} />
              <span className="text-xs font-medium">Карта</span>
            </Button>

            <Button
              variant={activeSection === 'balance' ? 'default' : 'ghost'}
              className={`flex flex-col items-center gap-1 h-auto py-3 rounded-xl ${
                activeSection === 'balance' 
                  ? 'bg-gradient-to-br from-secondary to-primary text-white' 
                  : 'hover:bg-secondary/10'
              }`}
              onClick={() => setActiveSection('balance')}
            >
              <Icon name="Wallet" size={22} />
              <span className="text-xs font-medium">Баланс</span>
            </Button>

            <Button
              variant={activeSection === 'referral' ? 'default' : 'ghost'}
              className={`flex flex-col items-center gap-1 h-auto py-3 rounded-xl ${
                activeSection === 'referral' 
                  ? 'bg-gradient-to-br from-accent to-primary text-white' 
                  : 'hover:bg-accent/10'
              }`}
              onClick={() => setActiveSection('referral')}
            >
              <Icon name="Users" size={22} />
              <span className="text-xs font-medium">Рефералы</span>
            </Button>

            <Button
              variant={activeSection === 'withdraw' ? 'default' : 'ghost'}
              className={`flex flex-col items-center gap-1 h-auto py-3 rounded-xl ${
                activeSection === 'withdraw' 
                  ? 'bg-gradient-to-br from-secondary to-accent text-white' 
                  : 'hover:bg-secondary/10'
              }`}
              onClick={() => setActiveSection('withdraw')}
            >
              <Icon name="Banknote" size={22} />
              <span className="text-xs font-medium">Вывод</span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="w-full mt-2 text-xs text-muted-foreground hover:text-foreground"
            onClick={() => setActiveSection('dashboard')}
          >
            <Icon name="Home" size={16} className="mr-1" />
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
}
