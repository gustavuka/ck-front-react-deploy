import React from "react";

const Headline = () => {
    return (
        <div id="loader">
            <svg
                width="200px"
                height="200px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-infinity"
                style={{ background: "none" }}
            >
                <path
                    fill="none"
                    ng-attr-stroke="{{config.stroke}}"
                    ng-attr-stroke-width="{{config.width}}"
                    ng-attr-stroke-dasharray="{{config.dasharray}}"
                    d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
                    stroke="#1d3f72"
                    strokeWidth="2"
                    strokeDasharray="6.414723205566406 6.414723205566406"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        calcMode="linear"
                        values="0;256.58892822265625"
                        keyTimes="0;1"
                        dur="7.8"
                        begin="0s"
                        repeatCount="indefinite"
                    ></animate>
                </path>
            </svg>
        </div>
    );
};

export default Headline;
