import React from "react"
import NavRoutes from "./src/components/NavRoutes"

export const wrapRootElement = ({ element }) => {
  return (
    <div className="App" data-testid="app">
      <NavRoutes />
      {element}
    </div>
  )
}
