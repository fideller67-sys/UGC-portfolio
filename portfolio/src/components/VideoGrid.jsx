export default function VideoGrid({ videos, fallbackVideos, isSanity }) {
  // Merge videos if Sanity is active, otherwise just use fallback
  const sanityItems = (isSanity && videos) ? videos : [];
  const fallback = (!isSanity && fallbackVideos) ? fallbackVideos : [];
  const items = [...sanityItems, ...fallback];

  if (items.length === 0) return null;


  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 border-b border-pink-200/50 bg-[#FFF0F5]/50">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase font-serif">My Works</h3>
        <h3 className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase font-serif">UGC</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const contentUrl = item.videoUrl || item.src || item;
          const isVideo = typeof contentUrl === 'string' && contentUrl.endsWith('.mp4');
          const isStagnant = (i >= items.length - 2) || item.link;

          return (
            <div key={i} className="flex flex-col">
              <div className="relative group overflow-hidden rounded-md glass cursor-pointer aspect-[9/16]">
                {isVideo ? (
                  <video 
                    src={contentUrl} 
                    className="w-full h-full object-cover"
                    autoPlay={item.playOnSite ? true : false}
                    muted={item.playOnSite ? true : false}
                    loop={item.playOnSite ? true : false}
                    playsInline
                  />
                ) : (
                  <img 
                    src={contentUrl} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={item.caption || 'Work piece'}
                  />
                )}
                
                {isStagnant && isVideo && (
                  <a 
                    href={item.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-white opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  >
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">View Content</span>
                  </a>
                )}


              </div>
              {item.caption && (
                <p className="mt-4 text-sm text-slate-700 font-medium whitespace-pre-wrap leading-relaxed italic text-center px-2">
                  {item.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
