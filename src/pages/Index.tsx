import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [fromAmount, setFromAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const exchangeRates = [
    { from: 'USD', to: 'EUR', rate: 0.92, trend: 'up' },
    { from: 'USD', to: 'GBP', rate: 0.79, trend: 'down' },
    { from: 'EUR', to: 'GBP', rate: 0.86, trend: 'up' },
    { from: 'USD', to: 'RUB', rate: 92.50, trend: 'up' },
    { from: 'EUR', to: 'RUB', rate: 100.25, trend: 'down' },
    { from: 'BTC', to: 'USD', rate: 43250, trend: 'up' }
  ];

  const reviews = [
    {
      name: 'Александр М.',
      rating: 5,
      text: 'Быстрый обмен, отличный курс. Рекомендую!',
      date: '2 дня назад'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Пользуюсь уже полгода, всё работает отлично. Курсы выгодные.',
      date: '5 дней назад'
    },
    {
      name: 'Дмитрий П.',
      rating: 4,
      text: 'Хороший сервис, обмен прошел за 10 минут.',
      date: '1 неделю назад'
    }
  ];

  const calculateExchange = () => {
    const amount = parseFloat(fromAmount);
    const rate = exchangeRates.find(r => r.from === fromCurrency && r.to === toCurrency)?.rate || 1;
    return (amount * rate).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Coins" size={32} className="text-primary" />
              <span className="text-2xl font-heading font-bold text-secondary">meow</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#exchange" className="hover:text-primary transition-colors">Обмен</a>
              <a href="#rates" className="hover:text-primary transition-colors">Курсы</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      <section id="exchange" className="py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-secondary">
              Обмен валюты онлайн
            </h1>
            <p className="text-xl text-muted-foreground">
              Выгодные курсы, быстрые переводы, безопасные сделки
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-xl animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Калькулятор обмена</CardTitle>
              <CardDescription>Рассчитайте сумму обмена по актуальному курсу</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Отдаёте</label>
                  <Input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="text-lg"
                  />
                  <Select value={fromCurrency} onValueChange={setFromCurrency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - Доллар США</SelectItem>
                      <SelectItem value="EUR">EUR - Евро</SelectItem>
                      <SelectItem value="GBP">GBP - Фунт стерлингов</SelectItem>
                      <SelectItem value="RUB">RUB - Российский рубль</SelectItem>
                      <SelectItem value="BTC">BTC - Bitcoin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Получаете</label>
                  <Input
                    type="text"
                    value={calculateExchange()}
                    readOnly
                    className="text-lg font-semibold"
                  />
                  <Select value={toCurrency} onValueChange={setToCurrency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - Доллар США</SelectItem>
                      <SelectItem value="EUR">EUR - Евро</SelectItem>
                      <SelectItem value="GBP">GBP - Фунт стерлингов</SelectItem>
                      <SelectItem value="RUB">RUB - Российский рубль</SelectItem>
                      <SelectItem value="BTC">BTC - Bitcoin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full text-lg py-6" size="lg">
                <Icon name="ArrowRightLeft" className="mr-2" size={20} />
                Обменять
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} />
                <span>Все операции защищены SSL-шифрованием</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rates" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-secondary">Актуальные курсы</h2>
            <p className="text-muted-foreground">Обновляются в режиме реального времени</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {exchangeRates.map((rate, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="TrendingUp" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-lg">
                          {rate.from}/{rate.to}
                        </div>
                        <div className="text-sm text-muted-foreground">Обмен</div>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 ${rate.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      <Icon name={rate.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
                    </div>
                  </div>
                  <div className="text-3xl font-heading font-bold text-secondary">
                    {rate.rate.toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-secondary">Отзывы клиентов</h2>
            <p className="text-muted-foreground">Нам доверяют тысячи пользователей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{review.name}</span>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center text-secondary">О нас</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <span className="font-heading font-bold text-secondary">meow</span> — это современный онлайн-обменник валюты, 
                который работает с 2020 года. Мы предоставляем безопасные и выгодные условия обмена для наших клиентов.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-secondary">Быстро</h3>
                  <p className="text-sm">Обмен за 5-10 минут</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-secondary">Безопасно</h3>
                  <p className="text-sm">SSL-шифрование данных</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-secondary">Выгодно</h3>
                  <p className="text-sm">Лучшие курсы на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center text-secondary">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">support@meow.exchange</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-medium">+7 (800) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Режим работы</div>
                      <div className="font-medium">24/7</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Telegram</div>
                      <div className="font-medium">@meow_support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Globe" size={20} className="text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Адрес</div>
                      <div className="font-medium">г. Москва, ул. Примерная, 1</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Coins" size={28} className="text-primary" />
                <span className="text-xl font-heading font-bold">meow</span>
              </div>
              <p className="text-sm text-white/80">
                Надёжный онлайн-обменник с 2020 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#exchange" className="hover:text-primary transition-colors">Обмен валюты</a></li>
                <li><a href="#rates" className="hover:text-primary transition-colors">Курсы валют</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила обмена</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>support@meow.exchange</li>
                <li>+7 (800) 123-45-67</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            © 2024 meow. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
