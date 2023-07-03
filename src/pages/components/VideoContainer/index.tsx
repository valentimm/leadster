import { useState } from "react";
import Select from "react-select";
import HeaderButton, { HeaderButtonProps } from "./components/HeaderButton";
import VideoThumbnail, { VideoThumbnailProps } from "./components/VideoThumbnail";
import StyleVideoContainer from "./style";


export default function VideoContainer() {
  const titles: HeaderButtonProps[] = [
    { buttonKey: 16, title: "Agências" },
    { buttonKey: 17, title: "Chatbot" },
    { buttonKey: 18, title: "Marketing Digital" },
    { buttonKey: 19, title: "Geração de Leads" },
    { buttonKey: 20, title: "Mídia Paga" },
  ];
  const videos: VideoThumbnailProps[] = [
    { key: 21, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 22, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 23, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 24, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 25, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 26, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 27, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 28, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
    { key: 29, image: "/thumbnail.png", title: "Como aumentar sua Geração de Leads feat. Traktor" },
  ];

  const options = [
    { value: "recentes", label: "Mais recentes" },
    { value: "antigos", label: "Mais antigos" },
    { value: "populares", label: "Mais populares" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <StyleVideoContainer>
      <header>
      <div className="buttons">
      {titles.map((title) => (
        <HeaderButton key={title.buttonKey} buttonKey={title.buttonKey} title={title.title} />
      ))}
      </div>
      <div className="search">
        <p>Ordenar por: </p>
        <Select
          options={options}
          value={selectedOption}
          className="select"
          placeholder="Data"
        />
      </div>
      </header>
      <main>
        {videos.map((video) => (
        <VideoThumbnail key={video.key} image={video.image} title={video.title} />
        ))}
      </main>
      <footer>Página</footer>
    </StyleVideoContainer>
  );
}
