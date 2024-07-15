import { useEffect, useState } from "react";

const useOnlineState = () => {
  const [useOnline, setUseOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setUseOnline(false);
    });
    window.addEventListener("online", () => {
      setUseOnline(true);
    });
  }, []);

  return useOnline;
};

export default useOnlineState;
