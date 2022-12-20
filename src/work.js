import "./fonts.css";
import { useEffect, useState } from "react";
import workPic from "./images/work.jpg";
import { LiquidDistortionText } from "react-text-fun";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Work() {
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
        currElements[char].style.flexDirection = "column";
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
      document.getElementById("myVideo").style.filter =
        "grayscale(1) brightness(120%)";
      return setSelected(null);
    }
    document.getElementById("myVideo").style.filter =
      "grayscale(1) brightness(120%) blur(8px)";
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
      <div></div>
    </div>
  );
}

const eng_text = [
  {
    id: "workTitle",
    title: (
      <>
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>K</span>
        <span>&nbsp;</span>
        <span>E</span>
        <span>X</span>
        <span>P</span>
        <span>E</span>
        <span>R</span>
        <span>I</span>
        <span>E</span>
        <span>N</span>
        <span>C</span>
        <span>E</span>
      </>
    ),
    text: (
      <>
        <LiquidDistortionText text="work experience" />
        <span>
          <p>Vasakronan</p>
          <p>
            2022 - Computer Science summer internship.
            <br></br>
            Developing a website that predicts future PV power production given
            the solar irradiance using machine learning. Using Python for
            machine learning and backend, building the frontend using Vanilla
            Javascript, HTML and CSS. Accessing historical PV data through an
            internal MSSQL Server Database. Gathering historical solar
            irradiance through the SMHI STRÅNG API. and current Vasakronan PV
            production through the Metry API and the ProptechOS API. Deploying
            the website internally on an Ubuntu server. Using Microsoft PowerBI
            to build an energy dashboard - used to visualize the energy being
            used by the real estates. Getting the data for PowerBI through an
            internal MSSQL Server Database.
          </p>
          <p>
            2021 - Computer Science summer internship.
            <br></br>
            Developing an internal website that visualizes sensor data in
            Vasakronans real estates. Using TypeScript and NodeJS to build a
            website with an MSSQL Server Database. Gathering indoor climate
            values from the sensors through the ProptechOS API. Using Microsoft
            PowerBI to create a simple display of historical indoor climate
            values connected to the MSSQL Server Database.
          </p>
        </span>
        <span>
          <p>Uppsala University</p>
          <p>
            2022 - Teaching Assistant - Programming. <br></br>
            Helping first year students learn some basic programming. I was
            teaching Python, Java and some MIPS, mainly using the IntelliJ IDE.
            I was holding this job whilst doing my full-time studies at Uppsala
            University.
          </p>
        </span>
        <img src={workPic} id="picOfWork"></img>
        <span>
          <p>Volunteering</p>
          <p>
            2020-2021 - Engineers Without Borders Sweden<br></br>
            Active in the Uppsala managing group. Head of The Reflective
            Engineer, managing a team of around 8 people.
          </p>
          <p>
            2018-2019 - UTN - Faculty Student Union <br></br>
            Fadderkå. Responsible for the buddy-program for one of the
            engineering programs at Uppsala University. Managing around 60
            volunteers and 90 new students. In an event reaching more than 1200
            people.
          </p>
        </span>
        <span>
          <p>Other Merits</p>
          <p>
            Language <br></br>
            Swedish - Native English - Professional (TOELF 112/120 January 2021)
            Japanese - Conversational, not yet fluent. Aspirations to reach JPLT
            N1 level.
          </p>
          <p>
            Development <br></br>
            Front end - JavaScript, ReactJS, TypeScript, Vue, HTML, CSS Back end
            - SQLServer, MySQL, NodeJS, Python (Flask mainly) Other languages -
            Python, R, Matlab, Java
          </p>
          <p>
            Music Production <br></br>
            Software - Ableton Live, FL Studio, Native Instruments Traktor, UAD
            Console, Melodyne Hardware - UAD Hardware (Apollo Twin), Tascam
            racks, mixer knowledge
          </p>
        </span>
      </>
    ),
  },
];
export default Work;
