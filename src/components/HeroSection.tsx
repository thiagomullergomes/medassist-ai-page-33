
import { Bot, MessageSquare, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark via-dark to-gold-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-dark/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gold/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Logo/Icon */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 bg-gradient-to-r from-gold to-gold-dark rounded-2xl flex items-center justify-center shadow-2xl animate-fade-in">
            <Bot className="w-10 h-10 text-dark" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full animate-pulse"></div>
        </div>

        {/* Main heading */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          <span className="block text-gold">MIA</span>
          <span className="block text-2xl md:text-3xl font-archivo font-light mt-2 text-light">
            MedMasters Inteligência Artificial
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-archivo text-xl md:text-2xl text-light/90 max-w-4xl mb-12 leading-relaxed animate-fade-in">
          A Inteligência Artificial que <span className="text-gold font-semibold">transforma o atendimento</span> no WhatsApp da sua clínica
        </p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-105 animate-fade-in">
            <MessageSquare className="w-8 h-8 text-gold mb-4 mx-auto" />
            <h3 className="font-archivo font-semibold text-white mb-2">Atendimento 24h</h3>
            <p className="text-light/80 text-sm">Nunca mais perca um paciente por demora na resposta</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Clock className="w-8 h-8 text-gold mb-4 mx-auto" />
            <h3 className="font-archivo font-semibold text-white mb-2">Agendamento Automático</h3>
            <p className="text-light/80 text-sm">Integração direta com Google Calendar</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Bot className="w-8 h-8 text-gold mb-4 mx-auto" />
            <h3 className="font-archivo font-semibold text-white mb-2">100% Inteligente</h3>
            <p className="text-light/80 text-sm">Sem supervisão humana necessária</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-gold to-gold-dark text-dark font-archivo font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105 animate-fade-in">
          Conheça a MIA
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
