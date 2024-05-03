import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks = links.map((link,index)=>(
    <a key={index} href={`#${link}`}> {link}</a>
  ))

  return <nav>{navLinks}</nav>;
w
}

export default NavBar;
