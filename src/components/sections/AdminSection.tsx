import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
}

export function AdminSection({
  withdrawRequests,
  handleApproveWithdraw,
  handleRejectWithdraw
}: AdminSectionProps) {
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
                <Card key={request.id} className="p-4 bg-card/50">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-semibold text-lg">{request.amount} ₽</p>
                        <p className="text-sm text-muted-foreground">
                          {request.bank} • {request.phone}
                        </p>
                        <p className="text-xs text-muted-foreground">{request.date}</p>
                      </div>
                      {getStatusBadge(request.status)}
                    </div>

                    {request.status === 'pending' && (
                      <div className="flex gap-2 pt-2">
                        <Button
                          onClick={() => handleApproveWithdraw(request.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700"
                        >
                          <Icon name="Check" size={16} className="mr-1" />
                          Одобрить
                        </Button>
                        <Button
                          onClick={() => handleRejectWithdraw(request.id)}
                          variant="outline"
                          className="flex-1 border-red-500/30 text-red-600 hover:bg-red-500/10"
                        >
                          <Icon name="X" size={16} className="mr-1" />
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
      </Card>
    </div>
  );
}
