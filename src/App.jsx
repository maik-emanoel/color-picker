import { useState } from "react";
import "./index.css";
import { CircleHalf, Palette, Sun } from "@phosphor-icons/react";

export default function App() {
  const [hue, setHue] = useState(272);
  const [saturation, setSaturation] = useState(70);
  const [lightness, setLightness] = useState(50);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const backgroundStyle = {
    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  };

  const colorStyle = {
    color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  };

  return (
    <div className="bg-[#151515] max-w-[430px] w-full min-h-[660px] relative overflow-hidden rounded-lg pt-[210px] flex flex-col items-center shadow-xl shadow-[#0a0a0a]">
      <div
        className="absolute w-[846px] h-[846px] -top-[630px] -left-[204px] rounded-full"
        style={{
          ...backgroundStyle,
          boxShadow: `0px 0px 53px 13px ${backgroundStyle.background}`,
        }}
      ></div>

      <h1
        className="text-[34px] leading-[38px] text-center my-20 font-bold"
        style={{ 
          WebkitTextStroke: `.8px ${colorStyle.color}`,
          WebkitTextFillColor: 'transparent'
        }}
      >
        Color Picker
      </h1>

      <ul className="flex flex-col gap-14 items-center w-[90%] max-w-[300px] mx-auto">
        <li className="flex gap-4 w-full items-center">
          <Palette size={24} color="white" />
          <input
            type="range"
            value={hue}
            max={360}
            onChange={(e) => handleInputChange(e, setHue)}
            id="input-hue"
            className="flex-1 h-[5px] bg-hueGradient rounded-xl"
            style={{
              "--thumb-color": backgroundStyle.background,
            }}
          />
        </li>
        <li className="flex gap-4 w-full items-center">
          <Sun size={24} color="white" />
          <input
            type="range"
            value={saturation}
            onChange={(e) => handleInputChange(e, setSaturation)}
            className="flex-1 h-[5px] rounded-xl bg-[#D9D9D9]"
          />
        </li>
        <li className="flex gap-4 w-full items-center">
          <CircleHalf size={24} color="white" />
          <input
            type="range"
            value={lightness}
            onChange={(e) => handleInputChange(e, setLightness)}
            className="flex-1 h-[5px] rounded-xl bg-[#D9D9D9]"
          />
        </li>
      </ul>
    </div>
  );
}
