import hero1 from "./assets/photo_2026-05-05_22-49-46.jpg";
import hero2 from "./assets/photo_2026-05-05_15-36-45.jpg";
import hero3 from "./assets/photo_2026-05-05_15-35-50.jpg";
import aboutImg from "./assets/photo_2026-05-05_15-36-40.jpg";

import photo1 from "./assets/photo_2026-05-05_15-36-45.jpg";
import photo2 from "./assets/photo_2026-05-05_15-36-40.jpg";
import photo6 from "./assets/photo_2026-05-05_15-36-17.jpg";


import photoFirst1 from "./assets/photo_2026-05-05_15-35-44.jpg";
import photoFirst2 from "./assets/photo_2026-05-05_15-36-49.jpg";

// Re-adding removed items for My Works
import photoFood from "./assets/photo_2026-05-05_15-36-20.jpg";
import photoBags1 from "./assets/photo_2026-05-05_15-35-54.jpg";
import photoBags2 from "./assets/photo_2026-05-05_15-35-58.jpg";


// Remaining photos
import photo7 from "./assets/photo_2026-05-05_15-01-52.jpg";
import photo8 from "./assets/photo_2026-05-05_15-35-30.jpg";
import photo9 from "./assets/photo_2026-05-05_15-35-54.jpg";
import photo10 from "./assets/photo_2026-05-05_15-35-58.jpg";
import photo11 from "./assets/photo_2026-05-05_15-36-06.jpg";
import photo12 from "./assets/photo_2026-05-05_15-36-12.jpg";
import photo13 from "./assets/photo_2026-05-05_15-36-55.jpg";
import photo14 from "./assets/photo_2026-05-05_15-36-59.jpg";
import work1 from "./assets/WhatsApp Image 2026-05-07 at 09.41.24.jpeg";
import work2 from "./assets/WhatsApp Image 2026-05-07 at 09.41.25 (1).jpeg";
import work3 from "./assets/WhatsApp Image 2026-05-07 at 09.41.25 (2).jpeg";
import work4 from "./assets/WhatsApp Image 2026-05-07 at 09.41.25 (3).jpeg";

import work5 from "./assets/WhatsApp Image 2026-05-07 at 09.41.25.jpeg";
import work6 from "./assets/WhatsApp Image 2026-05-07 at 09.41.26.jpeg";
import workVideo from "./assets/WhatsApp Video 2026-05-07 at 09.43.04.mp4";

// Video assets

import video1 from "./assets/video_2026-05-06_00-49-10.mp4";
import video2 from "./assets/video_2026-05-06_00-53-29.mp4";
import videoNew from "./assets/WhatsApp Video 2026-05-06 at 18.59.59.mp4";
//
// Second to last image
import secondToLastImg from "./assets/photo_2026-05-06_18-48-43.jpg";

export const siteData = {
  // General Info
  name: "Okorie Jennifer",
  role: "UGC Creator",
  email: "okoriejenny31@gmail.com",
  phone: "+234 9166645513", // e.g., "+234 123456789 - telegram"
  socials: {
    tiktok: "https://www.tiktok.com/@captain_niffer_1?lang=en"
  },

  // Hero Section
  hero: {
    image1: hero1,
    image2: hero2,
    image3: hero3,
  },

  // About Section
  about: {
    image: aboutImg,
    subheading: "How to's • Trends • Unboxing & more",
    bioParagraph1: "Being a beginner doesn't change the fact that the skills are inbuilt already. I am a passionate UGC creator looking forward to working with brands to deliver quality for appreciation.",
    bioParagraph2: "I help brands communicate their message clearly and confidently through engaging content.",
    quote: "Content that resonates with your audience and will lead to more conversions."
  },

  // Photo Portfolio Section
  photos: [
    {
      src: photoFirst1,
      caption: "I picture of me on old school day, we were asked to dress like the 90’s\n\nI Love Fashion!❤️❤️❤️"
    },
    {
      src: photoFirst2,
      caption: "Also good at Hair niche, Skincare, Clothes, travel.\nJust email me."
    },
    { src: photo2 },
    { src: photo8 },
    { src: photo13 },
    { src: photo14 }
  ],






  // Video Portfolio Section
  // You can add raw .mp4 URLs here. 
  // For TikTok embeds, you would need to use a TikTok embed component instead of a <video> tag.
  videos: [
    {
      src: videoNew,
      caption: "Latest creation - Playing on site with sound",
      playOnSite: true
    },
    {
      src: video1,
      caption: "This is the content I created for my school trade fair event.",
      link: "https://vt.tiktok.com/@captain_niffer_1/video/7464010996841267462"
    },
    {
      src: video2,
      caption: "You can also take a look at my product video on my business page.",
      link: "https://www.tiktok.com/@captain_niffer_1/video/7463553250106887430"
    },
    {
      src: work6,
      caption: "Stanley Tumbler Special Edition Unboxing",
    },
    {
      src: work2,
      caption: "Aesthetic Product Showcase - Cloud Bag",
    },
    {
      src: work3,
      caption: "Lifestyle & Accessories - Cherry Print Bag",
    },
    {
      src: workVideo,
      caption: "Behind the scenes / Lifestyle content",
    },
    {
      src: photoFood,
      caption: "Food & Culinary Content Showcase",
    },
    {
      src: photoBags1,
      caption: "Product Accessories - Pink Cherry Collection",
    },
    {
      src: photoBags2,
      caption: "Fashion Bags & Styling Content",
    },
    {
      src: photo6,
      caption: "Landscape & Travel Content",
    },
    {
      src: photo7,
      caption: "Creative Fashion & Lifestyle Shots",
    },
    {
      src: photo11
    },
    {
      src: photo12,
      caption: "Architecture & Real Estate Showcase",
    }
  ],








  
  // Second to Last Section
  secondToLastSection: {
    image: secondToLastImg,
    priceList: {
      title: "PRICE LIST",
      description: "Prices listed here are indicative only, please get in touch and I will deliver you a solution tailored for your audience.",
      packages: [
        { name: "Single UGC Video", price: "$100" },
        { name: "3x UGC Video", price: "$250" },
        { name: "6x UGC Video", price: "$450" },
        { name: "3x Stills", price: "$120" },
        { name: "12x Stills", price: "$340" }
      ],
      details: [
        "Videos will be delivered as 9:16 video, H.264",
        "Video length determined in response to brief",
        "Videos longer than 3min incur additional costs",
        "Prices include one round of feedback, additional rounds charged at $30 per round",
        "Full terms of service are provided with each quote"
      ]
    }
  },

  // Niche Section
  niche: {
    categories: [
      "Skin care (Caramel Skin focused brand)",
      "Life style and events",
      "Online content and branding"
    ],
    description1: "I work with beauty, fashion and lifestyle brands that wants their product showed case in a natural and relatable way.",
    description2: "Brand benefit from working with me because I understand how to create content that builds trust increase engagement and encourage viewers to take action.",
    portfolioText1: "I'm a UGC Creator who specializes in creating visual appealing and engaging content for beauty and lifestyle brand.",
    portfolioText2: "I Create short form videos including product demo,lifestyle, videos, voice overs, testimonial, unboxing and aesthetic product. Shot for social media and ads.",
    footerQuote: "I create content for brands looking to content with their audience on platforms like TikTok and Instagram through organic user style content."
  }
};