import { useEffect, useState } from "react";

export default function Cookies() {
  const [accepted, setAccepted] = useState(false);

  const acceptCookie = () => {
    localStorage.setItem("accepted-cookies", "true");
    setAccepted(true);
  };

  useEffect(() => {
    if (localStorage.getItem("accepted-cookies") === "true") {
      setAccepted(true);
    }
  }, []);

  if (accepted) return null;

  return (
    <div className="fixed z-50 flex flex-col items-end gap-2 p-4 font-semibold text-card-foreground bg-card rounded-md right-2 bottom-12">
      <p>This page uses cookies</p>
      <button
        onClick={acceptCookie}
        className="px-2 py-1 text-white bg-blue-600 rounded-md w-fit"
      >
        Accept
      </button>
    </div>
  );
}
