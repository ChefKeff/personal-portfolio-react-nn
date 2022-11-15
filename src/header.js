import "./fonts.css";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    let elements = document.getElementsByClassName("fontme");
    for (let i = 0; i < elements.length; i++) {
      let currElements = elements[i].children;
      for (let char = 0; char < currElements.length; char++) {
        let random = Math.random();
        console.log(random);
        if (random < 0.45) {
          currElements[char].style.fontFamily = "Archivo-ExtraBold";
          continue;
        }
        if (0.45 < random && random < 0.66) {
          currElements[char].style.fontFamily = "Times New Roman";
          currElements[char].style.fontWeight = "900";
          continue;
        } else {
          currElements[char].style.fontFamily = "Courier New";
          currElements[char].style.fontWeight = "900";
          continue;
        }
      }
    }
  }, []);
  return (
    <div className="Header">
      <header>
        {" "}
        <h1 className="fontme" id="myName">
          <span>N</span>
          <span>I</span>
          <span>K</span>
          <span>L</span>
          <span>A</span>
          <span>S</span>
          <span> </span>
          <span>N</span>
          <span>O</span>
          <span>R</span>
          <span>I</span>
          <span>N</span>
          <span>D</span>
          <span>E</span>
          <span>R</span>
        </h1>
      </header>
    </div>
  );
}

export default Header;
