import { useEffect, useState } from "react";
import Image from "next/image";
import TMDB from "../../public/tmdb.png";

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
      //   src={imgSrc ? imgSrc : "/../public/tmdb.png"}
      src={imgSrc ? imgSrc : TMDB}
      onError={() => {
        setImgSrc(TMDB);
      }}
      //   onError={() => {
      //     setImgSrc("/../public/tmdb.png");
      //   }}
    />
  );
};

export default FallBackImage;
