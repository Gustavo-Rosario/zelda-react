import React,{ Component } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { IPropIcon } from "../interfaces";
import { themeSettings } from "../initial.config.json";

const IconBody = styled.div`
    margin: 10px 0;
    padding: 0 10px;
    overflow: auto;
    position: relative;
    cursor: pointer;

    & svg{
        opacity: 0.7;
        transition: 0.2s;
    }

    & svg:hover {
        opacity: 1;
        transform: scale(1.2);
    }
`;

export default class IconOption  extends Component<IPropIcon>{
    render(){
        const { icon, color, size } = this.props;
        return(
            <IconBody >
                <FontAwesomeIcon icon={icon} color={color || themeSettings.colors.icon} size={size || "4x"}></FontAwesomeIcon>
            </IconBody>
        ) 
    }
}