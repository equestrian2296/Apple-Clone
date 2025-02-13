import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "./utils/index.js";
  
  export const navLists = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "A18 Chip.",
        "Built for Apple Intelligence.",
        "Powering next-level performance.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Advanced dual-camera system.", "Capture stunning photos and videos."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Action button.",
        "Quick access to your favorite features.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["Dynamic Island.", "A magical way to interact with iPhone."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 16 in Black",
      color: ["#1C1C1E", "#2C2C2E", "#3A3A3C"],
      img: blackImg,
    },
    {
      id: 2,
      title: "iPhone 16 in White",
      color: ["#F2F2F7", "#FFFFFF", "#E5E5EA"],
      img: whiteImg,
    },
    {
      id: 3,
      title: "iPhone 16 in Pink",
      color: ["#FEE9E9", "#FFD1DC", "#FFADC6"],
      img: yellowImg,
    },
    {
      id: 4,
      title: "iPhone 16 in Teal",
      color: ["#D0F0F0", "#A0E0E0", "#70D0D0"],
      img: blueImg,
    },
    {
      id: 5,
      title: "iPhone 16 in Ultramarine",
      color: ["#3B3B98", "#4B4BBA", "#5B5BDC"],
      img: blueImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales and Refunds",
    "Legal",
    "Site Map",
  ];
  