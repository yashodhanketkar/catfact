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
    <div
      className="
      dialog-cookie
      flex flex-col items-end gap-2 p-2 ring-1 ring-card-foreground/10
      text-black bg-white rounded-md font-semibold text-sm
      "
    >
      <p>This page uses cookies</p>
      <button onClick={acceptCookie} className="px-2 py-1 text-white bg-blue-600 rounded-md w-fit cursor-pointer">
        Accept
      </button>
    </div>
  );
}
