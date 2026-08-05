import Image from "next/image";

import type { ContentImage } from "@/content/types";

type ContentFigureProps = {
  href?: string;
  image: ContentImage;
  priority?: boolean;
};

export function ContentFigure({ href, image, priority = false }: ContentFigureProps) {
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
      <div className="content-figure__pinstripe">
        {href ? (
          <a className="content-figure__link" href={href}>
            {renderedImage}
          </a>
        ) : (
          renderedImage
        )}
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
