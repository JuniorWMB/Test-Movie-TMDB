import React, { useRef, useEffect } from "react";

const CheckOutside = (props) => {
  const ref = useRef(null);
  const { onclickOutside, children } = props;

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onclickOutside && onclickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.addEventListener("click", handleClickOutside, true);
    };
  }, []);

  if (!children) {
    return null;
  }

  return <div ref={ref}>{children}</div>;
};

export default CheckOutside;
