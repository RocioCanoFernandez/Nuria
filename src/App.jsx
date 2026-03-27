import React from 'react';
import { Mail, Phone, Globe, MapPin, Clock, Calendar, Star, ChevronRight, MessageCircle, Download, Instagram, Linkedin, Facebook } from 'lucide-react';

const SeviAIHub = () => {
  const hubData = {
    name: "eNBlanco",
    activity: "Centro sanitario",
    person: "Dra. Nuria Blanco Piñero",
    mainHeadline: "Psicóloga Sanitaria. Directora del Centro Sanitario eNBlanco.",
    email: "direccion@centroenblanco.es",
    phone: "+34 646 66 03 80",
    whatsapp: "34646660380",
    logoUrl: "/enblanco_logo.jpeg",
    profilePicture: "/enblanco_foto.png",
    backgroundImage: "/enblanco_fondo.png",
    hubUrl: "https://www.centroenblanco.es"
  };

  const mainLinks = [
    { id: 'web', title: "Ver web", url: "https://www.centroenblanco.es", icon: Globe, subtitle: "Sitio oficial" },
    { id: 'llamar', title: "Llamar al centro", url: "tel:+34646660380", icon: Phone, subtitle: "Contacto telefónico" },
    { id: 'email', title: "Enviar email", url: "mailto:direccion@centroenblanco.es", icon: Mail, subtitle: "Escríbenos directamente" }
  ];

  const secondaryLinks = [
    { id: 'instagram', title: "Instagram", url: "https://www.instagram.com/enblanco_sevilla/", icon: Instagram, subtitle: "@enblanco_sevilla" },
    { id: 'linkedin', title: "LinkedIn", url: "https://www.linkedin.com/in/nuria-blanco-pi%C3%B1ero-69b27655/", icon: Linkedin, subtitle: "Perfil profesional" },
    { id: 'facebook', title: "Facebook", url: "https://www.facebook.com/CentroEnblanco", icon: Facebook, subtitle: "Síguenos" },
    { id: 'ubicacion', title: "Ver ubicación", url: "https://www.google.com/maps/place/C.+Virgen+de+Montserrat,+2,+41011+Sevilla/@37.3743885,-5.9955697,17z/data=!3m1!4b1!4m6!3m5!1s0xd126c3b6f854481:0x6309edf7fefeff1b!8m2!3d37.3743885!4d-5.9955697!16s%2Fg%2F11bw3y2qd2?hl=es&entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D", icon: MapPin, subtitle: "Cómo llegar" },
    { id: 'resenas', title: "Ver reseñas", url: "https://www.google.com/search?sca_esv=f9768091ef2272cb&sxsrf=ANbL-n6BrhfHmOtGwxjWZu1JZDRAaXECJQ:1774642202399&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORzN39WxK76_xxRZ9kXAIBfzY3QK7pQYBGecfm4M8K22kw-0xRrzOq5cPFljtDXgII_Rt_ZN8KKHNvE-JYkXQxayS4ouUdGcjm1_K--fjh9huXSOaA%3D%3D&q=Centro+eNBlanco+Rese%C3%B1as", icon: Star, subtitle: "Opiniones de pacientes" }
  ];

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:Dra. Nuria Blanco Piñero\r\nORG:eNBlanco\r\nTITLE:Psicóloga Sanitaria. Directora del Centro Sanitario eNBlanco.\r\nTEL;TYPE=WORK,VOICE:+34 646 66 03 80\r\nEMAIL;TYPE=INTERNET:direccion@centroenblanco.es\r\nURL:https://www.centroenblanco.es\r\nNOTE:Centro Sanitario eNBlanco\r\nEND:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dra_Nuria_Blanco_Centro_eNBlanco.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderLinks = (linksArray) => {
    return linksArray.map((link) => (
      <a 
        key={link.id} 
        href={link.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex items-center justify-between p-4 bg-white hover:bg-blue-50 border border-slate-200 rounded-3xl transition-all shadow-sm mb-3 active:translate-y-1"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 group-hover:text-red-600 transition-colors border border-blue-100 font-bold shadow-sm">
            <link.icon className="w-6 h-6" />
          </div>
          <div>
            <span className="block font-black text-slate-900 text-lg leading-tight">{link.title}</span>
            <span className="text-xs text-slate-500 font-medium">{link.subtitle}</span>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-red-500 transform group-hover:translate-x-1 transition-all" />
      </a>
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col items-center selection:bg-red-600 selection:text-white relative">
      
      {/* Fondo Opcional */}
      {hubData.backgroundImage ? (
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(248, 250, 252, 0.94), rgba(248, 250, 252, 0.98)), url('${hubData.backgroundImage}')` 
          }}
        ></div>
      ) : (
        <div className="fixed inset-0 z-0 bg-slate-50"></div>
      )}

      {/* Contenedor Principal (Mobile First) */}
      <div className="w-full max-w-md min-h-screen flex flex-col relative z-10 mx-auto bg-transparent pb-10">
        
        {/* Cabecera */}
        <div className="pt-12 px-8 flex flex-col items-center text-center">
          
          <div className="mb-6">
            <img 
              src={hubData.logoUrl} 
              alt="Logo eNBlanco" 
              className="h-16 w-auto object-contain mx-auto mix-blend-multiply drop-shadow-sm"
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=eN&background=0f3d6e&color=fff&size=128"; }}
            />
          </div>

          {/* Foto de perfil Dra. Nuria Blanco */}
          {hubData.profilePicture && (
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 bg-slate-100">
              <img 
                src={hubData.profilePicture} 
                alt={hubData.person} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Nombre y Actividad */}
          <h1 className="text-3xl font-black text-[#0f3d6e] mb-2 leading-tight">
            {hubData.name}
          </h1>
          
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-red-600 bg-red-50 py-1.5 px-4 rounded-full inline-block mb-4 shadow-sm border border-red-100">
            {hubData.activity}
          </h2>

          {/* Contacto Directo Cabecera */}
          <div className="flex flex-col gap-2 w-full max-w-sm mb-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <a href={`mailto:${hubData.email}`} className="text-slate-600 hover:text-red-600 font-medium text-sm flex justify-center items-center gap-2 transition-colors">
              <Mail className="w-4 h-4 opacity-70" /> {hubData.email}
            </a>
            <div className="w-full h-px bg-slate-100 my-1"></div>
            <a href={`tel:${hubData.phone}`} className="text-slate-600 hover:text-red-600 font-medium text-sm flex justify-center items-center gap-2 transition-colors">
              <Phone className="w-4 h-4 opacity-70" /> {hubData.phone}
            </a>
          </div>
          
          {/* Frase Principal */}
          {hubData.mainHeadline && (
            <p className="text-[17px] text-[#0f3d6e] font-bold mb-10 w-full px-4 leading-relaxed bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
              {hubData.mainHeadline}
            </p>
          )}

        </div>

        {/* Zona de Botones y Enlaces */}
        <div className="px-6 flex flex-col gap-0 w-full flex-grow">
          {/* Enlaces Principales */}
          {renderLinks(mainLinks)}
          
          {/* Enlaces Secundarios y Especiales */}
          <div className="mt-4 pt-4 border-t border-slate-200">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Síguenos y conócenos</p>
            {renderLinks(secondaryLinks)}
          </div>

          {/* Bloque de Ubicación y Horarios Físicos */}
          <div className="mt-8 bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm relative overflow-hidden group hover:border-[#0f3d6e]/20 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <MapPin className="w-24 h-24 text-[#0f3d6e]" />
            </div>
            
            <h3 className="text-lg font-black text-[#0f3d6e] mb-4 flex items-center gap-2 relative z-10">
               <MapPin className="w-5 h-5 text-red-600" /> Dirección física
            </h3>
            <p className="text-slate-700 text-sm font-medium mb-6 leading-relaxed relative z-10">
              C/ Virgen de Montserrat, 2 (local)<br/>
              41011, Sevilla
            </p>

            <h3 className="text-lg font-black text-[#0f3d6e] mb-4 flex items-center gap-2 relative z-10">
               <Clock className="w-5 h-5 text-red-600" /> Horario
            </h3>
            <div className="text-slate-600 text-sm font-medium space-y-1 relative z-10">
              <p className="font-bold text-slate-800">Lunes a viernes</p>
              <p>Mañanas: 11:00 – 14:00</p>
              <p>Tardes: 16:00 – 20:30</p>
              <p className="text-red-600 font-bold mt-2 inline-flex items-center gap-1 bg-red-50 px-2 py-1 rounded">
                <Calendar className="w-3 h-3" /> Atendemos previa cita
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
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

      {/* Floating VCard */}
      <button 
        onClick={handleSaveContact} 
        className="fixed top-6 right-6 w-14 h-14 bg-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 rounded-full flex items-center justify-center group border border-slate-100 cursor-pointer text-slate-700"
        title="Guardar contacto (vCard)"
      >
        <Download className="w-6 h-6 group-hover:text-red-600 transition-colors drop-shadow-sm" />
      </button>

      {/* Floating WhatsApp - Color Azul Corporativo alineado a identidad */}
      <a 
        href={`https://wa.me/${hubData.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#0f3d6e] shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 rounded-full flex items-center justify-center group cursor-pointer"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

    </div>
  );
};

export default SeviAIHub;
