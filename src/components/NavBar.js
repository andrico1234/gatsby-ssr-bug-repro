import React from "react"
import { Link } from "gatsby"

function NavBar() {
  return (
    <nav style={{ display: "flex", width: "100%", margin: "0 auto" }}>
      <Link to="/page-2">NavBar</Link>
      <ul style={{ display: "flex", flexDirection: "row", listStyle: "none" }}>
        <li style={{ padding: "8px" }}>Item One</li>
        <li style={{ padding: "8px" }}>Item Two</li>
        <li style={{ padding: "8px" }}>Item Three</li>
      </ul>
    </nav>
  )
}

export default NavBar
