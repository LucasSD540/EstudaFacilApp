import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./routes";
import { StudyLevelProvider } from "./contexts/StudyLevelContext";

function App() {
  return (
    <StudyLevelProvider>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </StudyLevelProvider>
  );
}

export default App;
