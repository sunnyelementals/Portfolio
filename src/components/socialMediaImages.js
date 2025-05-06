// socialMediaImages.js
const imageImports = import.meta.glob(
  "../assets/social-media/*.{jpg,jpeg,png,svg,jfif}",
  {
    eager: true,
  }
);

const socialMediaImages = Object.values(imageImports).map((mod) => mod.default);

export default socialMediaImages;
