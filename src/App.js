import * as React from 'react'
import {Switch} from './switch'

const ToggleContext = React.createContext()


function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

    return     (<>
    
    <ToggleContext.Provider value={{on, toggle}}>
      {children}
    </ToggleContext.Provider>
    <Switch on={on} onClick={toggle} />
    </>)
}


function ToggleOn ({children}) {
  const {on} = React.useContext(ToggleContext)
return <div>{on && children}</div>
}

function ToggleOff ({children}) {
  const {on} = React.useContext(ToggleContext)
return <div>{!on && children}</div>
}

function ToggleButton  () {
  const {toggle} = React.useContext(ToggleContext)

return <button onClick={toggle}>toggle too</button>
}

function App() {
  
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
       <div>
          <ToggleButton />
       </div>
      </Toggle>

    </div>
  )
}

export default App
