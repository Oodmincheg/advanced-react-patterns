import * as React from 'react'
import {Switch} from './switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

    return     (<>
    {React.Children.map(children, child => {
      if (typeof child.type === 'string') return child
      const newChild = React.cloneElement(child, {on, toggle})
      return newChild
    })}
    <Switch on={on} onClick={toggle} />
    </>)
}


Toggle.On = ({children, on}) => <div>{on && children}</div>

Toggle.Off = ({children, on}) => <div>{!on && children}</div>

Toggle.Button = ({toggle}) => <button onClick={toggle}>toggle too</button>


function App() {
  
  return (
    <div>
      <Toggle>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
       <Toggle.Button />
       <div>Hello</div>
      </Toggle>

    </div>
  )
}

export default App
