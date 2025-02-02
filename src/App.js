import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
import ProjectList from "./Components/Projects/project";
import SocialSidebar from "./Components/Sidebar/Sidebar";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <ProjectList/>
      <SocialSidebar/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
