import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = (props) => {
  const { children, id } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.getElementById(id)) : null;
};

export default Portal;
