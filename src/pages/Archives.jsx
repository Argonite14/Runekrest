import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ALL_PRODUCTS = [
  {
    id: 'watch',
    category: 'technology',
    badge: 'EDITION_04',
    title: 'Chronos Rune Watch',
    price: 1240.00,
    desc: 'Forged from aircraft-grade titanium with hand-etched elder futhark inscriptions along the bezel. Features a sapphire crystal lens and a bespoke mechanical movement.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6TJ0jorefdNc2TAvuESKyzkcBiRtoBVmJTfurbvTTqS-6diBWo7C3t0Qhdsm8RQWmwsEvt-pwGsRROkDmbSBS5e_UAcopgCpG5jFlqa2-QqzNnUifpA9z1a_6dG5gSVx4WLK1jl7B2lsaDKXKiWcGE225MJh-IRWX9YgiZqgZ18s5Ug_iBp4A-iY6n9h-jqVqzLgplXdPwsiTCrS64PpWuEDCp1A8P3dOmPxLqgKk4xOxJ9PUCcyu1Mgo8_aAj3zZ9tuqNjzjuN0'
  },
  {
    id: 'tee',
    category: 'apparel',
    badge: 'ESSENTIALS',
    title: 'Sigil Heavyweight Tee',
    price: 85.00,
    desc: '400GSM technical cotton blend featuring high-density metallic gold embroidery. A structural silhouette designed for durability and silent movement.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH1unD9P5fWMbT7CKWaZ86--Hk1kqrUvgxOhxHmIKxKT5powxEGG6oAlz-Ags13ESx6b1NmoLjvwJMdEerySdl8cUUGA-DbbdFM98qCS0yFJFmXmkWJbfRxhuvZXJC01TCVpbyPpyqXXihCho3nQx2MlIU8j_QqGNsNHun0q7tXDyZmuXS3yHxRG5_Aq_1SeI6diwnq7gUpPzhA23ZaLU-nvY0Lb7u_HH5r_rahOGhWSqZdh2KwJj04gj3pWYfLhF7eV5Q9SSgEdE'
  },
  {
    id: 'headphones',
    category: 'technology',
    badge: 'ACOUSTICS',
    title: 'Aether Headphones',
    price: 620.00,
    desc: 'Beryllium drivers housed in resonance-damped matte carbon fiber. Active sonic shielding recalibrated for pure atmospheric isolation.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1GApFKZnadC6fU3EoEc5lXMF3g2b3G8gJBWG_WcyLyxDn_fPgKLBttWcUz9TiPKu_hDjhXWp6wO3H6HQ31o9V4XyUWpQ6X8JKxaSKr3XsPfKy2vEPp-RyIh1Tt8dMyMHM3tcabUfnUp0EbymIXN7WWQJEdaK0FvDxw0S4GIMYdiyWLWasUjW3I13bPOPY-mAAP1PTbxxR2ypuD-yGL8VjM6upcNP0DB2G3A---a1qmrj2AdyOPFIKv57wnggjLrtseyU8E-TjF6I'
  },
  {
    id: 'footwear',
    category: 'apparel',
    badge: 'KINETIC',
    title: 'Runestride Footwear',
    price: 440.00,
    desc: 'Kinetic energy recovery system integrated into a forged polymer sole. Water-resistant technical mesh with woven gold sigils.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKiVNTZMZs7VPqDgz6aPrQKVVwGkTpKeBI2Xg7MN-VWjPYZRtES6jUlb-3lgrsSumAn2s-jZQXv1gL_5YJQmF4WIKtKEQ13o4e0OaPvl2CwAdklEDQRWQWTYSRXCPsAv13jaW8wAyP6iZBOCGKiiW2EZ7lstvmknf5GthBrIwpmAfXV3FstZvJOXZ6M3vJRmVoeLgGKZPmplXbCAaKHuQszJis09Upel2sNmeTVBPSAqYwuQ05upb7InFGIg4GGfwuten_QNP1UOI'
  }
];

