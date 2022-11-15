import "./fonts.css";
import schoolPic from "./images/school.jpg";
import { useEffect, useState } from "react";
import { SplitColorChannelText } from "react-text-fun";

function Edu() {
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
                className={selected === i ? "titleBig fontme" : "title fontme"}
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
    id: "eduTitle",
    title: (
      <>
        <span>E</span>
        <span>D</span>
        <span>U</span>
        <span>C</span>
        <span>A</span>
        <span>T</span>
        <span>I</span>
        <span>O</span>
        <span>N</span>
      </>
    ),
    text: (
      <>
        <SplitColorChannelText text="education"></SplitColorChannelText>
        <span>
          <p>The University of Tokyo</p>
          <p>
            AY2022 - USTEP International Exchange Program
            <br></br>
            Through my studies at Uppsala University I got the opportunity to
            study a semester at The University of Tokyo, for fall semester 2022.
            During this exchange I will focus on studying some more computer
            science-y stuff as well as some more social science-related courses.
            I would love to get a better understanding for the implementation of
            technical systems in Tokyo and Japan in general, and I hope that
            this is something that I can learn at The University of Tokyo. I
            also want to brush up on some Japanese and hopefully reach JLPT
            N2-level before returning home to Sweden.
          </p>
          <p>
            This exchange has been made possible through some scholarships. Huge
            thanks to Sweden-Japan Foundation, Anna och Edwin Bergers Stiftelse
            and Anna Whitlocks Minnesfond for making my exchange to The
            University of Tokyo the best it can be!
          </p>
        </span>
        <span>
          <p>Uppsala University</p>
          <p>
            M.Sc. Sociotechnical Systems Engineering - IT <br></br>I am
            currently studying a M.Sc. in Sociotechnical Systems Engineering
            with a focus on IT and major in Computer Science. The Sociotechnical
            Systems Engineer program offers a unique way of studying IT and tech
            since it combines these more technical areas with social science
            studies. This gives me a unique set of skills in understanding the
            implementation of technologies into today's complex societal
            systems.{" "}
          </p>
          <p>
            During my studies I have written two Bachelor's Thesis(es?) 2022 -
            Predicting Stock Market Movement Using Machine Learning: Through
            r/wallstreetbets sentiment & Google Trends, Herding versus Wisdom of
            Crowds This Bachelor's Thesis can be accessed here. The
            programmatical aspect of the paper have been done using Scikit-Learn
            in Python. With data gathered from different API's containing
            finance data, Google Trends data as well as r/wallstreetbets
            sentiment. 2021 - Developing a BIM Viewer Visualization of digital
            twins in collaboration with Vasakronan This Bachelor's Thesis can be
            accessed here. This thesis was done in collaboration with the real
            estate company Vasakronan - who later gave me and my colleagues a
            chance to do a summer internship furthering the project on which
            this paper was based.
          </p>
        </span>
        <span>
          <p>Kogakkan High School</p>
          <p>
            During my high school studies I decided to spend a year abroad in
            Japan through a Rotary International Youth Exchange. This exchange
            was more of a cultural exchange where I learned some Japanese,
            interpersonal skills and experienced a lot of personal growth. The
            exchange also made it very clear to me that I wanted to go back to
            Japan on another exchange - something that I got the chance to do
            through Uppsala University!
          </p>
        </span>
        <p>
          <img src={schoolPic} id="picOfSchool"></img>
        </p>
      </>
    ),
  },
];
export default Edu;
