import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import VideoContainer from "./components/VideoContainer";
import { Container } from "./style";

export default function Home() {
  return (
    <Container>
      <Header />
      <MainBanner />
      <VideoContainer />
    </Container>
  )
}
