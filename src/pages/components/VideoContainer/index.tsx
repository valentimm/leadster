import HeaderButton, { HeaderButtonProps } from "./components/HeaderButton";
import VideoThumbnail, { VideoThumbnailProps } from "./components/VideoThumbnail";
import { StyleVideoContainer } from "./style";

export default function VideoContainer() {
  const titles: HeaderButtonProps[] = [
    { key: 1, title: "Agências" },
    { key: 2, title: "Chatbot" },
    { key: 3, title: "Marketing Digital" },
    { key: 4, title: "Geração de Leads" },
    { key: 5, title: "Mídia Paga" },
  ]
  const videos: VideoThumbnailProps[] = [
    { key: 1, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 2, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 3, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 4, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 5, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 6, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 7, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 8, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 9, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
  ]
  return (
    <StyleVideoContainer>
      <header>
        {titles.map((title) => (
          <HeaderButton key={title.key} title={title.title} />
        ))}
        <div className="search">
          <p>Ordenar por</p>
        </div>
      </header>
      <main>
        {videos.map((video) => (
          <VideoThumbnail key={video.key} image={video.image} title={video.title} />
        ))}
      </main>
      <footer>
        Página
      </footer>
    </StyleVideoContainer>
  )
}