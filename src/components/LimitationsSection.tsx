
import { Check, X } from 'lucide-react';

const LimitationsSection = () => {
  const limitations = [
    "Não substitui sua secretária física",
    "Não atende telefone",
    "Não imprime exames",
    "Não recebe pacientes no consultório"
  ];

  const benefits = [
    "Complementa sua equipe existente",
    "Automatiza o atendimento digital",
    "Libera equipe para foco presencial",
    "Solução acessível e eficiente"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-6">
            O Que a <span className="text-gold">MIA</span> Não Faz
          </h2>
          <p className="font-archivo text-xl text-dark/70 mb-4">
            (e por que isso é bom)
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Limitations */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border border-red-200">
              <h3 className="font-archivo font-bold text-2xl text-red-800 mb-8 text-center">
                O que a MIA NÃO faz:
              </h3>
              <div className="space-y-4">
                {limitations.map((limitation, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-red-200 p-2 rounded-full flex-shrink-0">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="font-archivo text-red-800 text-lg">
                      {limitation}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 border border-emerald-200">
              <h3 className="font-archivo font-bold text-2xl text-emerald-800 mb-8 text-center">
                Por que isso é BOM:
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 animate-fade-in"
                    style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  >
                    <div className="bg-emerald-200 p-2 rounded-full flex-shrink-0">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="font-archivo text-emerald-800 text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-3xl p-12 border border-gold/30">
              <h3 className="font-playfair text-3xl font-bold text-dark mb-6">
                E é exatamente por isso que ela é acessível.
              </h3>
              <p className="font-archivo text-xl text-dark/80 leading-relaxed max-w-3xl mx-auto">
                Ela complementa sua equipe. <span className="font-bold text-gold">Automatiza o digital</span>, 
                para que sua equipe <span className="font-bold text-gold">foque no presencial</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitationsSection;
