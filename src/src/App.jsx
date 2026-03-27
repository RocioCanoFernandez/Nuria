import React from 'react';
import { Mail, Linkedin, Instagram, Calendar, ArrowRight, Facebook, Star, ExternalLink, GraduationCap, Bot, MessageSquare, MessageCircle, Download } from 'lucide-react';

const SeviAIHub = () => {
  // ELIMINADO: El Chatbot ahora se carga desde index.html para evitar errores de React.

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:Rocío Cano\r\nORG:SeviAI\r\nTITLE:IA práctica para hacer crecer tu empresa\r\nEMAIL:rocio@seviai.es\r\nURL:https://hub.seviai.es/\r\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rocio_Cano.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col lg:flex-row selection:bg-red-600 selection:text-white relative">

      {/* LEFT SIDE: Content & Hero */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center min-h-screen relative overflow-hidden">

        {/* Brand Tag */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-[10px] font-black mb-8 w-fit border border-red-100 shadow-sm relative z-10 uppercase tracking-[0.15em]">
          <span className="w-2 h-2 rounded-full bg-red-600 mr-2 animate-pulse"></span>
          Inteligencia artificial con rostro humano
        </div>

        {/* Logo & Profile Section */}
        <div className="flex items-center gap-8 mb-10 lg:mb-14 relative z-10">
          <img
            src="/SeviAI-asesoría y formación_horizontal_sin_fondo.png"
            alt="SeviAI"
            className="h-20 sm:h-24 w-auto object-contain"
          />
          <div className="h-20 w-px bg-slate-200 self-center hidden sm:block"></div>
          <div className="relative">
            <div className="w-28 h-28 rounded-full border-4 border-red-50 overflow-hidden shadow-2xl bg-slate-50">
              <img
                src="/rocio-headshot.JPG"
                alt="Rocío"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Roc%C3%ADo&background=C8202F&color=fff";
                }}
              />
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-md"></div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.05] relative z-10">
          IA práctica para hacer crecer tu empresa
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed relative z-10">
          Servicios, formación y recursos para aplicar inteligencia artificial de forma clara y útil en tu negocio.
        </p>

        {/* Buttons List */}
        <div className="flex flex-col gap-3 relative z-10 w-full max-w-md uppercase tracking-wider">

          <a href="https://www.seviai.es/formacion-ia/" className="group flex items-center justify-between p-5 bg-[#C8202F] hover:bg-[#A51A27] rounded-3xl transition-all shadow-xl shadow-red-100 border-b-4 border-red-900/20 active:translate-y-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/10">
                <Bot className="w-7 h-7" />
              </div>
              <div>
                <span className="block font-black text-white text-lg">Formación para empresas</span>
                <span className="text-[10px] text-red-50 font-bold opacity-80">Capacitación B2B Premium</span>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-white/50 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
          </a>

          <a href="https://ia-py-mi-booster.lovable.app/" className="group flex items-center justify-between p-5 bg-[#C8202F] hover:bg-[#A51A27] rounded-3xl transition-all shadow-xl shadow-red-100 border-b-4 border-red-900/20 active:translate-y-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/10">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="block font-black text-white text-lg">Curso IA para PYMEs</span>
                <span className="text-[10px] text-red-50 font-bold opacity-80">Autónomos y Emprendedores</span>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-white/50 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
          </a>

          <a href="https://seviai.es" className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl transition-all shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-colors border border-slate-100 font-bold">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-black text-slate-900">Web SeviAI</span>
                <span className="text-[10px] text-slate-500 font-bold">Servicios y Marca</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-red-400 transform group-hover:translate-x-1 transition-all" />
          </a>

          <a href="mailto:rocio@seviai.es" className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl transition-all shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-colors border border-slate-100 font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-black text-slate-900">Contacto Directo</span>
                <span className="text-[10px] text-slate-400 font-bold">rocio@seviai.es</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-red-400 transform group-hover:translate-x-1 transition-all" />
          </a>

          <a href="https://wa.me/message/HUZQ5TAK3ROOE1" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl transition-all shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:text-green-600 transition-colors border border-slate-100 font-bold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-black text-slate-900">WhatsApp</span>
                <span className="text-[10px] text-slate-400 font-bold">Hablemos por chat</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-green-400 transform group-hover:translate-x-1 transition-all" />
          </a>

        </div>

        {/* Isotipo Mark Background */}
        <div className="absolute bottom-[-10%] left-[-5%] opacity-[0.03] pointer-events-none z-0">
          <img
            src="/logo_sin_fondo.png"
            alt=""
            className="w-[500px] h-[500px] object-contain grayscale"
          />
        </div>
      </div>

      {/* RIGHT SIDE: Action Section & Conversion */}
      <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center relative bg-[#C8202F] min-h-screen">

        {/* BACKGROUND IMAGE CON MEJOR VISIBILIDAD */}
        <div
          className="absolute inset-[0] z-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(to bottom right, rgba(200, 32, 47, 0.45), rgba(139, 22, 33, 0.65)), url('/loop-copia.jpg')",
            backgroundBlendMode: 'normal'
          }}
        ></div>

        <div className="relative z-10 flex flex-col gap-6 max-w-xl mx-auto w-full">

          {/* MAIN CTA: Agenda */}
          <a href="https://cal.com/rocio-cano-seviai" className="block bg-white rounded-[45px] p-10 shadow-2xl hover:-translate-y-2 transition-all duration-500 group border-b-8 border-red-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <Calendar className="w-40 h-40 text-red-900" />
            </div>
            <div className="flex justify-between items-start mb-8 relative">
              <div className="px-5 py-2 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em]">RESERVAR CITA</div>
              <div className="bg-red-50 text-[#C8202F] p-4 rounded-[20px] group-hover:rotate-12 transition-transform shadow-md">
                <Calendar className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-4 group-hover:text-[#C8202F] transition-colors leading-tight">Calendario</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium opacity-80">Reserva una cita conmigo y vemos cómo aplicar la IA de forma útil, realista y adaptada a tu empresa.</p>
          </a>

          {/* SOCIALS & REVIEWS BOX */}
          <div className="bg-black/15 backdrop-blur-xl border border-white/10 rounded-[45px] p-8 md:p-10 flex flex-col gap-8">
            <div className="text-center md:text-left flex flex-col gap-2">
              <span className="text-red-200 font-black text-[10px] uppercase tracking-[0.35em] block">CONOCIMIENTO & REDES</span>
              <p className="text-white text-base font-medium opacity-90">Sígueme para aprender sobre IA aplicada a negocios reales.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <a href="https://linkedin.com/company/ia-sevilla" className="aspect-square bg-white/10 hover:bg-white text-white hover:text-red-700 transition-all rounded-[25px] flex items-center justify-center border border-white/10 shadow-lg">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/rociocano.ia/" className="aspect-square bg-white/10 hover:bg-white text-white hover:text-red-700 transition-all rounded-[25px] flex items-center justify-center border border-white/10 shadow-lg">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/asesoriaia" className="aspect-square bg-white/10 hover:bg-white text-white hover:text-red-700 transition-all rounded-[25px] flex items-center justify-center border border-white/10 shadow-lg">
                <Facebook className="w-8 h-8" />
              </a>
            </div>

            <a href="https://search.google.com/local/writereview?placeid=ChIJ-fSgQlCXyIcROqGvv0X8eyI&source=g.page.m._&laa=merchant-review-solicitation" className="flex items-center justify-center gap-3 py-6 bg-white text-slate-900 hover:bg-red-50 rounded-[30px] transition-all font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              Escribir reseña en Google
            </a>
          </div>

          {/* SeviAI Ecosystem Signature */}
          <div className="flex items-center justify-center gap-2 mt-8 opacity-60 hover:opacity-100 transition-opacity">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">
              © 2026 Rocío Cano
            </p>
            <div className="w-px h-3 bg-white/20 mx-1"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white flex items-center gap-1.5">
              SeviAI Ecosystem
              <img src="/logo_sin_fondo.png" alt="SeviAI" className="h-3 w-auto brightness-0 invert opacity-80" />
            </p>
          </div>

        </div>
      </div>

      {/* Floating Save Contact Button */}
      <button
        onClick={handleSaveContact}
        className="fixed top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md text-slate-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 group border border-white/50 cursor-pointer"
        title="Descargar Contacto"
        aria-label="Descargar Contacto"
      >
        <Download className="w-6 h-6 group-hover:text-[#C8202F] transition-colors drop-shadow-sm" />
      </button>

    </div>
  );
};

export default SeviAIHub;
