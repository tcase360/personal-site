import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    font-family: mr-eaves-xl-modern, "Helvetica Neue", sans-serif;

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
    font-family: "Georgia", sans-serif;
`;

export {
    Header,
    Description,
};
