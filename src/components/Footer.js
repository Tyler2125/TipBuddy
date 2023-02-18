import React from "react";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";
function Footer() {
  function gH() {
    window.open("https://github.com/Tyler2125");
  }
  function lI() {
    window.open("https://www.linkedin.com/in/tylerbakker35699864/");
  }
  return (
    <div id='footer'>
      <footer>&#169; TylerBakker 2023</footer>
      <TfiGithub className='icons' onClick={gH} />
      <TfiLinkedin className='icons' onClick={lI} />
    </div>
  );
}

export default Footer;
