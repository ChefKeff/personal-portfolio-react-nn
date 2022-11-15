import "./fonts.css";
import { useEffect, useState } from "react";

function Contact() {
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
  }, []);

  let [selected, setSelected] = useState(null);

  let toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="wrapper contactWrapper">
      <div className="item contactTitleCard" id={eng_text.id}>
        <div id={eng_text.id} className={"titleCardContact"}>
          <h1 className="fontme contactTitle">
            {" "}
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>E</span>
          </h1>
        </div>
        <div>
          <form
            action="https://formsubmit.co/contact@niklasnorinder.se"
            method="POST"
          >
            <label>
              <p>name</p>
              <input type="text" name="name" required></input>
            </label>
            <label>
              <p>email</p>
              <input type="email" name="email" required></input>
            </label>
            <label>
              <p>subject</p>
              <input type="text" name="subject" required></input>
            </label>
            <label>
              <p>inquiry</p>
              <textarea type="textarea" name="inquiry" required></textarea>
            </label>
            <input type="submit" value="Submit"></input>
          </form>
          <ul id="links">
            <li>
              <a href="https://github.com/chefkeff">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/niklas-norinder-90805b16a/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:contact@niklasnorinder.se">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const eng_text = [
  {
    id: "otherTitle",
    title: (
      <>
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
        <span>&nbsp;</span>
        <span>M</span>
        <span>E</span>
      </>
    ),
    text: (
      <>
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
            comprised of some of my works in the widget below. Please note that
            I am not resposible for the subject matter of the lyrics, that is
            completely up to the artist. Some of the songs listed below have
            been produced by me, some mixed by me, some have been produced by me
            and some are performed by me! I currently have over 10 000 000
            streams combined on Spotify.
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
      </>
    ),
  },
];
export default Contact;
