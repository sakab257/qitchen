import localFont from "next/font/local";
import { Forum } from "next/font/google";

export const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-forum",
  display: "swap",
});

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
