
import { MessageSquare, Calendar, Bell, RefreshCw, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Responde seus pacientes no WhatsApp 24h por dia",
      description: "Atendimento inteligente e humanizado, sem intervalos"
    },
    {
      icon: Calendar,
      title: "Faz agendamentos diretamente no Google Calendar",
      description: "Integração perfeita com sua agenda existente"
    },
    {
      icon: Bell,
      title: "Confirma consultas, envia lembretes e responde dúvidas",
      description: "Comunicação proativa que reduz faltas e no-shows"
    },
    {
      icon: RefreshCw,
      title: "Cancela ou remarca horários sem confusão",
      description: "Gerenciamento inteligente de mudanças de agenda"
    },
    {
      icon: Shield,
      title: "Quebra objeções e garante atendimento profissional",
      description: "Treinada para converter leads em agendamentos"
    },
    {
      icon: Zap,
      title: "Linguagem natural, rápida e eficiente",
      description: "Experiência fluida que seus pacientes vão amar"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-dark via-dark/95 to-gold-dark/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            O que a <span className="text-gold">MIA</span> faz
          </h2>
          <p className="font-archivo text-xl text-light/90 max-w-3xl mx-auto leading-relaxed">
            Tudo isso com linguagem natural, rápida e eficiente.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gold/20 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-gold to-gold-dark p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-dark" />
              </div>
              <h3 className="font-archivo font-bold text-white text-lg mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-light/80 font-archivo leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-3xl p-12 border border-gold/30 text-center">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              Principais Funcionalidades
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-light font-archivo">Atendimento automatizado e inteligente via WhatsApp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-light font-archivo">Integração com Google Calendar para agendamentos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-light font-archivo">Follow-ups simples para evitar faltas</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-light font-archivo">Fluxos prontos e personalizáveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-light font-archivo">Atendimento 100% feito por IA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-light font-archivo">Suporte técnico completo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
