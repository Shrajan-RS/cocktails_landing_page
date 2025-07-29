const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Royal Stag Whisky",
    country: "IN",
    detail: "750 ml",
    price: "₹1200",
  },
  {
    name: "Kingfisher Premium Lager",
    country: "IN",
    detail: "650 ml",
    price: "₹150",
  },
  {
    name: "Old Monk Rum",
    country: "IN",
    detail: "750 ml",
    price: "₹900",
  },
  {
    name: "Sula Sauvignon Blanc",
    country: "IN",
    detail: "750 ml",
    price: "₹1200",
  },
  {
    name: "Goa Feni",
    country: "IN",
    detail: "750 ml",
    price: "₹600",
  },
];

const mockTailLists = [
  {
    name: "Mango Lassi",
    country: "IN",
    detail: "Glass",
    price: "₹120",
  },
  {
    name: "Jaljeera Cooler",
    country: "IN",
    detail: "Glass",
    price: "₹100",
  },
  {
    name: "Virgin Mojito",
    country: "IN",
    detail: "Glass",
    price: "₹150",
  },
  {
    name: "Cucumber Mint Cooler",
    country: "IN",
    detail: "Glass",
    price: "₹130",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  greeting: "Visit Our Bar",
  address: "SH - 35, Hoskote Rd, Seegehalli, Whitefield, Bengaluru",
  contact: {
    phone: "+91XXXXXXXXXX",
    email: "hello@cocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const cocktailMenu = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  cocktailMenu,
};
