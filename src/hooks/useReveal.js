import { useRef, useEffect } from "react";

export function useReveal() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Add animate class so the hidden state only applies when JS is running
    el.classList.add("animate");

    // If already in view, show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("visible");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
