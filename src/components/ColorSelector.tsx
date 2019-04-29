import React,{ Component } from 'react';
import { themeSettings } from "../initial.config.json";

export class ColorSelector extends Component{

    state = {
        iconColor: themeSettings.colors.icon,
        primaryColor: themeSettings.colors.primary,
        secondaryColor: themeSettings.colors.secondary
    }

    private changeColor = (newColor: string, colorSetting:string ) => {
        
    }

    render(){
        const { iconColor, primaryColor, secondaryColor } = this.state;
        return (
            <div>
                <fieldset>
                    <label>Icon</label>
                    <input
                        type="color"
                        id="iconColor"
                        value={iconColor}
                    />
                </fieldset>
            </div>
        )
    }

}