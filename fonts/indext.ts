import localFont from "next/font/local";

// Helvetica Neue font family with multiple weights
export const helveticaNeue = localFont({
  src: [
    {
      path: "./HelveticaNeueLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./HelveticaNeue.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./HelveticaNeueMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./HelveticaNeueBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});
