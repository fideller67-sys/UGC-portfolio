import { urlFor } from '../sanityClient';

export default function About({ data }) {
  const getImgSrc = (img) => {
    if (!img) return '';
    if (typeof img === 'string') return img;
    return urlFor(img).width(400).url();
  };

  return (
    <section className="w-full">
      <div className="py-16 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row items-center gap-12 border-b border-pink-200/50">
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img 
            src={getImgSrc(data.about.image)} 
            alt="About Creator" 
            className="w-48 h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 mb-2 uppercase">About me</h3>
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-900 mb-4">{data.name}</h2>
          <p className="text-xs tracking-widest text-slate-500 mb-6 uppercase">{data.about.subheading}</p>
          <div className="space-y-4 text-sm md:text-base text-slate-700 max-w-lg mx-auto md:mx-0">
            <p>{data.about.bioParagraph1}</p>
            <p>{data.about.bioParagraph2}</p>
          </div>
          <div className="mt-8 text-sm text-slate-600">
            <p>{data.email}</p>
            <p>{data.phone} - telegram</p>
          </div>
        </div>
      </div>
      <div className="py-24 px-6 text-center border-b border-pink-200/50 flex flex-col items-center justify-center min-h-[40vh]">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 max-w-3xl mx-auto leading-relaxed md:leading-relaxed">
          {data.about.quote}
        </h2>
        <p className="mt-8 text-xs tracking-[0.2em] font-bold text-slate-500 uppercase">
          {data.name} • {data.role}
        </p>
      </div>
    </section>
  );
}
