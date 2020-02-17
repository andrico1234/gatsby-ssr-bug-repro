import React from "react"
import { Link } from "gatsby"

function AltNavBar() {
  return (
    <nav
      style={{
        backgroundColor: "yellow",
        display: "flex",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Link to="/page-2">AltNavBar</Link>
      <ul style={{ display: "flex", flexDirection: "row", listStyle: "none" }}>
        <li style={{ padding: "8px" }}>Item One</li>
        <li style={{ padding: "8px" }}>Item Two</li>
        <li style={{ padding: "8px" }}>Item Three</li>
      </ul>
    </nav>
  )
}

export default AltNavBar
