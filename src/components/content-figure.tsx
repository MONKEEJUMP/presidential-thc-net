import Image from "next/image";

import type { ContentImage } from "@/content/types";

type ContentFigureProps = {
  href?: string;
  image: ContentImage;
  priority?: boolean;
};

export function ContentFigure({ href, image, priority = false }: ContentFigureProps) {
  const gradientId = `content-figure-gold-${image.src.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
  const renderedImage = (
    <Image
      className="content-figure__image"
      src={image.src}
      width={image.width}
      height={image.height}
      sizes="(max-width: 767px) 92vw, (max-width: 1199px) 42vw, 480px"
      alt={image.alt}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  );

  return (
    <figure className="content-figure">
      <div className="content-figure__media">
        {href ? (
          <a className="content-figure__link" href={href}>
            {renderedImage}
          </a>
        ) : (
          renderedImage
        )}
        <svg
          aria-hidden="true"
          className="content-figure__frame"
          focusable="false"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
              <stop offset="0%" stopColor="#F4E3A1" />
              <stop offset="50%" stopColor="#D4B96A" />
              <stop offset="100%" stopColor="#8F6B24" />
            </linearGradient>
          </defs>

          <g
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          >
            <path d="M 0.75 0.75 V 99.25 M 99.25 0.75 V 99.25" vectorEffect="non-scaling-stroke" />
            <path className="content-figure__split-rule" d="M 0.75 0.75 H 34.3 M 65.7 0.75 H 99.25 M 0.75 99.25 H 34.3 M 65.7 99.25 H 99.25" vectorEffect="non-scaling-stroke" />
            <path className="content-figure__mobile-rule" d="M 0.75 0.75 H 99.25 M 0.75 99.25 H 99.25" vectorEffect="non-scaling-stroke" />
          </g>

          <g className="content-figure__ornament" data-frame-ornament="top">
            <g fill={`url(#${gradientId})`}>
              <polygon points="50,0.15 50.6,0.75 50,1.35 49.4,0.75" />
              <polygon points="43.15,0.3 43.75,0.75 43.15,1.2 42.55,0.75" />
              <polygon points="56.85,0.3 57.45,0.75 56.85,1.2 56.25,0.75" />
              <polygon points="36.95,0.4 37.4,0.75 36.95,1.1 36.5,0.75" />
              <polygon points="35.35,0.4 35.8,0.75 35.35,1.1 34.9,0.75" />
              <polygon points="63.05,0.4 63.5,0.75 63.05,1.1 62.6,0.75" />
              <polygon points="64.65,0.4 65.1,0.75 64.65,1.1 64.2,0.75" />
            </g>
            <g
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeLinejoin="miter"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            >
              <polygon points="48.6,0.75 46.4,0.425 44.2,0.75 46.4,1.075" vectorEffect="non-scaling-stroke" />
              <polygon points="51.4,0.75 53.6,0.425 55.8,0.75 53.6,1.075" vectorEffect="non-scaling-stroke" />
              <polygon points="42.2,0.75 40.1,0.425 38,0.75 40.1,1.075" vectorEffect="non-scaling-stroke" />
              <polygon points="57.8,0.75 59.9,0.425 62,0.75 59.9,1.075" vectorEffect="non-scaling-stroke" />
            </g>
          </g>

          <g className="content-figure__ornament" data-frame-ornament="bottom" transform="translate(0 100) scale(1 -1)">
            <g fill={`url(#${gradientId})`}>
              <polygon points="50,0.15 50.6,0.75 50,1.35 49.4,0.75" />
              <polygon points="43.15,0.3 43.75,0.75 43.15,1.2 42.55,0.75" />
              <polygon points="56.85,0.3 57.45,0.75 56.85,1.2 56.25,0.75" />
              <polygon points="36.95,0.4 37.4,0.75 36.95,1.1 36.5,0.75" />
              <polygon points="35.35,0.4 35.8,0.75 35.35,1.1 34.9,0.75" />
              <polygon points="63.05,0.4 63.5,0.75 63.05,1.1 62.6,0.75" />
              <polygon points="64.65,0.4 65.1,0.75 64.65,1.1 64.2,0.75" />
            </g>
            <g
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeLinejoin="miter"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            >
              <polygon points="48.6,0.75 46.4,0.425 44.2,0.75 46.4,1.075" vectorEffect="non-scaling-stroke" />
              <polygon points="51.4,0.75 53.6,0.425 55.8,0.75 53.6,1.075" vectorEffect="non-scaling-stroke" />
              <polygon points="42.2,0.75 40.1,0.425 38,0.75 40.1,1.075" vectorEffect="non-scaling-stroke" />
              <polygon points="57.8,0.75 59.9,0.425 62,0.75 59.9,1.075" vectorEffect="non-scaling-stroke" />
            </g>
          </g>
        </svg>
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
