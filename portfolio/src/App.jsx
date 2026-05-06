import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioGrid from './components/PortfolioGrid';
import VideoGrid from './components/VideoGrid';
import Niche from './components/Niche';
import SecondToLastSection from './components/SecondToLastSection';
import Contact from './components/Contact';
import { fetchSiteSettings, fetchPhotos, fetchVideos } from './sanityClient';
import { siteData as fallbackData } from './data';

function App() {
  const [settings, setSettings] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [s, p, v] = await Promise.all([
          fetchSiteSettings(),
          fetchPhotos(),
          fetchVideos(),
        ]);
        if (s) setSettings(s);
        if (p) setPhotos(p);
        if (v) setVideos(v);
      } catch (err) {
        console.log('Sanity fetch failed, using fallback data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Build a unified data object — use Sanity data if available, otherwise fallback
  const data = settings
    ? {
        name: settings.name || fallbackData.name,
        role: settings.role || fallbackData.role,
        email: settings.email || fallbackData.email,
        phone: settings.phone || fallbackData.phone,
        socials: {
          instagram: settings.instagram || fallbackData.socials.instagram,
          tiktok: settings.tiktok || fallbackData.socials.tiktok,
          twitter: settings.twitter || fallbackData.socials.twitter,
        },
        hero: {
          image1: settings.heroImage1,
          image2: settings.heroImage2,
          image3: settings.heroImage3,
        },
        about: {
          image: settings.aboutImage,
          subheading: settings.aboutSubheading || fallbackData.about.subheading,
          bioParagraph1: settings.bio1 || fallbackData.about.bioParagraph1,
          bioParagraph2: settings.bio2 || fallbackData.about.bioParagraph2,
          quote: settings.quote || fallbackData.about.quote,
        },
        niche: {
          categories: settings.niches || fallbackData.niche.categories,
          description1: settings.nicheDescription1 || fallbackData.niche.description1,
          description2: settings.nicheDescription2 || fallbackData.niche.description2,
          portfolioText1: settings.portfolioText1 || fallbackData.niche.portfolioText1,
          portfolioText2: settings.portfolioText2 || fallbackData.niche.portfolioText2,
          footerQuote: settings.footerQuote || fallbackData.niche.footerQuote,
        },
        contact: {
          testimonialQuote: settings.testimonialQuote || fallbackData.contact.testimonialQuote,
          testimonialAuthor: settings.testimonialAuthor || fallbackData.contact.testimonialAuthor,
          testimonialRole: settings.testimonialRole || fallbackData.contact.testimonialRole,
          testimonialDate: settings.testimonialDate || fallbackData.contact.testimonialDate,
          reachOutText: settings.reachOutText || fallbackData.contact.reachOutText,
        },
        secondToLastSection: fallbackData.secondToLastSection,
        _isSanity: true,
      }
    : { ...fallbackData, _isSanity: false };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF0F5]">
        <div className="animate-pulse font-serif text-3xl text-pink-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-900 font-sans relative">
      {/* Animated Background Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      <main className="w-full flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto shadow-2xl bg-white/20 backdrop-blur-sm min-h-screen">
          <Hero data={data} />
          <About data={data} />
          <PortfolioGrid photos={photos} fallbackPhotos={data._isSanity ? [] : fallbackData.photos} isSanity={data._isSanity} />
          <VideoGrid videos={videos} fallbackVideos={data._isSanity ? [] : fallbackData.videos} isSanity={data._isSanity} />
          <Niche data={data} />
          <SecondToLastSection data={data} />
          <Contact data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
