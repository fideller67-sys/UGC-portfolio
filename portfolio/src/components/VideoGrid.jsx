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
          : fallback.map((src, i) => (
              <div key={i} className="group overflow-hidden rounded-md glass cursor-pointer aspect-[9/16] relative bg-black/5">
                <video 
                  src={src} 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))
        }
      </div>
    </section>
  );
}
