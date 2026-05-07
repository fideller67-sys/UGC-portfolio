export default function Niche({ data }) {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-16 text-center border-b border-pink-200/50">
      
      <div className="mb-12 md:mb-20">
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase mb-6 md:mb-8">Niche / Real Estate</h3>
        <div className="space-y-2 text-sm md:text-base text-slate-700 font-medium">
          {data.niche.categories.map((cat, i) => (
             <p key={i}>{cat}</p>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-sm md:text-base text-slate-700 space-y-6 leading-relaxed">
        <p>{data.niche.description1}</p>
        <p>{data.niche.description2}</p>
      </div>

      <div className="mt-12 md:mt-20 max-w-3xl mx-auto text-sm md:text-base text-slate-700 space-y-6 leading-relaxed">
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase mb-6 md:mb-8">Portfolio</h3>
        <p>{data.niche.portfolioText1}</p>
        <p>{data.niche.portfolioText2}</p>
      </div>

      <div className="mt-12 md:mt-20 pb-16 border-b border-slate-200 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-relaxed md:leading-relaxed px-4">
          {data.niche.footerQuote}
        </h2>
        <p className="mt-8 text-xs tracking-[0.2em] font-bold text-slate-500 uppercase">
          {data.name} {data.role}
        </p>
      </div>
    </section>
  );

}
