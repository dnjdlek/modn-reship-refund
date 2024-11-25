import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
    RowWrap,
    ColWrap,
    ResponsiveBr
} from './styled';        

export const MediaQuery = useMediaQuery;
export const mobileQuery = {
    query: '(max-width: 770px)'
};
  
export const Row = (props) => {
    return (
        <RowWrap type={props.type} >{props.children}</RowWrap>     
    )
}
export const Col = (props) => {
    return (
        <ColWrap flex={props.flex} >{props.children}</ColWrap>
    )
}
export const Br = (props) => {
    return (
        <ResponsiveBr dnjdlek={props.dnjdlek}></ResponsiveBr>
    )
}