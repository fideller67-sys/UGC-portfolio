import { urlFor } from '../sanityClient';

export default function PortfolioGrid({ photos, fallbackPhotos, isSanity }) {
  // Use Sanity photos if available, otherwise use fallback URL strings
  const items = (isSanity && photos && photos.length > 0) ? photos : null;
  const fallback = (!isSanity && fallbackPhotos) ? fallbackPhotos : [];

  if (!items && fallback.length === 0) return null;


  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 border-b border-pink-200/50">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase">Portfolio</h3>
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase">UGC</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items
          ? items.map((item) => (
              <div key={item._id} className="group overflow-hidden rounded-md glass cursor-pointer aspect-[3/4]">
                <img 
                  src={urlFor(item.image).width(400).url()} 
                  alt={item.title || 'Portfolio piece'} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))
          : fallback.map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="group overflow-hidden rounded-md glass cursor-pointer aspect-[3/4]">
                  <img 
                    src={item.src || item} 
                    alt={`Portfolio piece ${i+1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {item.caption && (
                  <p className="mt-2 text-sm text-slate-600 whitespace-pre-wrap leading-relaxed">
                    {item.caption}
                  </p>
                )}
              </div>
            ))
        }
      </div>
    </section>
  );
}
