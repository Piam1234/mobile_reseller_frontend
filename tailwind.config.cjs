/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const { getTailColors } = require("@juel/hooks/tailwind");

const colors = { main: "", sec: "", neu: "" };
const tailColors = getTailColors(colors);
const bannerImages = [
  // "https://images.pexels.com/photos/957040/night-photograph-starry-sky-night-sky-star-957040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://media.istockphoto.com/id/1324678076/photo/close-up-on-hands-playing-an-rpg-strategy-video-game-on-a-horizontally-held-smartphone-at.jpg?s=2048x2048&w=is&k=20&c=lABuKiz1elM6chJTMfme0pQb_Zy1GX--C3YaDyW1zH8="
];

const x = Math.floor(Math.random() * bannerImages.length);
const banner = `url('${bannerImages[x]}')`;
const ad =
  "url('https://media.istockphoto.com/id/1474735285/photo/young-man-using-a-smartphone-while-waiting-for-the-train.jpg?s=2048x2048&w=is&k=20&c=tb1YiNRbXt0ghZl7uCRJ8valDIrHqI3RAdEvvaGvg-Y=')";
const service =
  "url('https://media.istockphoto.com/id/1455302239/photo/smiling-asian-girl-in-sportswear-uses-phone-while-standing-on-waterfront-on-modern-buildings.jpg?s=2048x2048&w=is&k=20&c=qAgHXRAt6NSO5IhpnwiCjnoUSrInad9IWPZka2LwUO0=')";
const featured = "url('https://media.istockphoto.com/id/1174418589/photo/darkweb-darknet-and-hacking-concept-hacker-with-cellphone-man-using-dark-web-with-smartphone.jpg?s=2048x2048&w=is&k=20&c=LTqQDRV10vpgB8fPWXU70q16Hbigz08Rmy6MiDmV4Ko=')";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "400px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    extend: {
      colors: tailColors,
      backgroundImage: {
        banner,
        ad,
        service,
        featured,
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
