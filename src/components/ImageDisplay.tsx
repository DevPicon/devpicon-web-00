import React from "react";
import Image from "next/image";

type ImageDisplayProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ width: width, height: height }}
    />
  );
};

export default ImageDisplay;
