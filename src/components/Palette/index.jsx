import React from "react";
import { SchemeColor } from "../SchemeColor";
import './style.css';

export const Palette = ({paletteData}) => {
  return (
      
    <div key = {paletteData.name} className="palette">

      <div className = {paletteData.direction === "horizontal"? "palette-scheme palette-scheme--horizontal" : "palette-scheme palette-scheme--vertical" }  >
        
        <img className="scheme-image" src = {paletteData.image} alt = {paletteData.name} />
        
        <div className="scheme-colors">
          {paletteData.colors.map((hex) => (
            <SchemeColor color = {hex} key = {hex}/>
          ))}
        </div>

      </div>

      <div className="palette-info">
        
        <h2>{paletteData.name}</h2>
        
        <p>{paletteData.description}</p>

        <p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a>.</p>
        
      </div>

    </div>
  )
}
