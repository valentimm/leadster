import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import { Container } from "./style";

export default function Home() {
  return (
    <Container>
      <Header />
      <MainBanner />
    </Container>
  )
}
