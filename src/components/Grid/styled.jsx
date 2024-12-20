import styled from 'styled-components';

export const RowWrap = styled.div`
    display:flex;
    flex-direction: row;
    margin: 0 0;
    padding: 0 0;
    max-width: auto;
`;
export const ColWrap = styled.div`
    padding: 0 0;
    flex: ${props => props.flex || "1"};
`;

export const ResponsiveBr = styled.span`
    display: block;
    @media ${props => props.theme.mobile} {
        display: inline;
    }
`;