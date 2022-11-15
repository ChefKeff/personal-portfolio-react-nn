import "./fonts.css";
import imageOfMe from "./images/me.jpg";
import { useEffect, useState } from "react";
import { DistortionText } from "react-text-fun";

function AbtMe() {
  useEffect(() => {
    let elements = document.getElementsByClassName("fontme");
    for (let i = 0; i < elements.length; i++) {
      let currElements = elements[i].children;
      for (let char = 0; char < currElements.length; char++) {
        let random = Math.random();
        if (random < 0.5) {
          currElements[char].style.fontFamily = "Archivo-ExtraBold";
          continue;
        }
        if (0.5 < random && random < 0.66) {
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
    let textElements = document.getElementsByClassName("text");
    for (let i = 0; i < textElements.length; i++) {
      let currElements = textElements[i].children;
      for (let char = 0; char < currElements.length; char++) {
        currElements[char].style.display = "flex";
        currElements[char].style.flexDirection = "row";
        currElements[char].style.width = "75vw";
        let random = Math.random();
        if (random < 0.33) {
          currElements[char].style.justifyContent = "center";
          continue;
        }
        if (0.33 < random && random < 0.66) {
          currElements[char].style.justifyContent = "flex-end";
          currElements[char].style.marginRight =
            (Math.random() * 20).toString() + "vw";
          continue;
        } else {
          currElements[char].style.justifyContent = "flex-start";
          currElements[char].style.marginLeft =
            (Math.random() * 20).toString() + "vw";
          continue;
        }
      }
    }
  }, []);

  let [selected, setSelected] = useState(null);

  let toggle = (i) => {
    if (selected == i) {
      document.getElementById("myVideo").style.filter = "grayscale(1)";
      return setSelected(null);
    }
    document.getElementById("myVideo").style.filter = "grayscale(1) blur(8px)";
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {eng_text.map((item, i) => (
          <div className="item" id={item.id}>
            <div
              id={item.id}
              className={
                selected === i ? "titleCard titleCardSel" : "titleCard"
              }
              onClick={() => toggle(i)}
            >
              <h1
                className={selected === i ? "fontme titleBig" : "fontme title"}
              >
                {item.title}
              </h1>
            </div>
            <div className={selected === i ? "text show" : "text"}>
              {item.text}
              <button onClick={() => toggle(i)}>back</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const eng_text = [
  {
    id: "aboutTitle",
    title: (
      <>
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        <span>&nbsp;</span>
        <span>M</span>
        <span>E</span>
      </>
    ),
    text: (
      <>
        <DistortionText text="about me" />
        <img src={imageOfMe} id="picOfMe"></img>
        <span>
          <p>Hello!</p>
        </span>
        <span>
          <p>
            My name is Niklas Norinder.I am currently studying my fourth year at
            the M.Sc.Sociotechnical Systems Engineering program at Uppsala
            University, majoring in computer science.
          </p>
        </span>
        <span>
          <p>
            My hobbies (outside of computer science-y stuff and programming)
            include producing electronic music, hanging out with friends and
            going running. I am currently in Tokyo spending a semester abroad at
            the University of Tokyo!
          </p>
        </span>
      </>
    ),
  },
];
export default AbtMe;
