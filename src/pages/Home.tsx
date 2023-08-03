import Header from "../components/shared/Header";
import { NavigationBar } from "../components/shared/NavigationBar";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <Header
        title="Home page"
        description="Select a menu to start using this beautiful website"
      />
    </>
  );
}
