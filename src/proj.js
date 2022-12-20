import "./fonts.css";
import coffeeImg from "./images/coffee.jpg";
import { useEffect, useState } from "react";
import { FliesText } from "react-text-fun";

function Proj() {
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
    </div>
  );
}

const eng_text = [
  {
    id: "otherTitle",
    title: (
      <>
        <span>P</span>
        <span>R</span>
        <span>O</span>
        <span>J</span>
        <span>E</span>
        <span>C</span>
        <span>T</span>
        <span>S</span>
        <span>&nbsp;</span>
        <span>O</span>
        <span>T</span>
        <span>H</span>
        <span>E</span>
        <span>R</span>
      </>
    ),
    text: (
      <>
        <FliesText text="projects other"></FliesText>
        <img src={coffeeImg} id="picOfCoffee"></img>
        <span>
          <p>Programming Projects</p>
          <p>
            Vasakronan Solveig - Machine Learning on PV production
            <br></br>
            This project was done as part of my summer internship at Vasakronan
            summer 2022. I collected historical PV production data and created
            machine learning models using scikit-learn, storing them using
            Pickle and later displaying the data on a simple website created
            using Flask.
          </p>
          <p>
            This website was then uploaded to an internal Ubuntu-server and
            hosted on the Vasakronan internal company network to be accessed by
            the Vasakronan employees. The code base for this project is
            accessible on my GitHub, for a direct link please click here.
          </p>
        </span>
        <span>
          <p>Music</p>
          <p>Spotify</p>
          <p>
            I have done some music-stuff! Please check out my Spotify-playlist
            comprised of some of my works{" "}
            <a
              id="spotifylink"
              href="https://open.spotify.com/playlist/6G2fuRZqoI5MKXFooHqTs9?si=25765c81fceb41a9"
            >
              here
            </a>
            ! Please note that I am not resposible for the subject matter of the
            lyrics, that is completely up to the artist. Some of the songs
            listed below have been produced by me, some mixed by me, some have
            been produced by me and some are performed by me! I currently have
            over 10 000 000 streams combined on Spotify.
          </p>
        </span>
        <span>
          <p>Food</p>
          <p>
            Who doesn't love food? I know I do! Below you can find an embedded
            Google Maps map (?) with some of my favourite places listed. Please
            shoot me an email if you find something you like! My aspiration is
            to update this map during my exchange year in Tokyo and later.
          </p>
        </span>
        <span>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1YSe0ace4ZoFCRwxvt40M_NlanYWIZ-Y&ehbc=2E312F"
            id="googlemap"
          ></iframe>
        </span>
        <span>
          <p>
            Also thanks to{" "}
            <a
              style={{
                color: "black",
              }}
              href="https://www.linkedin.com/in/parsons-christopher/"
            >
              Chris Parsons
            </a>{" "}
            for recording the video of me drinking tea :)
          </p>
        </span>
      </>
    ),
  },
];
export default Proj;
