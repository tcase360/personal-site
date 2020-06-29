import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressBar = styled.rect.attrs(props => ({
    height: 10,
    width: props.width,
}))`
    transition: width 250ms;
`;

function RunningRange(props) {
    console.log(props);
    // const progressPercentage = progress / goal;
    // console.log(progress, goal);
    let [ currentMiles, setCurrentMiles ] = useState(0);
    let currentPercentage = (currentMiles / 600) * 100;

    useEffect(() => {
        setTimeout(() => {
            setCurrentMiles(172);
        }, 100);
    })

    return (
        <svg width="100%" height="50">
            <g>
                <rect height="10" width="100%" fill="#f0f0f5" />
                <ProgressBar height="10" width={`${currentPercentage}%`} />
            </g>
        </svg>
    )
}

export default RunningRange;
