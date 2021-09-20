import * as React from 'react'
import {Switch} from './switch'

function Toggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

    return <Switch on={on} onClick={toggle} />
}


const ToggleOn = () => null

const ToggleOff = () => null

const ToggleButton = () => null


function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App


