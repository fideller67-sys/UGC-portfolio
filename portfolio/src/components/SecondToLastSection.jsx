import React from 'react';

export default function SecondToLastSection({ data }) {
  const priceList = data?.secondToLastSection?.priceList;
  if (!priceList) return null;

  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-[#DB7093] via-[#FF69B4] to-[#C71585] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Column: Intro */}
          <div className="space-y-6">
            <h2 className="text-xs tracking-[0.3em] font-bold uppercase opacity-80">
              {priceList.title}
            </h2>
            <p className="text-lg font-serif italic leading-relaxed opacity-90 max-w-sm">
              "{priceList.description}"
            </p>
          </div>

          {/* Center Column: Packages */}
          <div className="space-y-8">
            <div className="divide-y divide-white/20">
              {priceList.packages.map((pkg, idx) => (
                <div key={idx} className="py-4 flex justify-between items-center group transition-all duration-300">
                  <span className="text-sm tracking-wide uppercase font-medium group-hover:translate-x-2 transition-transform duration-300">
                    {pkg.name}
                  </span>
                  <span className="text-xl font-serif italic text-pink-200">
                    {pkg.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Further Details */}
          <div className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xs tracking-[0.2em] font-bold uppercase opacity-70">
              Further details
            </h3>
            <ul className="space-y-4">
              {priceList.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm opacity-80 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-300 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
