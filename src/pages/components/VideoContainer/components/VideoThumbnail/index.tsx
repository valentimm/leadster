import { StyleVideoThumbnail } from "./style";

export interface VideoThumbnailProps {
  key: number;
  image: string;
  title: string;
}

export default function VideoThumbnail({ image, title }: VideoThumbnailProps) {
  return (
    <StyleVideoThumbnail>
        <span>
          <img src={image} alt="Thumbnail" />
        </span>
        <p>{title}</p>
    </StyleVideoThumbnail>
  )
}