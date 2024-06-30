"use client";

import { useEffect, useState } from "react";
import HumeLogo from "./logos/Hume";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from "@/package.json";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);

  const toggleDark = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    // if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   document.documentElement.classList.add('dark');
    // } else {
    //   document.documentElement.classList.remove('dark')
    // }
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
    localStorage.theme = localStorage.theme === 'dark' ? '' : 'dark';
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-border"
      }
    >
      <div>{/*<HumeLogo className={"h-5 w-auto"} />*/}</div>
      <div className={"ml-auto flex items-center gap-1"}>
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          {/*<span>{isDarkMode ? "Light" : "Dark"} Mode</span>*/}
        </Button>
      </div>
    </div>
  );
};
