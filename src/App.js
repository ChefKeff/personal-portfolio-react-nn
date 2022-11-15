import Header from "./header.js";
import AbtMe from "./abtme";
import Work from "./work";
import Edu from "./edu.js";
import Proj from "./proj.js";
import Contact from "./contact.js";
import video from "./images/placeholder-video.mp4";

function App() {
  return (
    <div>
      <video autoPlay muted defaultMuted loop playsInline preload id="myVideo">
        <source src={video} type="video/mp4" id="video" />
      </video>
      <div className="onTopOfVideo">
        <Header />
        <AbtMe />
        <Work />
        <Edu />
        <Proj />
        <Contact />
      </div>
    </div>
  );
}
export default App;
