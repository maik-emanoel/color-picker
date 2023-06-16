
import { useState } from "react"
import './index.css'
import { CircleHalf, Palette, Sun } from "@phosphor-icons/react"

export default function App() {
  const [hue, setHue] = useState(272)
  const [saturation, setSaturation] = useState(70)
  const [lightness, setLightness] = useState(50)
 
  const handleInputChange = (e, setter) => {
    setter(e.target.value)
  }

  const backgroundStyle = {
     background: `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

  return (
      <div>
        <div style={{width: 100, height: 100, ...backgroundStyle}}></div>

        <h1>Color Picker</h1>

        <div>
          <div>
            <Palette />
            <input 
              type="range"
              value={hue}
              max={360}
              onChange={(e) => handleInputChange(e, setHue)} 
            />
          </div>
          <div>
            <Sun />
            <input 
              type="range"
              value={saturation}
              onChange={(e) => handleInputChange(e, setSaturation)} 
            />
          </div>
          <div>
            <CircleHalf />
            <input 
              type="range"
              value={lightness}
              onChange={(e) => handleInputChange(e, setLightness)}
            />
          </div>
        </div>
      </div>
  )
}
