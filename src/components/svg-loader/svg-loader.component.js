import React, { useEffect } from "react";

import Vivus from "vivus";

import './svg-loader.component.scss';

const AnimatedSvgLoader = () => {

    useEffect(() => {
        new Vivus('svg-loader', {
            duration: 200,
        })
    }, []);

    return (
        <div className="svg-loader">

           <svg id="svg-loader" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                   d="M174.648 218.34V179.772L0 260.908V292.212L174.648 373.332V334.764L42.568 276.916V276.188L174.648 218.34ZM171.648 336.725L39.568 278.877V274.227L171.648 216.379V184.474L3 262.822V290.298L171.648 368.631V336.725Z"
                   stroke="#F39CA9" stroke-width="3"
                />
                <path fill-rule="evenodd" clip-rule="evenodd"
                   d="M201.6 387.9H238.4L316.216 124.1H279.464L201.6 387.9ZM205.613 384.9H236.157L312.203 127.1H281.706L205.613 384.9Z"
                   stroke="#F39CA9" stroke-width="3"
                />
                <path fill-rule="evenodd" clip-rule="evenodd"
                   d="M337.352 334.772V373.34L512 293.284V259.828L337.352 179.772V218.34L472.344 276.196V276.924L337.352 334.772ZM340.352 216.362L475.344 274.218V278.902L340.352 336.75V368.665L509 291.359V261.753L340.352 184.447V216.362Z"
                   stroke="#F39CA9" stroke-width="3"
                />
            </svg>


        </div>
    )
}

export default AnimatedSvgLoader;