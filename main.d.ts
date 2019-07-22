import * as React from 'react';

declare module 'react-switchable' {

    export interface IItemProps extends React.HTMLAttributes<HTMLInputElement>{
        value: string;
        disable?: boolean;
        active?: boolean;
        children: any;
    }

    export class Item extends React.Component<IItemProps, {}> { }

    export interface ISwitchProps extends React.HTMLAttributes<HTMLDivElement>{
        disable?: boolean;
        arrowSelection?: boolean;
        onItemSelected?: (value: string) => void;
        onValueChanged?: (value: string) => void;
        children: JSX.Element[];
        name: string
    }

    export default class Switch extends React.Component<ISwitchProps, {activeIndex: number}> { }
}
