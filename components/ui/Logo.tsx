type LogoProps = {
  className?: string;
};

export default function Logo({ className = "h-9 w-9" }: LogoProps) {
  return (
    <svg
      // The source asset's viewBox is "0 0 1000 1000", but the mark's actual
      // ink (measured incl. stroke width via svgpathtools) only spans
      // roughly x:195-891, y:170-783 — under 70% of the box's width and 61%
      // of its height. Cropped tight to that (plus a small buffer) so the
      // mark renders larger within whatever container size it's given,
      // without changing the container itself — a bigger logo with zero
      // layout impact wherever it's used (header/footer/CaseStudyNav all
      // keep their existing container sizes).
      viewBox="175 150 737 653"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`origin-center [transform:translateY(0)_scale(1)_rotate(0deg)] transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:animate-logo-pop group-focus-visible:animate-logo-pop ${className}`}
      aria-hidden="true"
    >
      <path
        d="M606.47,515.77c-12.6-.85-24,1.42-35.7,4.8-53.56,15.46-107.25,49.4-151.07,84.1-58.81,46.57-108.33,99.34-155.62,157.28-6.64,8.14-14.45,14.25-25.1,15.44s-21-1.59-28.69-8.99c-7.18-6.91-11.2-16.48-10.69-27.61,4.3-93.85,20.34-186.31,48.06-276.24,19.1-61.96,44.16-124.45,79.07-178.83,25.95-40.44,59.38-78.35,103.86-97.87,33.7-14.79,70.79-17.53,105.82-5.91,120.02,39.8,161.62,223.58,175.39,335.97,4.53,36.99,8.41,72.81,9.43,110.07l3.31,121.11c.43,15.84-14.56,27.63-29.6,27.85-14.89.22-29.45-11.71-29.79-27.59l-1.06-50.16-.87-34.26c-.86-33.83-3.03-85.85-13.17-115.62-6.56-19.25-22.56-32.1-43.57-33.52ZM589.37,473.42l15.33-6.61c26.34-13.91,24.68-43.3,18.43-70.6-12.25-53.5-42.86-125.73-91.2-154.15-24.73-14.54-53.49-14.52-78.66-.84-16.12,8.76-29.31,20.64-41.32,34.83-43.43,51.35-76.18,127.47-97.66,191.69-23.97,73.75-40.29,149.1-45.98,228.5l60.05-61.91c37.79-36.66,78.32-69.74,122.71-98.15,43.08-27.44,88.96-48.67,138.29-62.77Z"
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="10"
      />
      <circle
        cx="834.24"
        cy="720.89"
        r="52.16"
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="10"
      />
    </svg>
  );
}
