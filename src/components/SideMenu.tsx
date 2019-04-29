/// <reference path="../interfaces.d.ts" />

import React, { Component } from "react";
import styled from 'styled-components';
import SideOption from "./SideOption";
import { IPropsSideMenu } from "../interfaces";
import { themeSettings } from "../initial.config.json";
import IconOption from "./IconOption";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SideContainer = styled.main`
    display: flex;
    flex: 1 0 0;
    transition: all .75s ease;
    margin-left: ${({ hidden }) => hidden ? "-18%" : "0" };
`;

const ConfigIcon = styled.div`
    transition: 1s;
    margin-top: 1rem;
    & svg:hover{
        transform: rotate(90deg);
    }

`;

const MainBody = styled.main`
    /* left: -290px; */
    background-color: ${ themeSettings.colors.primary };
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;

`;

export default class SideMenu extends Component<IPropsSideMenu>{

    state = {
        hideMenu: true
    }

    renderOptions = () => {
        return this.props.options.map(({title, bgColor, content},i) => (
            <SideOption key={"opt"+i} title={title} bgColor={bgColor} content={content} />
        ));
    }

    handleConfigClick = () => {
        const { hideMenu } = this.state;
        this.setState({ hideMenu: !hideMenu });
    }

    render(){
        const { hideMenu } = this.state;
        return (
            <SideContainer hidden={hideMenu}>
                <MainBody>
                    <h2>
                        Configuration
                    </h2>
                    <p>Change system interface</p>
                    { this.renderOptions() }            
                </MainBody>
                <ConfigIcon onClick={this.handleConfigClick}>
                    <IconOption icon={faCog} />
                </ConfigIcon>
            </SideContainer>
        );
    }

}