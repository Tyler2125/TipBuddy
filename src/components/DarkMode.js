import React from "react";
import { useState } from "react";
import { GiMoonBats, GiSunSpear } from "react-icons/gi";

function DarkMode() {
  const [dark, setDark] = useState(true);
  const body = document.body;
  function changeColor() {
    setDark(!dark);
    if (dark === true) {
      body.classList.add("Dark");
    } else {
      body.classList.remove("Dark");
    }
  }
  return (
    <div>
      {dark ? (
        <GiMoonBats className='Moon' size={34} onClick={changeColor} />
      ) : (
        <GiSunSpear className='Sun' size={34} onClick={changeColor} />
      )}
    </div>
  );
}

export default DarkMode;
