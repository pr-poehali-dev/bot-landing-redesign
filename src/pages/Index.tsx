import { useState } from 'react';
import { DashboardSection } from '@/components/sections/DashboardSection';
import { CardSection } from '@/components/sections/CardSection';
import { BalanceSection } from '@/components/sections/BalanceSection';
import { ReferralSection } from '@/components/sections/ReferralSection';
import { WithdrawSection } from '@/components/sections/WithdrawSection';
import { SupportSection } from '@/components/sections/SupportSection';
import { DonateSection } from '@/components/sections/DonateSection';
import { AdminSection, WithdrawRequest } from '@/components/sections/AdminSection';

type Section = 'dashboard' | 'card' | 'balance' | 'referral' | 'withdraw' | 'support' | 'donate' | 'admin';

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard');
  const [balance, setBalance] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawPhone, setWithdrawPhone] = useState('');
  const [withdrawBank, setWithdrawBank] = useState('СПБ');
  const [referralLink] = useState('https://t.me/monvceyxccvbot?start=ref_' + Math.random().toString(36).substr(2, 9));
  const [withdrawRequests, setWithdrawRequests] = useState<WithdrawRequest[]>([]);
  const [showAdminButton, setShowAdminButton] = useState(false);

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
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'card':
        return <CardSection />;

      case 'balance':
        return <BalanceSection balance={balance} />;

      case 'referral':
        return <ReferralSection referralLink={referralLink} />;

      case 'withdraw':
        return (
          <WithdrawSection
            balance={balance}
            withdrawAmount={withdrawAmount}
            setWithdrawAmount={setWithdrawAmount}
            withdrawPhone={withdrawPhone}
            setWithdrawPhone={setWithdrawPhone}
            withdrawBank={withdrawBank}
            setWithdrawBank={setWithdrawBank}
            handleWithdraw={handleWithdraw}
          />
        );

      case 'support':
        return <SupportSection />;

      case 'donate':
        return <DonateSection />;

      case 'admin':
        return (
          <AdminSection
            withdrawRequests={withdrawRequests}
            handleApproveWithdraw={handleApproveWithdraw}
            handleRejectWithdraw={handleRejectWithdraw}
          />
        );

      default:
        return (
          <DashboardSection
            balance={balance}
            onNavigate={setActiveSection}
            showAdminButton={showAdminButton}
            setShowAdminButton={setShowAdminButton}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container max-w-2xl mx-auto p-6">
        {renderContent()}
      </div>
    </div>
  );
}
