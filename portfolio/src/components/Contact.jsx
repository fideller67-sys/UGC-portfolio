export default function Contact({ data }) {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-start gap-16">
      
      {/* Left */}
      <div className="w-full md:w-1/2">
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase mb-8">{data.name}</h3>
        <p className="text-sm text-slate-700 leading-relaxed mb-8 max-w-md">
          {data.contact.testimonialQuote}
        </p>
        
        <div className="space-y-1 text-sm text-slate-800 font-bold">
          <p>{data.contact.testimonialAuthor}</p>
          <p>{data.contact.testimonialRole}</p>
          <p className="text-slate-500 font-normal">{data.contact.testimonialDate}</p>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 md:text-right">
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase mb-8">Reach Out To Me</h3>
        <p className="text-sm text-slate-700 leading-relaxed mb-8">
          {data.contact.reachOutText}
        </p>
        
        <div className="space-y-4">
          <a href={`mailto:${data.email}`} className="inline-block text-lg font-serif italic text-slate-900 hover:text-pink-600 transition-colors border-b border-pink-300 pb-1">
            {data.email}
          </a>
          <div className="pt-4 flex gap-6 md:justify-end">
            <a href={data.socials.instagram} className="text-sm font-bold uppercase tracking-widest text-slate-800 hover:text-pink-600">Insta</a>
            <a href={data.socials.tiktok} className="text-sm font-bold uppercase tracking-widest text-slate-800 hover:text-pink-600">TikTok</a>
            {data.socials.twitter && <a href={data.socials.twitter} className="text-sm font-bold uppercase tracking-widest text-slate-800 hover:text-pink-600">Twitter</a>}
          </div>
        </div>
      </div>
      
    </section>
  );
}
