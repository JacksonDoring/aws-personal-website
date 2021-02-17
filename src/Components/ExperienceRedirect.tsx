import React, { useEffect, useState } from "react";
import ExperienceMobile from "./ExperienceMobile";
import ExperienceDesktop from "./ExperienceDesktop";

function ExperienceRedirect() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? <ExperienceMobile /> : <ExperienceDesktop />;
}

export default ExperienceRedirect;
