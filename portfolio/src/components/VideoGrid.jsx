export default function VideoGrid({ videos, fallbackVideos, isSanity }) {
  const items = isSanity && videos.length > 0 ? videos : null;
  const fallback = !isSanity ? fallbackVideos : null;

  if (!items && (!fallback || fallback.length === 0)) return null;

  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 border-b border-pink-200/50 bg-[#FFF0F5]/50">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase">Videos</h3>
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase">UGC</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items
          ? items.map((item) => (
              <div key={item._id} className="group overflow-hidden rounded-md glass cursor-pointer aspect-[9/16] relative bg-black/5">
                <video 
                  src={item.videoUrl} 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))
          : fallback.map((item, i) => (
              <div key={i} className="flex flex-col">
                <a 
                  href={item.link || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-md glass cursor-pointer aspect-[9/16] relative bg-black/5"
                >
                  <video 
                    src={item.src || item} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
                {item.caption && (
                  <p className="mt-3 text-sm text-slate-600 whitespace-pre-wrap leading-relaxed italic">
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
