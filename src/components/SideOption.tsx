import React,{ Component } from "react";
import styled from 'styled-components';
import { IOption } from "../interfaces";

const Square = styled.section`
    border: 1px solid rgba(255, 255, 255, .3);
    margin: 10px 0;
    padding: 0 10px;
    overflow: auto;
    position: relative;

    background-color: ${props => props.color || "rebeccapurple" };
    /* transition: 0.25s; */
    cursor: pointer;

    &:hover{
        background-color: red;
    }
`;

const OpConfig = styled.div`
    padding: 10px 0;
    overflow:auto;
    min-height:100px;
    max-height:300px;

    display: ${props => props.hidden ? "none" : "block" };
`;


export default class SideOption  extends Component<IOption>{

    state = {
        isOpen: true
    }

    toggleContent = ()=>{
        const { isOpen } = this.state;
        this.setState({isOpen: !isOpen});
    }

    render(){
        const { isOpen } = this.state;
        const { bgColor, title } = this.props; 
        return(
            <Square color={bgColor} onClick={this.toggleContent}>
                <h2>{ title }</h2>
                <OpConfig hidden={isOpen}>
                    Content
                </OpConfig>
            </Square>
       ) 
    }
}