export default function Archives() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const filterId = searchParams.get('id');

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    searchParams.delete('id');
    setSearchParams(searchParams);
  };

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesId = !filterId || product.id === filterId;
    return matchesCategory && matchesId;
  });

  const handleAcquire = (product) => {
    setSelectedProduct(product);
    setTransactionSuccess(false);
  };

  const confirmAcquisition = () => {
    setTransactionSuccess(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setTransactionSuccess(false);
    }, 3000);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 noise-bg"></div>

      <main className="pt-32 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        {/* Page Hero */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <span className="font-label-technical text-xs text-primary uppercase tracking-[0.3em] block mb-4">Collection 001 / Artifacts</span>
              <h1 className="font-display-lg text-4xl md:text-7xl text-on-surface leading-none select-none">Archives</h1>
              <p className="mt-6 text-on-surface-variant max-w-lg font-body-md text-sm md:text-base">
                A curated repository of high-precision instruments and ceremonial apparel, where ancestral geometry meets industrial fabrication.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-left md:text-right font-label-technical text-[10px] text-outline select-none">
              <span>LOC: NORTHERN_QUARTER</span>
              <span>CRD: 59.3293° N, 18.0686° E</span>
            </div>
          </div>
          <div className="technical-ruler"></div>
        </section>

        {/* Filter Navigation Bar */}
        <div className="sticky top-24 z-30 mb-12 flex justify-center select-none">
          <nav className="bg-surface-container-low/40 backdrop-blur-xl border border-glass-stroke p-1 rounded-full flex gap-1">
            {['all', 'apparel', 'technology'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 rounded-full font-label-technical text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {filteredProducts.map((product) => (
            <div key={product.id} className="glass-card flex flex-col group overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-obsidian-deep">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                  src={product.img}
                />
                <div className="absolute top-4 right-4 bg-primary/10 backdrop-blur-md border border-primary/20 px-3 py-1 rounded-full">
                  <span className="font-label-technical text-[10px] text-primary">{product.badge}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="font-headline-lg text-xl md:text-2xl text-on-surface">{product.title}</h2>
                  <span className="font-label-technical text-primary pt-1 md:pt-2 text-sm md:text-base">
                    ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="technical-ruler my-4 opacity-50"></div>
                <p className="text-on-surface-variant font-body-md text-sm mb-8 leading-relaxed flex-grow line-clamp-3">
                  {product.desc}
                </p>
                <button
                  onClick={() => handleAcquire(product)}
                  className="mt-auto w-full border border-primary py-4 font-label-technical text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-300"
                >
                  Acquire Artifact
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & Footer Technical Detail */}
        <div className="mt-20 flex flex-col items-center gap-4 select-none">
          <div className="technical-ruler w-full"></div>
          <div className="flex items-center gap-12 font-label-technical text-[10px] text-primary">
            <span className="cursor-pointer hover:underline font-bold">PAGE_01</span>
            <span className="text-outline">/</span>
            <span className="text-outline cursor-not-allowed">PAGE_02</span>
            <span className="text-outline cursor-not-allowed">PAGE_03</span>
          </div>
        </div>
      </main>

      {/* Acquisition Drawer/Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-fade-in">
          <div className="glass-panel p-8 max-w-md w-full relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-primary hover:opacity-75 transition-opacity"
              aria-label="Close Acquisition"
              disabled={transactionSuccess}
            >
              <span className="material-symbols-outlined select-none">close</span>
            </button>

            {!transactionSuccess ? (
              <>
                <span className="font-label-technical text-[10px] text-primary tracking-widest block mb-2">ACQUISITION_INITIALIZED</span>
                <h4 className="font-headline-lg text-2xl text-on-surface mb-6">{selectedProduct.title}</h4>
                
                <div className="space-y-4 font-label-technical text-xs text-on-surface-variant bg-obsidian-deep/50 p-4 border border-glass-stroke/30 mb-8">
                  <div className="flex justify-between pb-2 border-b border-glass-stroke/10">
                    <span>UNIT_PRICE</span>
                    <span className="text-primary">${selectedProduct.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-glass-stroke/10">
                    <span>QUANTITY</span>
                    <span className="text-on-surface">01 // SINGLE</span>
                  </div>
                  <div className="flex justify-between font-bold text-on-surface">
                    <span>NET_TOTAL</span>
                    <span>${selectedProduct.price.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 border border-outline/30 py-3 font-label-technical text-xs tracking-widest uppercase hover:bg-surface-variant/20 transition-all text-on-surface-variant"
                  >
                    Abort
                  </button>
                  <button
                    onClick={confirmAcquisition}
                    className="flex-1 btn-primary py-3 font-label-technical text-xs tracking-widest uppercase"
                  >
                    Authorize
                  </button>
                </div>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <span className="material-symbols-outlined text-6xl text-primary animate-pulse select-none">check_circle</span>
                <h4 className="font-headline-lg text-2xl text-primary">Signal Transmitted</h4>
                <p className="font-label-technical text-xs text-on-surface-variant">
                  Acquisition authorized. Coordinates logged. Check your terminal logs for fulfillment telemetry.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
