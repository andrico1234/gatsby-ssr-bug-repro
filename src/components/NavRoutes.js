import React from "react";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import AltNavBar from "./AltNavBar";

function NavRoutes() {
  return (
    <Router>
      <AltNavBar path="/" />
      <NavBar default />
    </Router>
  );
}

export default NavRoutes;
