
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Plano Semestral",
      price: "R$ 3.000",
      period: "à vista ou parcelado",
      average: "Média de R$ 500/mês",
      popular: false,
      features: [
        "Atendimento 24h no WhatsApp",
        "Integração Google Calendar",
        "Agendamentos automáticos",
        "Confirmações e lembretes",
        "Cancelamentos inteligentes",
        "Suporte técnico completo"
      ]
    },
    {
      name: "Plano Anual",
      price: "R$ 5.000",
      period: "à vista ou parcelado",
      average: "Média de R$ 417/mês",
      popular: true,
      features: [
        "Atendimento 24h no WhatsApp",
        "Integração Google Calendar",
        "Agendamentos automáticos",
        "Confirmações e lembretes",
        "Cancelamentos inteligentes",
        "Suporte técnico completo",
        "Personalizações avançadas",
        "Relatórios mensais detalhados"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-dark via-dark/95 to-gold-dark/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Investimento
          </h2>
          <p className="font-archivo text-xl text-light/90 max-w-3xl mx-auto leading-relaxed">
            Para contratar a MIA, você pode escolher:
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 hover:scale-105 animate-fade-in flex flex-col ${
                plan.popular 
                  ? 'border-gold bg-gradient-to-br from-gold/10 to-gold-dark/10 shadow-2xl shadow-gold/20' 
                  : 'border-gold/20 hover:border-gold/40'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-gold to-gold-dark px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4 text-dark" />
                    <span className="font-archivo font-bold text-dark text-sm">MAIS ESCOLHIDO</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="font-archivo text-4xl md:text-5xl font-bold text-gold">
                    {plan.price}
                  </span>
                </div>
                <p className="font-archivo text-light/80 mb-2">{plan.period}</p>
                <p className="font-archivo text-gold font-semibold text-lg">
                  {plan.average}
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="bg-gradient-to-r from-gold to-gold-dark p-1 rounded-full flex-shrink-0">
                      <Check className="w-4 h-4 text-dark" />
                    </div>
                    <span className="font-archivo text-light text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full font-archivo font-bold text-lg py-4 rounded-2xl transition-all duration-300 mt-auto ${
                plan.popular
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-dark hover:shadow-lg hover:shadow-gold/25'
                  : 'bg-white/10 text-white border border-gold/30 hover:bg-gold/20 hover:border-gold'
              }`}>
                Escolher {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-3xl p-8 max-w-3xl mx-auto border border-gold/30">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Pronto para transformar sua clínica?
            </h3>
            <p className="font-archivo text-light/90 mb-6 leading-relaxed">
              Implemente a MIA hoje e veja a diferença que um atendimento inteligente pode fazer.
            </p>
            <button className="bg-gradient-to-r from-gold to-gold-dark text-dark font-archivo font-bold text-xl px-12 py-4 rounded-full shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105">
              Quero a MIA na Minha Clínica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
