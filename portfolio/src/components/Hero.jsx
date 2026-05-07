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
    /* min-h ensures background covers screen on laptop, flex-col stacks on mobile */
    <section className="w-full min-h-[80vh] md:min-h-[70vh] flex flex-col pt-8 md:pt-16 pb-12 px-6 md:px-12 lg:px-24 border-b border-pink-200/50 relative">
      
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16 flex-grow">
        
        {/* Image Grid - Aspect ratios locked to prevent stretching */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 max-w-[320px] md:max-w-md mx-auto md:mx-0">
          <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
            <img 
              src={getImgSrc(data.hero.image1)} 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
              alt="Creator" 
            />
          </div>
          <div className="grid grid-rows-2 gap-3">
             <div className="aspect-square overflow-hidden rounded-sm shadow-lg">
                <img src={getImgSrc(data.hero.image2)} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt="Creator detail 1" />
             </div>
             <div className="aspect-square overflow-hidden rounded-sm shadow-lg">
                <img src={getImgSrc(data.hero.image3)} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt="Creator detail 2" />
             </div>
          </div>
        </div>

        {/* Text Content - Responsive alignment and sizing */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end text-center md:text-left">
          <div className="md:mt-auto pb-4">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-slate-900 mb-4 leading-[0.85] tracking-tighter">
              <span className="block">{firstName}</span>
              <span className="block opacity-90">{lastName}</span>
            </h1>
            <div className="h-px w-16 bg-pink-400 mx-auto md:mx-0 mb-6"></div>
            <p className="font-serif text-slate-700 italic tracking-[0.2em] uppercase text-sm sm:text-lg lg:text-xl">
              {data.role}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
