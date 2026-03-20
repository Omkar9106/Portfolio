"use client";

import { useState, useEffect } from "react";

const ROLES = ["AI/ML Full Stack Developer", "Machine Learning Engineer", "Full Stack Developer"];

export default function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = ROLES[roleIndex];

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 400 : 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roleIndex]);

  return (
    <span className="inline-flex items-baseline">
      <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text font-semibold text-transparent">
        {displayText}
      </span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
