import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Component } from "react";
import { JSXElement } from "@babel/types";

/**
 * Interface for SideMenu properties 
 */
interface IPropsSideMenu{
    options: IOption[]
}

interface IOption{
    title: string,
    bgColor?: string,
    icon?: string,
    content?: (Element | Component | JSXElement | JSX.Element )
}

interface IPropIcon{
    icon: IconProp,
    color?: string,
    size?: "xs" | "lg" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | undefined
}
