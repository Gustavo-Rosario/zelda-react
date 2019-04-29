import React, { Component } from 'react'
import styled from 'styled-components';
import IconOption from './IconOption';
import { IPropIcon } from '../interfaces';


const DesktopMain = styled.main`
  flex-grow: 3;
  flex: 3 0px;
`;

const MainMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -5%;
  height: 100%;
  overflow: hidden;
`;

export default class Desktop extends Component<{ options: IPropIcon[] }, any> {

    renderOptions = () => {
        return this.props.options.map((opt,i)=> <IconOption key={i} icon={opt.icon} />)
    }

    render() {
        return (
            <DesktopMain>
                <MainMenu>
                    {this.renderOptions()}
                </MainMenu>
            </DesktopMain>
        )
    }
}
