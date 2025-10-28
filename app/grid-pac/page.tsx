const data = [
  {
    src: "/img1.png",
    alt: "Image 1",
    className: "left-top",
  },
  {
    src: "/img2.png",
    alt: "Image 2",
    className: "left-down",
  },
  {
    src: "/img3.png",
    alt: "Image 3",
    className: "right-top",
  },
  {
    src: "/img4.png",
    alt: "Image 4",
    className: "right-down",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <div className="container">
        <div className="header"></div>
        <div className="logo"></div>
        {data.map((item, index) => (
          <ImageItem
            src={item.src}
            alt={item.alt}
            className={item.className}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

const ImageItem = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-fill h-full w-full ${className}`}
    />
  );
};
