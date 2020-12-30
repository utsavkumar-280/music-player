import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibrayStatus, libraryStatus }) => {
  return (
    <nav>
      <div className="logo">
        <h1>SunLo-Fi</h1>
        <h6>
          by &nbsp;
          <a
            href="https://utsav-kumar.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            UTSAV
          </a>
        </h6>
      </div>

      <button className="lib" onClick={() => setLibrayStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
