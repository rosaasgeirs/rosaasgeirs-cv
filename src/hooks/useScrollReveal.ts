import { useEffect, useRef } from "react";

/**
 * Adds a `.visible` class when the element enters the viewport.
 * Used as a fallback for browsers without CSS scroll-driven animations.
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip if browser supports native scroll-driven animations
    if (CSS.supports("animation-timeline", "view()")) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
