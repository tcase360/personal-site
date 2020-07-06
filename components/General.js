import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    font-family: 'Roboto', Geneva, Verdana, sans-serif;

    &a {
        color: #0070f3;
        text-decoration: none;
    }

    &a:hover,
    &a:focus,
    &a:active {
        text-decoration: underline;
    }
`;

const Description = styled.p`
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
    font-family: 'Fjord One', serif;
`;

export {
    Header,
    Description,
};
