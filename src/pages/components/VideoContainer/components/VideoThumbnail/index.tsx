import * as Dialog from "@radix-ui/react-dialog";
import StyleVideoThumbnail from "./style";
export interface VideoThumbnailProps {
  key: number;
  image: string;
  title: string;
}

export default function VideoThumbnail({ image, title }: VideoThumbnailProps) {
  return (
    <Dialog.Root>
    <StyleVideoThumbnail>
      <Dialog.Trigger asChild>
        <span>
          <img src={image} alt="Thumbnail" />
        </span>
      </Dialog.Trigger>
        <p>{title}</p>
    </StyleVideoThumbnail>
    </Dialog.Root>
  )
}