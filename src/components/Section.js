import React from 'react';
import Styled from 'styled-components';
import Wave from './wave';

const SectionGroup = Styled.div`
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media(max-width: 640px) {
        height: 820px;
    }
`

const SectionLogo = Styled.img`
    align-self: end;
    width: 120px;
    margin: 0 auto;
`

const SectionTitleGroup = Styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = Styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 720px) {
        font-size: 40px;
    }
`

const SectionText = Styled.p`
    color: white;
`

const WaveBottom = Styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`
const WaveTop = Styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop>
            <Wave />
        </WaveTop>
        <WaveBottom>
            <Wave />
        </WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle> {props.title} </SectionTitle>
            <SectionText> {props.text} </SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section;