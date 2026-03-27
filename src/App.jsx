import React from 'react';
import { Mail, Phone, Globe, Users, HeartPulse, Building2, Newspaper, ChevronRight, MessageCircle, Download } from 'lucide-react';

const SeviAIHub = () => {
  // CONFIGURACIÓN CENTRALIZADA DEL HUB
  // Los datos marcados como PENDIENTE están vacíos ("") para no renderizarse hasta confirmación
  const hubData = {
    name: "eNBlanco Centro Sanitario",
    activity: "Centro sanitario",
    email: "", // PENDIENTE
    phone: "", // PENDIENTE
    whatsapp: "", // PENDIENTE
    mainHeadline: "", // PENDIENTE
    logoUrl: "/enblanco_logo.jpeg", // Asset disponible
    profilePicture: "/enblanco_foto.png", // PENDIENTE de confirmación
    backgroundImage: "/enblanco_fondo.png", // PENDIENTE de confirmación
    hubUrl: "https://url-del-hub.com/" // PENDIENTE (necesario para la vCard)
  };

  // ENLACES PRINCIPALES
  const mainLinks = [
    { id: 'servicios', title: "Ver nuestros servicios", url: "", icon: HeartPulse, subtitle: "Conoce nuestras áreas" },
    { id: 'contacto', title: "Contacto", url: "", icon: Mail, subtitle: "Hablemos" },
    { id: 'web', title: "Web principal", url: "", icon: Globe, subtitle: "Página oficial" }
  ];

  // ENLACES SECUNDARIOS
  const secondaryLinks = [
    { id: 'equipo', title: "Nuestro equipo", url: "", icon: Users, subtitle: "Profesionales" },
    { id: 'como-funciona', title: "Cómo funcionamos", url: "", icon: Building2, subtitle: "Organización" },
    { id: 'noticias', title: "Noticias", url: "", icon: Newspaper, subtitle: "Actualidad" }
  ];

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:${hubData.name}\r\nORG:${hubData.name}\r\nTITLE:${hubData.activity}\r\n${hubData.phone ? `TEL;TYPE=WORK,VOICE:${hubData.phone}\r\n` : ''}${hubData.email ? `EMAIL;TYPE=INTERNET:${hubData.email}\r\n` : ''}URL:${hubData.hubUrl}\r\nNOTE:Centro sanitario.\r\nEND:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'eNBlanco_Contacto.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Helper para renderizar los enlaces que tengan URL confirmada (o mostrarlos como borrador visual si no la tienen)
  const renderLinks = (linksArray) => {
    return linksArray.map((link) => {
      const isPending = link.url === "";
      return (
        <a 
          key={link.id} 
          href={isPending ? "#" : link.url} 
          target={isPending ? "_self" : "_blank"} 
          rel="noopener noreferrer" 
          onClick={isPending ? (e) => e.preventDefault() : undefined}
          className={`group flex items-center justify-between p-4 bg-white hover:bg-blue-50 border border-slate-200 rounded-3xl transition-all shadow-sm mb-3 active:translate-y-1 ${isPending ? 'opacity-80' : ''}`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 group-hover:text-red-600 transition-colors border border-blue-100 font-bold">
              <link.icon className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-black text-slate-900 text-lg leading-tight">{link.title}</span>
              <span className="text-xs text-slate-500 font-medium">{link.subtitle} {isPending && "(Próximamente)"}</span>
            </div>
          </div>
          <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-red-500 transform group-hover:translate-x-1 transition-all" />
        </a>
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col items-center selection:bg-red-600 selection:text-white relative">
      
      {/* IMAGEN DE FONDO PENDIENTE */}
      {hubData.backgroundImage ? (
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.98)), url('${hubData.backgroundImage}')` 
          }}
        ></div>
      ) : (
        <div className="fixed inset-0 z-0 bg-slate-50"></div>
      )}

      {/* CONTENEDOR PRINCIPAL (MOBILE FIRST) */}
      <div className="w-full max-w-md min-h-screen flex flex-col relative z-10 mx-auto bg-transparent pb-10">
        
        {/* CABECERA VISUAL */}
        <div className="pt-12 px-8 flex flex-col items-center text-center">
          
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={hubData.logoUrl} 
              alt="Logo eNBlanco" 
              className="h-16 w-auto object-contain mx-auto mix-blend-multiply"
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=eN&background=0f3d6e&color=fff&size=128"; }}
            />
          </div>

          {/* Profile Picture Placeholder (Opcional) */}
          {hubData.profilePicture && (
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 bg-slate-100">
              <img 
                src={hubData.profilePicture} 
                alt={hubData.name} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* BLOQUE PRINCIPAL OBLIGATORIO */}
          <h1 className="text-3xl font-black text-[#0f3d6e] mb-2 leading-tight">
            {hubData.name}
          </h1>
          
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-red-600 bg-red-50 py-1.5 px-4 rounded-full inline-block mb-6 shadow-sm border border-red-100">
            {hubData.activity}
          </h2>

          <div className="flex flex-col gap-2 w-full max-w-sm mb-6">
            <a 
              href={hubData.email ? `mailto:${hubData.email}` : "#"} 
              onClick={!hubData.email ? (e) => e.preventDefault() : undefined} 
              className={`text-slate-600 hover:text-red-600 font-medium text-sm flex justify-center items-center gap-2 transition-colors ${!hubData.email ? 'opacity-60' : ''}`}
            >
              <Mail className="w-4 h-4 opacity-70" /> {hubData.email || "email@pendiente.com"}
            </a>
            
            <a 
              href={hubData.phone ? `tel:${hubData.phone}` : "#"} 
              onClick={!hubData.phone ? (e) => e.preventDefault() : undefined} 
              className={`text-slate-600 hover:text-red-600 font-medium text-sm flex justify-center items-center gap-2 transition-colors ${!hubData.phone ? 'opacity-60' : ''}`}
            >
              <Phone className="w-4 h-4 opacity-70" /> {hubData.phone || "+34 000 000 000"}
            </a>
          </div>
          
          {/* FRASE PRINCIPAL PENDIENTE */}
          {hubData.mainHeadline && (
            <p className="text-lg text-slate-700 font-medium mb-10 w-full px-4 leading-relaxed bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              {hubData.mainHeadline}
            </p>
          )}

        </div>

        {/* ZONA DE BOTONES Y ENLACES */}
        <div className="px-6 flex flex-col gap-0 w-full flex-grow">
          {/* Main Links */}
          {renderLinks(mainLinks)}
          
          {/* Secondary Links Wrapper */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            {renderLinks(secondaryLinks)}
          </div>
        </div>

        {/* FOOTER OBLIGATORIO */}
        <div className="mt-12 px-8 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity pb-6">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 text-center mb-3">
            © 2026 {hubData.name}
          </p>
          <div className="w-8 h-px bg-slate-300 mb-3"></div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 flex items-center gap-1.5 justify-center">
            SeviAI Ecosystem
            <img src="/logo_sin_fondo.png" alt="SeviAI" className="h-3 w-auto opacity-70 grayscale" />
          </p>
        </div>

      </div>

      {/* FLOATING BOTONES */}
      
      {/* vCard Button (Top Right) */}
      <button 
        onClick={handleSaveContact} 
        className="fixed top-6 right-6 w-14 h-14 bg-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 rounded-full flex items-center justify-center group border border-slate-100 cursor-pointer text-slate-700"
        title="Guardar contacto"
      >
        <Download className="w-6 h-6 group-hover:text-red-600 transition-colors drop-shadow-sm" />
      </button>

      {/* WhatsApp Button (Bottom Right) */}
      <a 
        href={hubData.whatsapp ? `https://wa.me/${hubData.whatsapp}` : "#"} 
        target={hubData.whatsapp ? "_blank" : "_self"} 
        rel="noopener noreferrer" 
        onClick={!hubData.whatsapp ? (e) => e.preventDefault() : undefined}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-[#0f3d6e] shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 rounded-full flex items-center justify-center group cursor-pointer ${!hubData.whatsapp ? 'opacity-60' : ''}`}
        title={hubData.whatsapp ? "Contactar por WhatsApp" : "WhatsApp (Próximamente)"}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

    </div>
  );
};

export default SeviAIHub;
