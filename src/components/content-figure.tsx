import Image from "next/image";

import type { ContentImage } from "@/content/types";

type ContentFigureProps = {
  image: ContentImage;
  priority?: boolean;
};

export function ContentFigure({ image, priority = false }: ContentFigureProps) {
  return (
    <figure className="content-figure">
      <div className="content-figure__pinstripe">
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
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
