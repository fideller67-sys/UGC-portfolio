import { urlFor } from '../sanityClient';

export default function Hero({ data }) {
  const nameParts = data.name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  // Helper: get image src (Sanity image object or plain URL string)
  const getImgSrc = (img, fallback) => {
    if (!img) return fallback || '';
    if (typeof img === 'string') return img;
    return urlFor(img).width(400).url();
  };

  return (
    <section className="w-full pt-8 md:pt-12 pb-8 px-4 md:px-12 lg:px-24 border-b border-pink-200/50">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        
        {/* Image Grid - Smaller on mobile */}
        <div className="w-4/5 md:w-1/2 grid grid-cols-2 gap-2 max-w-[280px] md:max-w-sm mx-auto md:mx-0">
          <img src={getImgSrc(data.hero.image1)} className="w-full h-full object-cover aspect-[3/4] rounded-sm" alt="Creator" />
          <div className="grid grid-rows-2 gap-2">
             <img src={getImgSrc(data.hero.image2)} className="w-full h-full object-cover aspect-square rounded-sm" alt="Creator detail 1" />
             <img src={getImgSrc(data.hero.image3)} className="w-full h-full object-cover aspect-square rounded-sm" alt="Creator detail 2" />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-2 md:mt-0 lg:pt-12">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-slate-900 mb-2 leading-tight">
            <span className="block">{firstName}</span>
            <span className="block">{lastName}</span>
          </h1>
          <p className="text-lg md:text-2xl font-serif text-slate-700 italic tracking-wide">
            {data.role}
          </p>
        </div>

      </div>
    </section>
  );

}
