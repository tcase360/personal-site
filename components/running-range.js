import React from 'react';
import styled from 'styled-components';



function RunningRange(props) {
    console.log(props);
    // const progressPercentage = progress / goal;
    // console.log(progress, goal);

    return (
        <svg className="progress-bar" width="100%" height="50">
            <g>
                <rect height="10" width="100%" className="progress-bar-container" fill="#f0f0f5" />
                <rect height="10" width={`${60}%`} className="progress-bar" />
            </g>
        </svg>
    )
}

RunningRange.getInitialProps = ctx => {
    return {
        goal: 600,
        progress: 165,
    };
};

export default RunningRange;
