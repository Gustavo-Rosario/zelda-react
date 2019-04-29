
import './App.css';
import React, { Component } from 'react';
import SideMenu from './components/SideMenu';
import styled from 'styled-components';
import Desktop from './components/Desktop';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faGamepad, faHome, faFilm, faMusic, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { IOption, IPropIcon } from './interfaces';
import IconOption from './components/IconOption';
import firebase from 'firebase';
import appConfig from "./app.config.json";


const config = appConfig.firebase;

// const appWp = require("../src/wallpapers/"+setting.getSetting("themeSettings.wallpaper"));

library.add(faGamepad);

function stuc<T>(El: string = 'div') {
    type PropType = T & { children?: JSX.Element[], className?: string }
    return (props: PropType) => <div className={props.className}>{props.children}</div>
}

const Container = stuc<{image?: string}>()

const ImgBg = styled(Container)`
    background-image: url(${props => props.image || "https://ctl.s6img.com/society6/img/jLuG0p7p4t3yMSqXnybqxZFOeso/w_700/shams/swatch/~artwork,fw_6105,fh_3500,fy_-411,iw_6105,ih_4322/s6-original-art-uploads/society6/uploads/misc/c0d5427cc18f4013b6f8237de0c404a2/~~/legend-of-zelda-pattern471786-shams.jpg" });
    background-size: cover;
    background-color: ${themeSettings.colors.secondary };
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: -1;
`;

class App extends React.Component<any, any>{

    constructor(props: any){
        super(props)
    }

    optionsMenu: IOption[] = [
        {
            title: "Background"
        },{
            title: "Colors",
            bgColor: "rebeccapurple",
            content: (<IconOption icon={faGamepad}/>)
        }
    ];

    optionsMenuDesktop: IPropIcon[] = [
        {
            icon: faHome
        },
        {
            icon: faCamera
        },
        {
            icon: faFilm
        },
        {
            icon: faMusic
        },
        {
            icon: faGamepad
        },
        {
            icon: faPowerOff
        }

    ];

    render (){
        return ( 
            <div className="App" >
                {/* Fundo */}
                <ImgBg image={appWp} />
                {/* Menu lateral */}
                <SideMenu options={this.optionsMenu}/>
                {/* Area de trabalaho */}
                <Desktop options={this.optionsMenuDesktop}/> 
            </div>
        );
    }
}

export default App;
