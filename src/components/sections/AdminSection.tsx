import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export type WithdrawRequest = {
  id: string;
  phone: string;
  bank: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
};

interface AdminSectionProps {
  withdrawRequests: WithdrawRequest[];
  handleApproveWithdraw: (id: string) => void;
  handleRejectWithdraw: (id: string) => void;
  onBack: () => void;
}

const ADMIN_CODE = '2267';

export function AdminSection({
  withdrawRequests,
  handleApproveWithdraw,
  handleRejectWithdraw,
  onBack
}: AdminSectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (code === ADMIN_CODE) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Неверный код доступа!');
      setCode('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCode('');
    setError('');
    onBack();
  };

  const getStatusBadge = (status: WithdrawRequest['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30">На модерации</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">Одобрено</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/30">Отклонено</Badge>;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Вход в админ-панель</h2>
          <p className="text-muted-foreground">Введите код доступа</p>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-4">
                <Icon name="Lock" size={48} className="text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Код доступа</label>
                <Input
                  type="password"
                  placeholder="Введите код"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError('');
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="w-full text-center text-2xl tracking-widest"
                  maxLength={4}
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <Icon name="AlertCircle" size={16} />
                    {error}
                  </p>
                )}
              </div>

              <Button
                onClick={handleLogin}
                disabled={code.length < 4}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 disabled:opacity-50 text-white font-bold py-6 rounded-xl"
              >
                <Icon name="LogIn" size={20} className="mr-2" />
                Войти
              </Button>

              <Button
                onClick={onBack}
                variant="outline"
                className="w-full"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Панель администратора</h2>
        <p className="text-muted-foreground">Управление заявками на вывод</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Icon name="ShieldCheck" size={24} className="text-accent" />
              Заявки на вывод
            </h3>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
              {withdrawRequests.filter(r => r.status === 'pending').length} новых
            </Badge>
          </div>

          {withdrawRequests.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="Inbox" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Нет заявок на вывод</p>
            </div>
          ) : (
            <div className="space-y-3">
              {withdrawRequests.map((request) => (
                <Card key={request.id} className="p-5 bg-card/50 border-2">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <Icon name="Banknote" size={24} className="text-primary" />
                          <p className="font-bold text-2xl text-primary">{request.amount} ₽</p>
                        </div>
                        
                        <div className="bg-background/50 p-3 rounded-lg space-y-2">
                          <div className="flex items-center gap-2">
                            <Icon name="Phone" size={18} className="text-accent" />
                            <p className="font-mono text-base font-semibold">{request.phone}</p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Icon name="Building" size={18} className="text-secondary" />
                            <p className="font-semibold text-base">{request.bank}</p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Icon name="Calendar" size={18} className="text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">{request.date}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        {getStatusBadge(request.status)}
                      </div>
                    </div>

                    {request.status === 'pending' && (
                      <div className="flex gap-2 pt-2 border-t border-border">
                        <Button
                          onClick={() => handleApproveWithdraw(request.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-xl"
                        >
                          <Icon name="CheckCircle" size={20} className="mr-2" />
                          Одобрить вывод
                        </Button>
                        <Button
                          onClick={() => handleRejectWithdraw(request.id)}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-6 rounded-xl"
                        >
                          <Icon name="XCircle" size={20} className="mr-2" />
                          Отклонить
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="pt-4 border-t border-border">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full border-red-500/30 text-red-600 hover:bg-red-500/10 font-semibold"
            >
              <Icon name="LogOut" size={20} className="mr-2" />
              Выйти из админ-панели
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
