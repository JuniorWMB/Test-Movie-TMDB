import { useEffect, useState } from "react";
import Image from "next/image";

// This function is when my image is broken i send a image default

const FallBackImage = ({ src, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      alt="Image Film"
      {...rest}
      priority
      src={imgSrc ? imgSrc : "/../public/tmdb.png"}
      onError={() => {
        setImgSrc("/../public/tmdb.png");
      }}
    />
  );
};

export default FallBackImage;
