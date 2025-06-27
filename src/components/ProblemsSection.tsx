
import { AlertTriangle, Clock, MessageCircle, Zap } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: MessageCircle,
      title: "Secretária sobrecarregada com WhatsApp?",
      description: "Múltiplas conversas simultâneas prejudicam a produtividade"
    },
    {
      icon: Clock,
      title: "Pacientes desistem por falta de resposta rápida?",
      description: "Cada minuto de espera aumenta a chance de cancelamento"
    },
    {
      icon: AlertTriangle,
      title: "Cancelamentos e reagendamentos tomam tempo demais?",
      description: "Processos manuais consomem recursos valiosos da equipe"
    },
    {
      icon: Zap,
      title: "Equipe para tudo para responder mensagens?",
      description: "Interrupções constantes prejudicam o atendimento presencial"
    }
  ];

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-6">
            Você já percebeu que:
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gold/10 hover:shadow-2xl hover:border-gold/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-gold to-gold-dark p-3 rounded-2xl flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h3 className="font-archivo font-bold text-dark text-lg mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-dark/70 font-archivo leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold to-gold-dark rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-dark mb-4">
              Apresentamos a MIA
            </h3>
            <p className="font-archivo text-dark/80 text-lg leading-relaxed">
              Uma agente de inteligência artificial criada especialmente para clínicas e consultórios médicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
