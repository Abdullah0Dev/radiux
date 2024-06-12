import images from "./images";

const NavLinks = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "FEATURES",
    link: "#features",
  },
  {
    name: "GITBOOK",
    link: "#gitBook",
  },
  {
    name: "technology",
    link: "#technology",
  },
  {
    name: "FAQ",
    link: "#faq",
  },
];
const HeroContent = {
  content: {
    title: `Your Trading Strategy with Smart Filters`,
    desc: "Introducing Radiux, your crypto trading and filtering bot on Telegram. Specialize in prime token opportunities with filtering precision. Designed for smart investors on the Solana network.",
    btnTitle: "Launch App",
    btnIcon: "../assets/images/arrow.png",
    float1: images.float_1,
    float2: images.float_2,
    float3: images.float_3,
  },
  partner: [
    {
      img: images.partner_1,
    },
    {
      img: images.partner_2,
    },
    {
      img: images.partner_3,
    },
    {
      img: images.partner_5,
    },
    {
      img: images.partner_4,
    },
  ],
};

const Feature = [
  {
    title: "Advanced Filtering",
    desc: "Detailed criteria to filter tokens by deployer history, bonding curve status, and more.",
    img: images.switch_feature,
    id: 1,
  },
  {
    title: "Real-Time Alerts",
    desc: "Receive instant notifications when tokens match set filters.",
    img: images.circle_feature_2,
    id: 2,
  },
  {
    title: "User-Friendly Interface",
    desc: "Navigate and manage your settings easily with an intuitive platform design.",
    img: images.wand,
    id: 3,
  },
  {
    soon: "Coming soon...",
    title: "Custom Automation",
    desc: "Easily create and customize filters to automate your trading strategies.",
    img: images.frame_phone,
    id: 4,
  },
  {
    soon: "Coming soon...",
    title: "Direct Purchase",
    desc: "Automatically execute buy orders when your conditions are met.",
    img: images.case_feature,
    id: 5,
  },
];
const Powers = {
  title: "Unlock the <span> Power </span> to Identify Potential",
  desc: "We've made it effortlessly simple to discover high-potential coins. Dive into a world of opportunities with ease.",
  phone_1: images.iphone_1,
  phone_2: images.iphone_2,
  btn: {
    Title: "Launch App",
    Icon: "../assets/images/arrow.png",
  },
};

const technology = {
  title: "technology",
  desc: "We've made it effortlessly simple to discover high-potential coins. Dive into a world of opportunities with ease.",
  img: images.features_hook,
};

const FAQs = [
  {
    question: "What is Radiux?",
    answer:
      "Radiux is a unique Telegram bot designed to help users identify and act on crypto trading opportunities by using advanced filtering and automation techniques. It is specially developed for investors looking to conquer the  Solana network.",
  },
  {
    question: "How does Radiux work?",
    answer:
      "Radiux uses customizable filters to scan the crypto market for tokens that match certain specific criteria. Once it identifies a potential opportunity, it can automatically notify you or execute trades on your behalf, depending on your settings.",
  },
  {
    question: "Is Radiux suitable for beginners?",
    answer:
      "Absolutely! Radiux is designed with an intuitive interface that is easy for beginners to navigate while still offering the powerful features that experienced traders need.",
  },
  {
    question: "What makes Radiux different from other trading bots?",
    answer:
      "Radiux stands out due to its focus on advanced filtering capabilities and the ability to automate not just trade execution but also the discovery of trading opportunities based on user-defined parameters. Its integration with the Solana network also offers enhanced transaction speeds and lower fees.",
  },
  {
    question: "How can I get started with Radiux?",
    answer:
      "To get started with Radiux, simply join the Telegram server up through our website. Check out the custom filters and you’ll be ready to begin trading smarter and faster than ever before.",
  },
];
const footer = {
  copyright: "© 2024 by Radiux",
  logo: images.logo,
  links: [
    {
      img: images.x,
      link: "https://x.com",
    },
   {
      img: images.telegram,
      link: "https://telegram.com",
    },
  ],

};

export { HeroContent, NavLinks, Feature, footer, Powers, technology, FAQs };
