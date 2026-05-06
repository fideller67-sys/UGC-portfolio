import hero1 from "./assets/photo_2026-05-05_22-49-46.jpg";
import hero2 from "./assets/photo_2026-05-05_15-36-45.jpg";
import hero3 from "./assets/photo_2026-05-05_15-35-50.jpg";
import aboutImg from "./assets/photo_2026-05-05_15-36-40.jpg";

import photo1 from "./assets/photo_2026-05-05_15-36-45.jpg";
import photo2 from "./assets/photo_2026-05-05_15-36-40.jpg";
import photo5 from "./assets/photo_2026-05-05_15-36-20.jpg"
import photo6 from "./assets/photo_2026-05-05_15-36-17.jpg";

import photoFirst1 from "./assets/photo_2026-05-05_15-35-44.jpg";
import photoFirst2 from "./assets/photo_2026-05-05_15-36-49.jpg";

// Remaining photos
import photo7 from "./assets/photo_2026-05-05_15-01-52.jpg";
import photo8 from "./assets/photo_2026-05-05_15-35-30.jpg";
import photo9 from "./assets/photo_2026-05-05_15-35-54.jpg";
import photo10 from "./assets/photo_2026-05-05_15-35-58.jpg";
import photo11 from "./assets/photo_2026-05-05_15-36-06.jpg";
import photo12 from "./assets/photo_2026-05-05_15-36-12.jpg";
import photo13 from "./assets/photo_2026-05-05_15-36-55.jpg";
import photo14 from "./assets/photo_2026-05-05_15-36-59.jpg";

// Video assets
import video1 from "./assets/video_2026-05-06_00-49-10.mp4";
import video2 from "./assets/video_2026-05-06_00-53-29.mp4";

export const siteData = {
  // General Info
  name: "Okorie Jennifer",
  role: "UGC Creator",
  email: "nwankwojennifer862@gmail.com",
  phone: "+234 9166645513", // e.g., "+234 123456789 - telegram"
  socials: {
    instagram: "https://instagram.com/yourprofile",
    tiktok: "https://tiktok.com/@yourprofile",
    twitter: "https://twitter.com/yourprofile", // optional
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
    quote: "Content that resonates with your audience will lead to more conversions."
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
    { src: photo1 },
    { src: photo2 },
    { src: photo3 },
    { src: photo4 },
    { src: photo5 },
    { src: photo6 },
    { src: photo7 },
    { src: photo8 },
    { src: photo9 },
    { src: photo10 },
    { src: photo11 },
    { src: photo12 },
    { src: photo13 },
    { src: photo14 },
  ],

  // Video Portfolio Section
  // You can add raw .mp4 URLs here. 
  // For TikTok embeds, you would need to use a TikTok embed component instead of a <video> tag.
  videos: [
    {
      src: video1,
      caption: "This is the content I created for my school trade fair event.",
      link: "https://vt.tiktok.com/ZS9CcSMMQ/"
    },
    {
      src: video2,
      caption: "Check out this TikTok I posted! https://vt.tiktok.com/ZS9C3L5H6/\n\nYou can also take a look at my product video in my business page.",
      link: "https://vt.tiktok.com/ZS9C3L5H6/"
    }
  ],

  // Niche Section
  niche: {
    categories: [
      "Skin care (Dark Skin focused bran)",
      "Life style and events",
      "Online content and branding"
    ],
    description1: "I work with beauty, fashion and lifestyle brands that wants their product showed case in a natural and relatable way.",
    description2: "Brand benefit from working with me because I understand how to create content that builds trust increase engagement and encourage viewers to take action.",
    portfolioText1: "I'm a UGC Creator who specializes in creating visual appealing and engaging content for beauty and lifestyle brand.",
    portfolioText2: "I Create short form videos including product demo,lifestyle, videos, voice overs, testimonial, unboxing and aesthetic product shot for social media and ads.",
    footerQuote: "I create content for brands looking to content with their audience on platforms like TikTok and Instagram through organic user style content."
  },

  // Contact / Testimonial Section
  contact: {
    testimonialQuote: "Nwankwo Jennifer for the last collaboration you did with us was super amazing, honestly we would really love to work with you again",
    testimonialAuthor: "Stella David",
    testimonialRole: "Digital marketer",
    testimonialDate: "December 29th 2023",
    reachOutText: "Your name is so fast and always on-trend. She's honestly one of the 1% creators we've seen so far. so reliable and consistently understands out community."
  }
};
