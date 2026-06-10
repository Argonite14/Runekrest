import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 'watch',
      type: 'A-01 // TIMEPIECE',
      title: 'Chronos Rune Watch',
      price: '$1,240',
      tag: 'Limited Edition // 50 Units',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6TJ0jorefdNc2TAvuESKyzkcBiRtoBVmJTfurbvTTqS-6diBWo7C3t0Qhdsm8RQWmwsEvt-pwGsRROkDmbSBS5e_UAcopgCpG5jFlqa2-QqzNnUifpA9z1a_6dG5gSVx4WLK1jl7B2lsaDKXKiWcGE225MJh-IRWX9YgiZqgZ18s5Ug_iBp4A-iY6n9h-jqVqzLgplXdPwsiTCrS64PpWuEDCp1A8P3dOmPxLqgKk4xOxJ9PUCcyu1Mgo8_aAj3zZ9tuqNjzjuN0',
      locked: false
    },
    {
      id: 'tee',
      type: 'A-02 // APPAREL',
      title: 'Sigil Heavyweight Tee',
      price: '$85',
      tag: 'Technical Knit // Embroidered',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH1unD9P5fWMbT7CKWaZ86--Hk1kqrUvgxOhxHmIKxKT5powxEGG6oAlz-Ags13ESx6b1NmoLjvwJMdEerySdl8cUUGA-DbbdFM98qCS0yFJFmXmkWJbfRxhuvZXJC01TCVpbyPpyqXXihCho3nQx2MlIU8j_QqGNsNHun0q7tXDyZmuXS3yHxRG5_Aq_1SeI6diwnq7gUpPzhA23ZaLU-nvY0Lb7u_HH5r_rahOGhWSqZdh2KwJj04gj3pWYfLhF7eV5Q9SSgEdE',
      locked: false
    },
    {
      id: 'case',
      type: 'A-03 // GEAR',
      title: 'Void Carry Case',
      price: 'TBA',
      tag: 'Unlocking 10.24.26',
      locked: true
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -440 : 440;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 noise-bg"></div>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Misty Nordic Fjord"
            className="w-full h-full object-cover grayscale brightness-[0.4] scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAECeowSOE7Csw6B-NyL_mtsQIHuJEypivZ8Z2XGDjoBArY9_dsajGl_k7MJyqvxpEv7IPVP6wX5JglmiwPVFZiHXs-Sy4XMucr4gIW58JRa6CAqwKqqPTZTs8nFgbmOJT-vMtgF3ZKpos7r7XIkj3qA568I86E_wUxnhYrM-jFGSuJ-FxFnrhCznhzHo_Cgl6lUiNLATcO38iNmCVrG3qyGyURnkRjS-bNpJn2gL92IP-lfTuoLTb4hPngwNPizWwkaCN6XawbMl4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="inline-flex items-center gap-2 bg-obsidian-deep/80 border border-glass-stroke px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-technical text-[10px] text-primary uppercase tracking-[0.2em]">New Drop — Vol. I</span>
          </div>
          
          <h1 className="font-headline-lg-mobile md:font-display-lg text-[42px] md:text-display-lg text-on-surface mb-6 max-w-3xl leading-[1.1] select-none">
            Modern Precision. <br />
            <span className="italic font-accent-italic text-primary">Ancient Soul.</span>
          </h1>
          
          <p className="font-body-md text-on-surface-variant max-w-lg mb-10 leading-relaxed text-sm md:text-base">
            Engineering forged in older traditions. We craft technical artifacts that bridge the gap between the ethereal and the industrial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/archives" className="btn-primary px-10 py-4 font-label-technical text-center uppercase tracking-widest text-xs md:text-sm">
              Shop Now
            </Link>
            <Link to="/about" className="border border-outline/30 px-10 py-4 font-label-technical text-center text-on-surface uppercase tracking-widest text-xs md:text-sm hover:bg-surface-variant/20 transition-all backdrop-blur-sm">
              The Lore
            </Link>
          </div>
        </div>

        {/* Technical Coordinate Decorations */}
        <div className="absolute left-6 md:left-16 bottom-24 hidden sm:block">
          <div className="font-label-technical text-[10px] text-outline/50 space-y-1 select-none">
            <p>LAT: 64.1265° N</p>
            <p>LON: 21.8174° W</p>
          </div>
        </div>
      </header>

      {/* Featured Products */}
      <section className="py-24 bg-surface overflow-hidden relative">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16 flex justify-between items-end">
          <div>
            <span className="font-label-technical text-primary uppercase tracking-[0.3em] block mb-2 text-xs">Technical Artifacts</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Curated Selection</h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 border border-glass-stroke text-primary hover:bg-primary/10 transition-colors duration-300"
              aria-label="Scroll Left"
            >
              <span className="material-symbols-outlined select-none">chevron_left</span>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2 border border-glass-stroke text-primary hover:bg-primary/10 transition-colors duration-300"
              aria-label="Scroll Right"
            >
              <span className="material-symbols-outlined select-none">chevron_right</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="pl-6 md:pl-margin-desktop flex gap-gutter overflow-x-auto scroll-hide pb-8 scroll-smooth"
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => !product.locked && navigate(`/archives?id=${product.id}`)}
              className="min-w-[300px] md:min-w-[420px] glass-panel group cursor-pointer relative overflow-hidden flex-shrink-0"
            >
              {product.locked ? (
                <div className="aspect-[4/5] overflow-hidden p-6 bg-surface-container flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-outline/30 mb-4 select-none">lock</span>
                    <p className="font-label-technical text-outline/40 uppercase tracking-widest text-xs">Decryption Required</p>
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/5] overflow-hidden p-6">
                  <img
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    src={product.img}
                  />
                </div>
              )}
              
              <div className="p-8 border-t border-glass-stroke">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-label-technical text-[10px] text-outline uppercase tracking-widest">{product.type}</span>
                    <h3 className="font-headline-lg text-xl md:text-2xl text-on-surface mt-1">{product.title}</h3>
                  </div>
                  <span className="font-label-technical text-primary text-base md:text-lg">{product.price}</span>
                </div>
                <div className="technical-divider mb-6"></div>
                <div className="flex justify-between items-center">
                  <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">{product.tag}</span>
                  <span className="material-symbols-outlined text-primary text-xl select-none">
                    {product.locked ? 'lock_open' : 'arrow_forward_ios'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Statement */}
      <section className="relative py-32 bg-obsidian-deep overflow-hidden">
        <div className="noise-bg"></div>
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-primary/30"></div>
            <span className="material-symbols-outlined text-primary select-none">join_right</span>
            <div className="w-12 h-px bg-primary/30"></div>
          </div>
          
          <h2 className="font-headline-lg text-2xl md:text-5xl text-on-surface leading-tight max-w-4xl italic font-accent-italic mb-12 select-none">
            "Built for the modern age. <br className="hidden md:block" /> Forged in older traditions."
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-primary/30"></div>
            <span className="material-symbols-outlined text-primary select-none">join_left</span>
            <div className="w-12 h-px bg-primary/30"></div>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4">
            <span className="font-label-technical text-[10px] text-outline uppercase tracking-[0.4em] select-none">Calibration Code: 77-89-X</span>
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          to="/archives?category=apparel"
          className="group relative h-[60vh] md:h-[70vh] overflow-hidden flex items-end p-6 md:p-margin-desktop border-r border-glass-stroke/10"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 brightness-[0.7]"
            alt="Apparel Category"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLN-AltMR5WZCyg_yBsbl7N-Ki1jHF2KSpUmxeq808hiiaaFVdskuD8JX9N8gPMouGUCWnZ-BRmrP_Ka6yEEFfUXzJJ0nwgqSlc_uapDbTQorlxVCr8fahDDV_yuW2ab1YWEz2MbYc6Evso4A26RLebmClJBTu3sGUc5v2yKG3c915lhymhI73D92pwsPaAuFYLVvAnIfz-l_nZhawMdFCe97PrNH3SPHd6-g6nrpPn20TkM5IuCPJzWoTkxVrfd3E543zvg_ZVIo"
          />
          <div className="absolute inset-0 bg-obsidian-deep/40 group-hover:bg-obsidian-deep/20 transition-colors"></div>
          <div className="relative z-10 w-full">
            <span className="font-label-technical text-primary uppercase tracking-[0.5em] mb-2 block text-xs">Category 01</span>
            <h3 className="font-display-lg text-3xl md:text-5xl text-on-surface mb-6 select-none">Apparel</h3>
            <div className="technical-divider mb-8 w-3/4 opacity-50"></div>
            <div className="flex items-center gap-4 text-primary font-label-technical uppercase tracking-widest text-xs md:text-sm">
              Explore Collection <span className="material-symbols-outlined transition-transform group-hover:translate-x-2 select-none">arrow_right_alt</span>
            </div>
          </div>
        </Link>
        
        <Link
          to="/archives?category=technology"
          className="group relative h-[60vh] md:h-[70vh] overflow-hidden flex items-end p-6 md:p-margin-desktop"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 brightness-[0.7]"
            alt="Technology Category"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDIIRMhceaatG8E89iiKxj48B02BgXbsrQoym26R2X-m0VFqbZFpJ_CFo8XKR0Cd5ZmyoTpJ46G2EDe6qNaGPIrT1lxPbjVf4tQPYgY3YxU_Gx8TpIJJ6WUDtSAahGgI7QFzNawoz1XwqjbukDozfm8eeLYw4BtT9BPzvAgzMa_Mgwt3gV0FLiKtrqdU86yLreY9ySAwrmQ08S-0Utg3OqHrJv8DI-G12rRU8rkGSsGN-DBRuYjjb44e_WlZvf9TEPjfZdFMb39A0"
          />
          <div className="absolute inset-0 bg-obsidian-deep/40 group-hover:bg-obsidian-deep/20 transition-colors"></div>
          <div className="relative z-10 w-full">
            <span className="font-label-technical text-primary uppercase tracking-[0.5em] mb-2 block text-xs">Category 02</span>
            <h3 className="font-display-lg text-3xl md:text-5xl text-on-surface mb-6 select-none">Technology</h3>
            <div className="technical-divider mb-8 w-3/4 opacity-50"></div>
            <div className="flex items-center gap-4 text-primary font-label-technical uppercase tracking-widest text-xs md:text-sm">
              Explore Artifacts <span className="material-symbols-outlined transition-transform group-hover:translate-x-2 select-none">arrow_right_alt</span>
            </div>
          </div>
        </Link>
      </section>

      {/* About Teaser */}
      <section className="py-32 bg-surface">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <span className="font-label-technical text-primary uppercase tracking-[0.3em] block mb-6 text-xs">Our Philosophy</span>
            <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-8 leading-tight">
              The intersection of <span className="italic font-accent-italic">Rune</span> and <span className="italic font-accent-italic">Machine.</span>
            </h2>
            <p className="font-body-md text-on-surface-variant mb-10 leading-relaxed text-sm md:text-lg">
              We believe the future belongs to those who remember the past. Runekrest is an engineering studio dedicated to crafting objects of permanence in a world of obsolescence. Every item is treated as an artifact—measured, calibrated, and forged to endure.
            </p>
            <div className="flex items-center gap-10 select-none">
              <div className="text-center">
                <span className="block font-display-lg text-2xl md:text-3xl text-primary mb-1">01</span>
                <span className="font-label-technical text-[10px] text-outline uppercase">Precision</span>
              </div>
              <div className="text-center">
                <span className="block font-display-lg text-2xl md:text-3xl text-primary mb-1">02</span>
                <span className="font-label-technical text-[10px] text-outline uppercase">Lore</span>
              </div>
              <div className="text-center">
                <span className="block font-display-lg text-2xl md:text-3xl text-primary mb-1">03</span>
                <span className="font-label-technical text-[10px] text-outline uppercase">Utility</span>
              </div>
            </div>
            <div className="mt-12">
              <Link to="/about" className="inline-flex items-center gap-3 font-label-technical text-primary uppercase tracking-widest text-xs hover:opacity-80 transition-opacity">
                Learn about the forge <span className="material-symbols-outlined text-sm select-none">north_east</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 relative">
            <div className="absolute -top-4 -left-4 w-12 md:w-24 h-12 md:h-24 border-t border-l border-primary opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-12 md:w-24 h-12 md:h-24 border-b border-r border-primary opacity-30"></div>
            <div className="glass-panel p-4">
              <img
                className="w-full h-[350px] md:h-[500px] object-cover grayscale brightness-75"
                alt="High-Tech Alchemy Lab Workshop"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9sMNNdXi8pa-hclUlef-foUtQQevyih4ql1RqR5P9c3KHfZyOVVOcVe7gPm2xps5pM1SlqWnlwvQV6FwVRG3YhlVj0fyvXeVi72BnlYRlVQfYFrbFrIcDjN_IoYsfcojclq_tz2NccOwdGtPwWoprN_87WD8eMRt0gjqw4w9_rNU4SWs6s272R1t6gPR8rN6Hqxwltv9SXOZBzh-E-NOXiP4qP_uzy8_HbunHZcVfe6USb_s023VT_1w3-42FgNQSZlrY7g0Q9Ms"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Technical Divider */}
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop opacity-20 py-8 select-none">
        <div className="flex items-center justify-between font-label-technical text-[8px] tracking-[0.5em] text-outline mb-2">
          <span>START_GRID_REF</span>
          <span>END_GRID_REF</span>
        </div>
        <div className="technical-divider"></div>
      </div>
    </div>
  );
}
