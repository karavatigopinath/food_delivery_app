import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    console.log("useOnlineState");
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, );

  return onlineStatus;
};

export default useOnlineStatus;
