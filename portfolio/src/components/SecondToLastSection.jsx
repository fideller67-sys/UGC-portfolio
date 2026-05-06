import React from 'react';

export default function SecondToLastSection({ data }) {
  if (!data?.secondToLastSection?.image) return null;

  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 border-b border-pink-200/50 bg-white/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl glass">
        <img 
          src={data.secondToLastSection.image} 
          alt="Featured content" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
