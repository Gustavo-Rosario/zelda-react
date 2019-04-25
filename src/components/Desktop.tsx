import React, { Component } from 'react'
import styled from 'styled-components';
import IconOption from './IconOption';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';


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

export default class Desktop extends Component {

    renderOptions = () => {
        return Array.from("qwert").map((a,i)=> <IconOption key={i} icon={faGamepad} />)
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
