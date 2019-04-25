
import './App.css';
import React, { Component } from 'react';
import SideMenu from './components/SideMenu';
import wp from './wallpapers/zelda.pattern.wp.jpg';
import styled from 'styled-components';
import Desktop from './components/Desktop';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { IOption } from './interfaces';
import config from "./initial.config.json";

library.add(faStroopwafel,faGamepad)

function stuc<T>(El: string = 'div') {
    type PropType = T & { children?: JSX.Element[], className?: string }
    return (props: PropType) => <div className={props.className}>{props.children}</div>
}

const Container = stuc<{image?: string}>()

const ImgBg = styled(Container)`
    background-image: url(${props => props.image || "https://ctl.s6img.com/society6/img/jLuG0p7p4t3yMSqXnybqxZFOeso/w_700/shams/swatch/~artwork,fw_6105,fh_3500,fy_-411,iw_6105,ih_4322/s6-original-art-uploads/society6/uploads/misc/c0d5427cc18f4013b6f8237de0c404a2/~~/legend-of-zelda-pattern471786-shams.jpg" });
    filter: opacity(.9);
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
            bgColor: "rebeccapurple"
        }
    ];

    render (){
        return ( 
            <div className="App" >
                {/* Fundo */}
                <ImgBg image={wp} />
                {/* Menu lateral */}
                <SideMenu options={this.optionsMenu}/>
                {/* Area de trabalaho */}
                <Desktop/> 
            </div>
        );
    }
}

export default App;
