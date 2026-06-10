import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success
  const [progress, setProgress] = useState(0);

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');
    setProgress(0);

    // Simulate technical data transmission telemetry
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFormStatus('success');
          setTimeout(() => {
            setFormStatus('idle');
            setFormData({ name: '', email: '', message: '' });
          }, 4000);
          return 100;
        }
        return prev + 20;
      });
    }, 300);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 technical-grid z-0"></div>
      <div className="parchment-texture z-0"></div>

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Page Hero */}
        <section className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8">
            <span className="font-label-technical text-[10px] md:text-xs text-primary select-none">COMMUNICATION_PROTOCOL.v4</span>
            <div className="h-[1px] flex-grow bg-glass-stroke relative select-none">
              <div className="absolute right-0 -top-1 w-2 h-2 border border-primary rotate-45"></div>
            </div>
          </div>
          <h1 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-4 select-none">Establishing a Connection</h1>
          <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed text-sm md:text-base">
            Whether you seek technical specifications for our forged instruments or wish to discuss the intersection of ancient methodology and modern engineering, our terminal is open.
          </p>
        </section>

        {/* Bento Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form Card */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-label-technical text-[10px] text-outline opacity-30 select-none">
              43.2°N // 12.8°E
            </div>
            
            <h2 className="font-headline-lg text-2xl md:text-3xl text-on-surface mb-8 select-none">Inquire</h2>
            
            {formStatus === 'idle' && (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="relative">
                  <label className="font-label-technical text-[10px] text-primary block mb-2 select-none">OPERATOR_NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                    className="w-full bg-transparent border-none p-0 text-on-surface placeholder:text-outline/40 focus:ring-0 text-sm"
                    placeholder="Identity string..."
                  />
                  <div className={`h-[1px] w-full mt-1 transition-all duration-300 ${formData.name ? 'bg-primary' : 'bg-outline/30'}`}></div>
                </div>

                <div className="relative">
                  <label className="font-label-technical text-[10px] text-primary block mb-2 select-none">SIGNAL_ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    className="w-full bg-transparent border-none p-0 text-on-surface placeholder:text-outline/40 focus:ring-0 text-sm"
                    placeholder="email@domain.sys"
                  />
                  <div className={`h-[1px] w-full mt-1 transition-all duration-300 ${formData.email ? 'bg-primary' : 'bg-outline/30'}`}></div>
                </div>

                <div className="relative">
                  <label className="font-label-technical text-[10px] text-primary block mb-2 select-none">MESSAGE_PAYLOAD</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange(e, 'message')}
                    className="w-full bg-transparent border-none p-0 text-on-surface placeholder:text-outline/40 focus:ring-0 resize-none text-sm"
                    placeholder="Enter query parameters..."
                    rows="4"
                  ></textarea>
                  <div className={`h-[1px] w-full mt-1 transition-all duration-300 ${formData.message ? 'bg-primary' : 'bg-outline/30'}`}></div>
                </div>

                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-transparent border border-primary text-primary font-label-technical text-xs tracking-widest hover:bg-primary hover:text-obsidian-deep transition-all duration-300 flex items-center gap-4"
                >
                  TRANSMIT_DATA
                  <span className="material-symbols-outlined text-[18px] select-none" data-icon="send">send</span>
                </button>
              </form>
            )}

            {formStatus === 'sending' && (
              <div className="py-24 text-center space-y-6">
                <span className="font-label-technical text-primary tracking-[0.3em] block animate-pulse">TRANSMITTING PACKETS...</span>
                <div className="w-full bg-surface-container-low border border-glass-stroke h-2 max-w-sm mx-auto overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="font-label-technical text-[10px] text-outline/50">{progress}% SENT // SECURE_SOCKET_VERIFIED</p>
              </div>
            )}

            {formStatus === 'success' && (
              <div className="py-24 text-center space-y-4">
                <span className="material-symbols-outlined text-6xl text-primary animate-bounce select-none">check_circle</span>
                <h3 className="font-headline-lg text-2xl text-primary">TRANSMISSION_COMPLETE</h3>
                <p className="font-label-technical text-xs text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  Operator packet received. Encryption pipeline stable. A representative will signal back on your provided node address.
                </p>
              </div>
            )}
          </div>

          {/* Brand Info Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Coordinates Card */}
            <div className="glass-panel p-8 flex flex-col justify-between min-h-[240px]">
              <div>
                <div className="flex items-center gap-2 mb-4 select-none">
                  <span className="material-symbols-outlined text-primary text-xl select-none" data-icon="location_on">location_on</span>
                  <h3 className="font-label-technical text-xs text-primary">PHYSICAL_STATION</h3>
                </div>
                <p className="font-headline-lg text-[24px] text-on-surface mb-2 select-none">The Iron Vault</p>
                <p className="font-body-md text-on-surface-variant text-sm md:text-base">Lofoten Archipelago, Northern Norway</p>
                <p className="font-label-technical text-primary mt-4 tracking-widest text-xs select-none">68° 11' 57" N / 13° 28' 22" E</p>
              </div>
              <div className="mt-8 border-t border-glass-stroke pt-4 flex justify-between font-label-technical text-[10px] text-outline select-none">
                <span>ELEVATION: 12M</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </div>

            {/* Digital Identity Card */}
            <div className="glass-panel p-8">
              <div className="flex items-center gap-2 mb-6 select-none">
                <span className="material-symbols-outlined text-primary text-xl select-none" data-icon="alternate_email">alternate_email</span>
                <h3 className="font-label-technical text-xs text-primary">DIGITAL_STRATA</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center group cursor-pointer border-b border-glass-stroke/10 pb-2">
                  <span className="font-body-md text-on-surface-variant text-sm">Primary Interface</span>
                  <a href="mailto:nexus@runekrest.no" className="font-label-technical text-xs text-on-surface group-hover:text-primary transition-colors">
                    nexus@runekrest.no
                  </a>
                </li>
                <li className="flex justify-between items-center group cursor-pointer border-b border-glass-stroke/10 pb-2">
                  <span className="font-body-md text-on-surface-variant text-sm">Engineering Dept</span>
                  <a href="mailto:forge@runekrest.no" className="font-label-technical text-xs text-on-surface group-hover:text-primary transition-colors">
                    forge@runekrest.no
                  </a>
                </li>
                <li className="flex justify-between items-center group cursor-pointer">
                  <span className="font-body-md text-on-surface-variant text-sm">Secure Line</span>
                  <a href="tel:+4740000000" className="font-label-technical text-xs text-on-surface group-hover:text-primary transition-colors">
                    +47 400 00 000
                  </a>
                </li>
              </ul>
            </div>

            {/* Atmospheric Visual */}
            <div className="relative overflow-hidden aspect-video border border-glass-stroke grayscale hover:grayscale-0 transition-all duration-700">
              <img
                alt="Atmospheric view of foggy cliffs in Northern Norway"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjDv0P0Q88uy95IaorD-nRkcY3Wl1wKIaY_SU6rBjbJEX6dESIHK03xknwzqaTMcrdfRxD7mMsnp8vHCrvhHNI4JOy6NBjoyzz5LT3q7XlIngpgYQmAJkoQiJDWBFFAooKJIhfCpPhELeyui_kw1ckHO4MDi1R0scByIgaUQIShKGM7ACNKiHzrb5x6fISHMUOms7_JWY437hlKaGSHE8RUVaC9R3L6U4NXFGGgNNpz6hHbUkOs3dF6dGgjBZH8pv2AWdGtF9itx0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-label-technical text-[10px] text-primary select-none">CAPTURE_STATION_04</div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="my-24 h-[1px] w-full bg-glass-stroke relative select-none">
          <div className="absolute left-0 -top-1 w-10 h-2 flex gap-1">
            <div className="w-[2px] h-full bg-primary"></div>
            <div className="w-[2px] h-full bg-primary/40"></div>
            <div className="w-[2px] h-full bg-primary/20"></div>
          </div>
          <div className="absolute right-0 -top-4 font-label-technical text-primary text-[8px] md:text-[10px] tracking-widest">
            RUNIC_ENCODING_PROTOCOL_STABLE
          </div>
        </div>
      </main>
    </div>
  );
}
