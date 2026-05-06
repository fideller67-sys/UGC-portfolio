export default function VideoGrid({ videos, fallbackVideos, isSanity }) {
  const items = isSanity && videos.length > 0 ? videos : null;
  const fallback = !isSanity ? fallbackVideos : null;

  if (!items && (!fallback || fallback.length === 0)) return null;

  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 border-b border-pink-200/50 bg-[#FFF0F5]/50">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase font-serif">My Works</h3>
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase font-serif">UGC</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {items
          ? items.map((item) => (
              <div key={item._id} className="group overflow-hidden rounded-xl glass aspect-[9/16] relative bg-black/5 shadow-lg">
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
                <div className="group overflow-hidden rounded-xl glass cursor-pointer aspect-[9/16] relative bg-black/5 shadow-lg">
                  {item.playOnSite ? (
                    <video 
                      src={item.src || item} 
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <a 
                      href={item.link || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full"
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
                        <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <p className="text-[10px] uppercase tracking-widest font-bold">Watch on Socials</p>
                      </div>
                    </a>
                  )}
                </div>
                {item.caption && (
                  <p className="mt-4 text-sm text-slate-700 font-medium whitespace-pre-wrap leading-relaxed italic text-center px-2">
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
