import Contact from "./_components/contact";
import Galerie from "./_components/galerie";
import Header from "./_components/header";
import Info from "./_components/info";
import Menu from "./_components/menu";
import Video from "./_components/video";

export default function Home() {
  return (
    <main>
      <Header />
      <Menu />
      <Video />
      <Info />
      <Galerie />
      <Contact />
    </main>
  );
}
