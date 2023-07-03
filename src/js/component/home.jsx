import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("");

    useEffect(() => {
        const backgroundColorDiv = document.querySelector(".container");
        
        backgroundColorDiv.classList.toggle("div-rojo", color === "red");
        backgroundColorDiv.classList.toggle("div-amarillo", color === "yellow");
        backgroundColorDiv.classList.toggle("div-verde", color === "green");
    }, [color]);

    const clickHandler = (selectedColor) => color === selectedColor ? setColor("") : setColor(selectedColor);

    return <>
        <div className="container-fluid">
            <div className="light-body container pt-4 flex-column">
                <div className={`rojo mb-1 ${color === "red" ? "selected-red" : ""}`} onClick={() => clickHandler("red")}></div>
                <div className={`amarillo mb-1 ${color === "yellow" ? "selected-yellow" : ""}`} onClick={() => clickHandler("yellow")}></div>
                <div className={`verde mb-1 ${color === "green" ? "selected-green" : ""}`} onClick={() => clickHandler("green")}></div>
            </div>
           
        </div>
    </>
};

export default TrafficLight