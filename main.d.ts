import * as React from 'react';

declare module 'react-switchable' {

    export interface IOverlayProps extends React.HTMLAttributes<HTMLSpanElement>{
        selectedIndex: number;
        totalItems: number;
    }

    export class Overlay extends React.Component<IOverlayProps, {}> { }

    export interface IItemProps extends React.HTMLAttributes<HTMLInputElement>{
        value: string;
        children: any;
        default?: boolean;
        disable?: boolean;
        active?: boolean;
    }

    export class Item extends React.Component<IItemProps, {}> { }

    export interface ISwitchProps extends React.HTMLAttributes<HTMLDivElement>{
        name: string
        children: JSX.Element[];
        customOverlay: JSX.Element;
        disable?: boolean;
        arrowSelection?: boolean;
        onItemSelected?: (value: string) => void;
        onItemChanged?: (value: string) => void;
    }

    export default class Switch extends React.Component<ISwitchProps, {activeIndex: number}> { }
}
