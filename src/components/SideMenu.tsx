/// <reference path="../interfaces.d.ts" />

import * as React from "react";
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



export default class SideMenu extends React.Component<IPropsSideMenu>{

    state = {
        hideMenu: true
    }

    renderOptions = () => {
        return this.props.options.map((opt,i) => (
            <SideOption key={"opt"+i} title={opt.title} bgColor={opt.bgColor} />
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