"use client";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/salama-1.jpg",
    thumbnail: "/images/salama-1.jpg",
  },
  {
    original: "/images/salama-2.jpg",
    thumbnail: "/images/salama-2.jpg",
  },
  {
    original: "/images/salama-3.jpg",
    thumbnail: "/images/salama-3.jpg",
  },
  {
    original: "/images/salama-4.jpg",
    thumbnail: "/images/salama-4.jpg",
  },
  {
    original: "/images/salama-5.jpg",
    thumbnail: "/images/salama-5.jpg",
  },
  {
    original: "/images/salama-6.jpg",
    thumbnail: "/images/salama-6.jpg",
  },
  {
    original: "/images/salama-7.jpg",
    thumbnail: "/images/salama-7.jpg",
  },
  {
    original: "/images/salama-8.jpg",
    thumbnail: "/images/salama-8.jpg",
  },
  {
    original: "/images/salama-9.jpg",
    thumbnail: "/images/salama-9.jpg",
  },
  {
    original: "/images/salama-10.jpg",
    thumbnail: "/images/salama-10.jpg",
  },
  {
    original: "/images/salama-11.jpg",
    thumbnail: "/images/salama-11.jpg",
  },
  {
    original: "/images/salama-12.jpg",
    thumbnail: "/images/salama-12.jpg",
  },
  {
    original: "/images/salama-13.jpg",
    thumbnail: "/images/salama-13.jpg",
  },
  {
    original: "/images/salama-14.jpg",
    thumbnail: "/images/salama-14.jpg",
  },
  {
    original: "/images/salama-15.jpg",
    thumbnail: "/images/salama-15.jpg",
  },
  {
    original: "/images/salama-16.jpg",
    thumbnail: "/images/salama-16.jpg",
  },
  {
    original: "/images/salama-17.jpg",
    thumbnail: "/images/salama-17.jpg",
  },
  {
    original: "/images/salama-18.jpg",
    thumbnail: "/images/salama-18.jpg",
  },
  {
    original: "/images/salama-19.jpg",
    thumbnail: "/images/salama-19.jpg",
  },
  {
    original: "/images/salama-20.jpg",
    thumbnail: "/images/salama-20.jpg",
  },
  {
    original: "/images/salama-21.jpg",
    thumbnail: "/images/salama-21.jpg",
  },
  {
    original: "/images/salama-22.jpg",
    thumbnail: "/images/salama-22.jpg",
  },
  {
    original: "/images/salama-23.jpg",
    thumbnail: "/images/salama-23.jpg",
  },
];

const Gallery = () => {
  return (
    <div id="gallery" className="mt-16 my-2 bg-[#000000] w-full">
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
