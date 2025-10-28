import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type Section = 'dashboard' | 'card' | 'balance' | 'referral' | 'withdraw' | 'support' | 'donate' | 'admin';

type WithdrawRequest = {
  id: string;
  phone: string;
  bank: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
};

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard');
  const [balance, setBalance] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawPhone, setWithdrawPhone] = useState('');
  const [withdrawBank, setWithdrawBank] = useState('СПБ');
  const [referralLink] = useState('https://t.me/monvceyxccvbot?start=ref_' + Math.random().toString(36).substr(2, 9));
  const [withdrawRequests, setWithdrawRequests] = useState<WithdrawRequest[]>([]);
  const [showAdminButton, setShowAdminButton] = useState(false);

  const handleCardFormat = () => {
    if (cardNumber.length >= 16) {
      alert(`Карта ${cardNumber} успешно добавлена!`);
      setCardNumber('');
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount > 0 && amount <= balance && withdrawPhone && withdrawBank) {
      const newRequest: WithdrawRequest = {
        id: Date.now().toString(),
        phone: withdrawPhone,
        bank: withdrawBank,
        amount: amount,
        status: 'pending',
        date: new Date().toLocaleString('ru-RU')
      };
      setWithdrawRequests([newRequest, ...withdrawRequests]);
      alert(`Заявка на вывод ${amount}₽ отправлена на модерацию!`);
      setWithdrawAmount('');
      setWithdrawPhone('');
    } else if (!withdrawPhone) {
      alert('Укажите номер телефона!');
    }
  };

  const handleApproveWithdraw = (id: string) => {
    setWithdrawRequests(withdrawRequests.map(req => 
      req.id === id ? { ...req, status: 'approved' as const } : req
    ));
    const request = withdrawRequests.find(r => r.id === id);
    if (request) {
      setBalance(balance - request.amount);
      alert('Заявка одобрена!');
    }
  };

  const handleRejectWithdraw = (id: string) => {
    setWithdrawRequests(withdrawRequests.map(req => 
      req.id === id ? { ...req, status: 'rejected' as const } : req
    ));
    alert('Заявка отклонена!');
  };}

  const renderContent = () => {
    switch (activeSection) {
      case 'card':
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
                <p className="text-white/80 text-sm mb-2">Ваш баланс</p>
                <h3 className="text-5xl font-bold text-white mb-1">{balance.toLocaleString('ru-RU')} ₽</h3>
                {balance === 0 && (
                  <p className="text-white/70 text-sm mt-3">
                    Оформите карту и получите первый бонус! 💰
                  </p>
                )}
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Info" size={20} className="text-primary" />
                <h3 className="font-semibold">Как начислить баланс?</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Оформите Альфа-Карту по ссылке в разделе "Карта" и получите <span className="text-primary font-semibold">500 ₽</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Пригласите друзей через реферальную программу — <span className="text-accent font-semibold">200 ₽</span> за каждого</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="AlertCircle" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-secondary">Бонусы начисляются только после выполнения всех условий</span>
                </li>
              </ul>
            </Card>
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
                <div className="text-center mb-4">
                  <div className="inline-block p-3 bg-gradient-to-br from-accent to-primary rounded-2xl mb-3">
                    <Icon name="Gift" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Зарабатывайте 200 ₽</h3>
                  <p className="text-sm text-muted-foreground">За каждого друга, который оформит карту</p>
                </div>

                <div className="bg-card/50 p-4 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-2">Ваша реферальная ссылка:</p>
                  <div className="flex gap-2">
                    <Input 
                      value={referralLink} 
                      readOnly 
                      className="bg-background/50 text-xs"
                    />
                    <Button 
                      variant="outline" 
                      className="border-accent/50 hover:bg-accent/20 flex-shrink-0"
                      onClick={() => {
                        navigator.clipboard.writeText(referralLink);
                        alert('Ссылка скопирована!');
                      }}
                    >
                      <Icon name="Copy" size={18} />
                    </Button>
                  </div>
                </div>

                <Button 
                  onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent('Получи 1000₽ за оформление Альфа-Карты! 🎁')}`, '_blank')}
                  className="w-full bg-gradient-to-r from-accent via-primary to-secondary hover:opacity-90 transition-all text-white font-semibold py-6 rounded-xl"
                >
                  <Icon name="Share2" size={20} className="mr-2" />
                  Поделиться в Telegram
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-5 text-center bg-card/80 backdrop-blur">
                <Icon name="UserPlus" size={32} className="text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Рефералов</p>
              </Card>
              <Card className="p-5 text-center bg-card/80 backdrop-blur">
                <Icon name="DollarSign" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold">0 ₽</p>
                <p className="text-sm text-muted-foreground">Заработано</p>
              </Card>
            </div>

            <Card className="p-5 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="AlertCircle" size={20} className="text-primary" />
                Условия начисления
              </h3>
              <div className="space-y-3">
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/30">
                  <p className="text-accent font-bold text-lg mb-1">200 ₽ за реферала</p>
                  <p className="text-xs text-muted-foreground">Начисляется автоматически</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Друг переходит по вашей ссылке</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Оформляет Альфа-Карту</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Выполняет все условия (активация + покупка от 200₽)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Zap" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-accent font-semibold">Вам автоматически начисляется 200₽ на баланс</span>
                  </li>
                </ul>
                <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/30 mt-3">
                  <p className="text-xs text-secondary flex items-start gap-2">
                    <Icon name="AlertCircle" size={14} className="mt-0.5 flex-shrink-0" />
                    <span>Без выполнения условий бонус не начисляется</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'support':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-primary to-accent rounded-3xl mb-4">
                <Icon name="Headphones" size={48} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Техподдержка</h2>
              <p className="text-muted-foreground">Мы всегда на связи!</p>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="MessageCircle" size={20} className="text-primary" />
                Свяжитесь с нами
              </h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => window.open('https://t.me/Alfa_Bank778', '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-6 rounded-xl"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Ответим в течение 5 минут
                </p>
              </div>
            </Card>

            <Card className="p-5 bg-card/80 backdrop-blur">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="HelpCircle" size={20} className="text-accent" />
                Частые вопросы
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-1">Когда придут деньги?</p>
                  <p className="text-muted-foreground">Вывод обрабатывается до 24 часов</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-1">Как получить реферальный бонус?</p>
                  <p className="text-muted-foreground">Друг должен оформить карту и выполнить все условия</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-1">Минимальная сумма вывода?</p>
                  <p className="text-muted-foreground">100 рублей</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'donate':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-accent to-secondary rounded-3xl mb-4">
                <Icon name="Heart" size={48} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Поддержать проект</h2>
              <p className="text-muted-foreground">Ваша поддержка важна для нас! ❤️</p>
            </div>

            <Card className="p-6 bg-gradient-to-br from-accent/20 to-secondary/20 border-accent/30">
              <div className="text-center space-y-4">
                <div className="inline-block p-3 bg-gradient-to-br from-accent to-primary rounded-2xl mb-2">
                  <Icon name="DollarSign" size={32} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Реквизиты для доната:</p>
                  <div className="bg-card/50 p-4 rounded-xl space-y-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Номер телефона</p>
                      <p className="text-xl font-bold text-accent">8 906 989 22 67</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Банк</p>
                      <p className="text-lg font-semibold">Озон Банк</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    navigator.clipboard.writeText('89069892267');
                    alert('Номер скопирован в буфер обмена!');
                  }}
                  variant="outline"
                  className="w-full border-accent/50 hover:bg-accent/20"
                >
                  <Icon name="Copy" size={18} className="mr-2" />
                  Скопировать номер
                </Button>
              </div>
            </Card>

            <Card className="p-5 bg-card/80 backdrop-blur">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Sparkles" size={20} className="text-accent" />
                Зачем донатить?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Поддержка работы сервиса</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Развитие новых функций</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Быстрая техподдержка</span>
                </li>
              </ul>
            </Card>
          </div>
        );

      case 'admin':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-destructive to-primary rounded-2xl">
                <Icon name="ShieldCheck" size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Админ-панель</h2>
                <p className="text-muted-foreground">Управление заявками на вывод</p>
              </div>
            </div>

            {withdrawRequests.length === 0 ? (
              <Card className="p-8 text-center bg-card/80 backdrop-blur">
                <Icon name="Inbox" size={48} className="text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Нет новых заявок на вывод</p>
              </Card>
            ) : (
              <div className="space-y-4">
                {withdrawRequests.map((request) => (
                  <Card key={request.id} className={`p-5 ${
                    request.status === 'approved' ? 'bg-primary/10 border-primary/30' :
                    request.status === 'rejected' ? 'bg-destructive/10 border-destructive/30' :
                    'bg-card/80 backdrop-blur border-accent/30'
                  }`}>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-lg">{request.amount.toLocaleString('ru-RU')} ₽</p>
                          <p className="text-xs text-muted-foreground">{request.date}</p>
                        </div>
                        {request.status === 'pending' && (
                          <Badge className="bg-accent/20 text-accent border-0">На модерации</Badge>
                        )}
                        {request.status === 'approved' && (
                          <Badge className="bg-primary/20 text-primary border-0">Одобрено</Badge>
                        )}
                        {request.status === 'rejected' && (
                          <Badge className="bg-destructive/20 text-destructive border-0">Отклонено</Badge>
                        )}
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Номер телефона:</span>
                          <span className="font-semibold">{request.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Банк:</span>
                          <span className="font-semibold">{request.bank}</span>
                        </div>
                      </div>

                      {request.status === 'pending' && (
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            onClick={() => handleApproveWithdraw(request.id)}
                            className="bg-primary hover:bg-primary/90 text-white"
                          >
                            <Icon name="Check" size={18} className="mr-2" />
                            Одобрить
                          </Button>
                          <Button
                            onClick={() => handleRejectWithdraw(request.id)}
                            variant="destructive"
                          >
                            <Icon name="X" size={18} className="mr-2" />
                            Отклонить
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
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

                <div>
                  <label className="text-sm font-medium mb-2 block">Номер телефона СПБ</label>
                  <Input
                    type="tel"
                    placeholder="89069892267"
                    value={withdrawPhone}
                    onChange={(e) => setWithdrawPhone(e.target.value.replace(/\D/g, '').slice(0, 11))}
                    className="bg-background/50 border-secondary/30"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Банк для вывода</label>
                  <select
                    value={withdrawBank}
                    onChange={(e) => setWithdrawBank(e.target.value)}
                    className="w-full p-3 bg-background/50 border border-secondary/30 rounded-lg text-foreground"
                  >
                    <option value="СПБ">СПБ</option>
                    <option value="Сбербанк">Сбербанк</option>
                    <option value="Тинькофф">Тинькофф</option>
                    <option value="Альфа-Банк">Альфа-Банк</option>
                    <option value="ВТБ">ВТБ</option>
                    <option value="Озон Банк">Озон Банк</option>
                    <option value="Другой">Другой</option>
                  </select>
                </div>

                <Button 
                  onClick={handleWithdraw} 
                  className="w-full bg-gradient-to-r from-secondary via-primary to-accent hover:opacity-90 transition-all text-white font-semibold py-6 rounded-xl text-lg"
                  disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0 || !withdrawPhone}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
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

          <div className="grid grid-cols-3 gap-2 mt-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={() => setActiveSection('support')}
            >
              <Icon name="Headphones" size={16} className="mr-1" />
              Поддержка
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={() => setActiveSection('donate')}
            >
              <Icon name="Heart" size={16} className="mr-1" />
              Донат
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={() => setActiveSection('dashboard')}
            >
              <Icon name="Home" size={16} className="mr-1" />
              Главная
            </Button>
          </div>

          {showAdminButton && (
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-2 border-destructive/50 text-destructive hover:bg-destructive/10"
              onClick={() => setActiveSection('admin')}
            >
              <Icon name="ShieldCheck" size={16} className="mr-1" />
              Админ-панель
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="w-full mt-1 text-xs text-muted-foreground/50"
            onClick={() => setShowAdminButton(!showAdminButton)}
          >
            {showAdminButton ? '👁️' : '•'}
          </Button>
        </div>
      </div>
    </div>
  );
}