import React, { useState } from 'react';
import styled from 'styled-components';

const primaryOrange = '#FC5200';
const backgroundColor = '#191919';


const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: row;

    background-color: white;

    width: 100%;
    max-width: 700px;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const CompanyColumn = styled.div`
    font-family: ${props => props.theme.font.family.sansSerif};
    min-width: 180px;
    background-color: ${props => props.theme.color.background};
    text-align: center;
`;

const Company = styled.button`
    font-family: ${props => props.theme.font.family.serif};
    cursor: pointer;
    color: ${props => props.active ? props.theme.color.primary : 'white'};
    font-size: 18px;
    line-height: 30px;
    width: 100%;
    max-width: 200px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${props => props.active ? props.theme.color.primary : 'white'};
    border-right: 7px solid ${props => props.active ? props.theme.color.primary : 'white'};
    padding: 0.5rem;

    transition: all 250ms ease-in;
`;

const DescriptionColumn = styled.div`
    background-color: ${props => props.theme.color.background};
    width: 100%;
    text-align: center;
    padding: 0 1.5rem;
`;

const DescriptionSection = styled.section`
    margin-top: 4.8rem;
    text-align: left;
    box-sizing: border-box;

    @media (max-width: 700px) {
        width: 100%;
        margin-top: 3rem;
        text-align: left;
        padding: 0 1.5rem;
    }
`;

const DescriptionParagraph = styled.p`
    margin-top: 0;
    font-size: 16px;
    box-sizing: border-box;

    &::first-letter {
        font-size: 24px;
        color: ${props => props.theme.color.primary};
    }
`;
// constants
const SHYFT = 'shyft';
const CLOUD4WI = 'cloud4wi';

function ShyftDescription() {
    return (
        <DescriptionParagraph>
            At Shyft I started off as the first front-end engineer at the company. This gave me the opportunity
            to pick my own tech stack when I was tasked with building out their Manager's Dashboard, which
            was their version of enterprise software in order to help configure, maintain and check in on their locations.
            Along with building out their first web product, I helped with engineering culture and setting standards
            for building out the team. This included developing coding standards, improving project processes and 
            advocating for the well-being of the engineers throughout my time there.
            I ended up maintaining three different products - A web version of the mobile app, the Manager's Dashboard, and 
            a shared component library in order to achieve design parity between the products.
        </DescriptionParagraph>  
    );
}

function Cloud4WiDescription() {
    return (
        <DescriptionParagraph>
            This was my first job as an engineer. I started off as an intern and worked my way into a full-time position.
            I was the only front-end engineer at my company and I was separated from the rest of the engineering team,
            so I had to learn how to learn and coach myself through the various stages of conception, planning, building and 
            production. 
            I prototyped many tools and mostly worked on an enterprise dashboard, producing data visualizations and tools
            to configure locations. I worked directly with the CTO and VP of Product on most days, and touched almost every part of
            the front-end on the enterprise dashboard. Over the course of 3 years I did a full re-design of the dashboard, and built
            out various features for integrations along with numerous data visualizations.
        </DescriptionParagraph>  
    );
}

function Experience() {
    const [ activeCompany, setActiveCompany ] = useState('shyft');
    
    function changeActiveCompany(e) {
        setActiveCompany(e.target.value);
    }

    return (
        <>  
            <h1 style={{ fontSize: '32px', fontFamily: 'Roboto, sans-serif' }}>Experience</h1>
            <ExperienceContainer>
                <CompanyColumn>
                    <h2>Companies</h2>

                    <Company 
                        active={activeCompany === SHYFT} 
                        value={SHYFT}
                        onMouseEnter={changeActiveCompany}
                        onClick={changeActiveCompany}
                    >
                        Shyft
                    </Company>

                    <Company 
                        active={activeCompany === CLOUD4WI}
                        value={CLOUD4WI}
                        onMouseEnter={changeActiveCompany}
                        onClick={changeActiveCompany}
                    >
                        Cloud4Wi
                    </Company>
                </CompanyColumn>

                <DescriptionColumn>
                    <DescriptionSection>
                        {activeCompany === SHYFT ? <ShyftDescription /> : <Cloud4WiDescription />}
                    </DescriptionSection>
                </DescriptionColumn>
            </ExperienceContainer>
        </>
    );
}

export default Experience;