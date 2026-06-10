import React, { useState, useEffect, useRef } from 'react';

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const rulersRef = useRef([]);

  // Porting the custom mouse interaction for the ruler marks
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      rulersRef.current.forEach((ruler) => {
        if (!ruler) return;
        const rect = ruler.getBoundingClientRect();
        const dist = Math.abs(mouseX - rect.left);
        if (dist < 120) {
          ruler.style.height = `${4 + (120 - dist) / 10}px`;
          ruler.style.backgroundColor = `rgba(201, 168, 76, ${0.4 + (120 - dist) / 200})`;
        } else {
          ruler.style.height = '4px';
          ruler.style.backgroundColor = 'rgba(201, 168, 76, 0.5)';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 noise-bg"></div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep/80 via-transparent to-background z-10"></div>
          <img
            className="w-full h-full object-cover grayscale opacity-40"
            alt="Misty cliffs in Norway"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTjXY8eUoPCs3BHiYm45tCrQWRuKjlD0ljH6dDmkIp8kRN5afUZ1aJIQrq2mDg3hafBN78CsO268yQigIkfC7rfHHYkXth0iVN_5XnrRRyqXk0Kg390cbOT5Nlz_wCiq-1VvfvHvFHzSdceVDpoKJNh0TTXSrpxia87k1PxVTj1huRr3eNSTID_qVMf587z0gnNxyl0nt0s9zYp39Es7nSeux5OOWSzTGCC4SVQ_1WqhsWf9GNeM7DMh3tZ_jBR-d1126I4SvCOZ8"
          />
        </div>
        <div className="relative z-20 space-y-4 max-w-3xl">
          <p className="font-label-technical text-primary tracking-[0.3em] uppercase text-xs">Origin 01.001</p>
          <h1 className="font-display-lg text-4xl md:text-7xl text-on-surface leading-tight select-none">
            Forged in the <br />
            <span className="italic font-accent-italic text-primary">Hidden Vaults</span>
          </h1>
          <div className="w-16 h-px bg-primary mx-auto mt-8"></div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-5">
          <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-8 select-none">
            The Convergence of <br />Cold Steel & Elder Runes
          </h2>
          {/* Interactive Ruler Marks */}
          <div className="flex gap-4 mb-12 select-none h-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                ref={(el) => (rulersRef.current[i] = el)}
                className="ruler-mark"
              ></div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <p className="text-on-surface-variant leading-relaxed text-sm md:text-lg">
            Runekrest was born from a singular obsession: the belief that modern engineering lacks soul, and ancient mysticism lacks precision. Founded by a collective of aerospace engineers and historians, we occupy the liminal space between the laboratory and the longhouse.
          </p>
          <p className="text-on-surface-variant leading-relaxed text-sm md:text-lg">
            Every instrument we calibrate, every artifact we restore, and every interface we design is an exercise in technical brutality tempered by the ethereal. We don't just build; we manifest. Our mission is to preserve the gravity of the past through the high-fidelity lenses of the future.
          </p>
          <div className="pt-8 border-t border-glass-stroke flex items-center gap-8 select-none">
            <div>
              <p className="font-label-technical text-xs text-primary mb-1">FOUNDER_ALPHA</p>
              <p className="font-headline-lg text-lg md:text-xl text-on-surface">Erik Thorsen</p>
            </div>
            <div>
              <p className="font-label-technical text-xs text-primary mb-1">FOUNDER_BETA</p>
              <p className="font-headline-lg text-lg md:text-xl text-on-surface">Aria Vane</p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Ethos (Technical Grid) */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
        {/* Grid Lines Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none technical-grid"></div>
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="technical-divider mb-16 select-none"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="glass-panel p-8">
              <span className="font-label-technical text-primary text-xs">01 / CALIBRATION</span>
              <h3 className="font-headline-lg text-2xl mt-4 mb-4 text-on-surface select-none">Measured Restraint</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                We employ an 8-unit grid system that mirrors the mathematical proportions found in Viking shipbuilding. Precision is not just a metric; it is our ritual.
              </p>
              <div className="mt-8 flex items-center justify-between opacity-30 select-none">
                <span className="font-label-technical text-[10px]">|||| ||| |||| ||</span>
                <span className="font-label-technical text-[10px]">59.9139° N</span>
              </div>
            </div>
            <div className="glass-panel p-8">
              <span className="font-label-technical text-primary text-xs">02 / MATERIALITY</span>
              <h3 className="font-headline-lg text-2xl mt-4 mb-4 text-on-surface select-none">Forged Elements</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Obsidian, burnished gold, and frosted glass form our physical and digital palette. We select materials that age with dignity and hold stories.
              </p>
              <div className="mt-8 flex items-center justify-between opacity-30 select-none">
                <span className="font-label-technical text-[10px]">#0C0C0E</span>
                <span className="font-label-technical text-[10px]">#C9A84C</span>
              </div>
            </div>
            <div className="glass-panel p-8">
              <span className="font-label-technical text-primary text-xs">03 / RESONANCE</span>
              <h3 className="font-headline-lg text-2xl mt-4 mb-4 text-on-surface select-none">Acoustic Logic</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Every interaction is designed to evoke a haptic memory. The click of a toggle, the slide of a panel—all tuned to the frequency of stone on stone.
              </p>
              <div className="mt-8 flex items-center justify-between opacity-30 select-none">
                <span className="font-label-technical text-[10px]">FREQ_MOD_7.4Hz</span>
                <span className="font-label-technical text-[10px]">
                  <span className="material-symbols-outlined text-xs">graphic_eq</span>
                </span>
              </div>
            </div>
          </div>
          <div className="technical-divider mt-16 select-none"></div>
        </div>
      </section>

      {/* Founding Philosophy */}
      <section className="py-32 px-6 md:px-margin-desktop bg-obsidian-deep relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-20 transform rotate-90 hidden sm:block">
          <p className="font-label-technical text-[10px] tracking-widest text-primary select-none">RUNEKREST_SYS_CORE_v4.2</p>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 inline-flex items-center gap-4 border border-glass-stroke px-4 py-2 rounded-full select-none">
            <div className="w-2 h-2 bg-primary animate-pulse rounded-full"></div>
            <span className="font-label-technical text-[10px] tracking-widest text-on-surface-variant">OPERATIONAL DIRECTIVE</span>
          </div>
          <blockquote className="font-display-lg text-2xl md:text-5xl text-on-surface mb-12 italic leading-tight select-none">
            "We do not build for the next quarter. We build for the next <span className="text-primary not-italic border-b-2 border-primary/30">millennium</span>, using the ghosts of the past as our blueprints."
          </blockquote>
          <div className="flex justify-center items-center gap-6 md:gap-12 opacity-50 select-none scale-90 md:scale-100">
            <div className="text-center">
              <p className="font-label-technical text-[10px]">LATITUDE</p>
              <p className="font-label-technical text-xs text-primary">60.4720° N</p>
            </div>
            <div className="h-8 w-px bg-glass-stroke"></div>
            <div className="text-center">
              <p className="font-label-technical text-[10px]">LONGITUDE</p>
              <p className="font-label-technical text-xs text-primary">8.4689° E</p>
            </div>
            <div className="h-8 w-px bg-glass-stroke"></div>
            <div className="text-center">
              <p className="font-label-technical text-[10px]">ELEVATION</p>
              <p className="font-label-technical text-xs text-primary">1242 M</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visuals & Specs Section */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/20 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary"></div>
            <img
              className="w-full aspect-square object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-700"
              alt="Titanium and Gold mechanism detail"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnvFO2mAD8Ea5IEhL17AX_NTIrT231FsuMWxwHaSw_fTQhhGGbDbFjsoBXOZz4Cr8CVfLqs07GzJnIkanEgbccFz6vyJpkCfbrBpLR_Zr4QczTSVb0AC3-FX8EIzvsS9JqGTlPCQotFQezCWytWcrBnQKRUz3yvthc6q3a93j6DkLntMnDIGPCa08v5U2N9etdvpbjqXVvk-9fyCK0LBGOMqBhIcYmNWJM8UcaP_v8qaOiIbHNhy7_t7h1SLJf4olny0Xm7DNcIvs"
            />
            <div className="absolute bottom-4 left-4 bg-obsidian-deep/80 backdrop-blur-md p-4 border border-glass-stroke select-none">
              <p className="font-label-technical text-[10px] text-primary">COMPONENT_ID: RK-880-TALISMAN</p>
            </div>
          </div>
          <div className="space-y-8">
            <p className="font-label-technical text-primary text-xs select-none">ANALYSIS_REPORT_003</p>
            <h3 className="font-headline-lg text-3xl md:text-4xl text-on-surface">The Soul in the Machine</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              Every physical component produced by Runekrest Engineering undergoes a 48-hour "Cold Tempering" process inspired by the glacial formation of the Scandinavian fjords. This isn't just about structural integrity—it's about imbuing the object with the weight of time.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary select-none">check_circle</span>
                <div>
                  <h4 className="font-bold text-on-surface text-sm md:text-base">Thermal Stress Testing</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">Simulating the extreme shifts from Arctic nights to volcanic geothermal springs.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary select-none">check_circle</span>
                <div>
                  <h4 className="font-bold text-on-surface text-sm md:text-base">Geometric Harmonization</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">Alignment based on ancient rune-stave geometries and modern fractal math.</p>
                </div>
              </li>
            </ul>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-8 px-8 py-4 border border-burnished-gold font-label-technical text-primary text-xs uppercase tracking-widest hover:bg-gradient-to-b hover:from-burnished-gold hover:to-[#A68A3E] hover:text-obsidian-deep transition-all duration-300"
            >
              VIEW ALL SPECIFICATIONS
            </button>
          </div>
        </div>
      </section>

      {/* Specifications Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-fade-in">
          <div className="glass-panel p-8 max-w-lg w-full relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-primary hover:opacity-75 transition-opacity"
              aria-label="Close Modal"
            >
              <span className="material-symbols-outlined select-none">close</span>
            </button>
            <h4 className="font-headline-lg text-primary text-2xl mb-6">Talisman RK-880 specs</h4>
            <div className="space-y-4 font-label-technical text-xs text-on-surface-variant">
              <div className="flex justify-between border-b border-glass-stroke/50 pb-2">
                <span>MATERIAL</span>
                <span className="text-on-surface">GRADE 5 ANODIZED TITANIUM</span>
              </div>
              <div className="flex justify-between border-b border-glass-stroke/50 pb-2">
                <span>ENGRAVING</span>
                <span className="text-on-surface">BEZEL LASER FUT HARK STAVES</span>
              </div>
              <div className="flex justify-between border-b border-glass-stroke/50 pb-2">
                <span>FREQUENCY MOD</span>
                <span className="text-on-surface">7.4 HZ GEOTHERMIC RESONANCE</span>
              </div>
              <div className="flex justify-between border-b border-glass-stroke/50 pb-2">
                <span>TEMPERATURE RANGE</span>
                <span className="text-on-surface">-40°C TO +85°C</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>GEOMETRIC ERROR</span>
                <span className="text-on-surface">&lt; 0.0002MM FRACTAL MATCH</span>
              </div>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="w-full mt-8 btn-primary py-3 font-label-technical text-xs tracking-widest uppercase"
            >
              DISMISS TERM
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
