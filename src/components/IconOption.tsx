import React,{ Component } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { IPropIcon } from "../interfaces";
import { themeSettings } from "../initial.config.json";

const IconBody = styled.div`
    padding: 0 10px;
    overflow: hidden;
    position: relative;
    transition: 0.2s;
    cursor: pointer;

    & svg{
        opacity: 0.6;
        transition: 0.2s;
    }

    &:hover {
        & svg {opacity: 1;}
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