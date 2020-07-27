import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [location, setLocation] = useState(window.location.pathname);

  const onWindowLocationChange = () => {
    setLocation(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", onWindowLocationChange);

    return () => window.removeEventListener("popstate", onWindowLocationChange);
  }, []);

  return location === path ? children : null;
};

export default Route;
