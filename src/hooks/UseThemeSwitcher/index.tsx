"use client";

import { parseCookies, setCookie } from "nookies";
import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const cookies = parseCookies();
    const userPref = cookies["@AS-theme"];

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      setCookie(undefined, "@AS-theme", "dark", {
        maxAge: 30 * 24 * 60 * 60, // 1 month
      });
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      setCookie(undefined, "@AS-theme", "light", {
        maxAge: 30 * 24 * 60 * 60, // 1 month
      });
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, setMode };
};
