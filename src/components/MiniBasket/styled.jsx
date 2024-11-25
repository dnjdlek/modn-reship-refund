import styled from 'styled-components';
import Link from 'next/link';


export const BasketWrapper = styled.div`
    width: 100%;
    padding: 0 50px;
    padding-top: 50px;
    @media ${props => props.theme.mobile}{
        padding: 32px 20px 30px 20px;
    }
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    color: #111;
    margin-bottom: 30px;
    @media ${props => props.theme.mobile}{
        font-weight: bold;
        font-size: 17px;
        line-height: 29px;
        color: #111;
        margin-bottom: 16px;
    }
`;

export const NullPage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    img {
        width: 60px;
        height: 60px;
        margin-bottom: 10px;
    }
    span {
        display: block;
        font-size: 15px;
        line-height: 1.73;
        letter-spacing: -0.45px;
        color: #111;
    }
`;


export const BasketItemWrapper = styled.div`
    border-top: 1px solid #ebebeb;
    height:calc(100vh - 269px);
    overflow-y:auto;
    > div:last-child {
        border: none;
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;    
    border-bottom: 1px solid #fafafa;
    @media ${props => props.theme.mobile}{
        position: relative;
        padding: 30px 0;
    }
`;

export const ProductImage = styled.div`
    width: 120px;
    height: 90px;
    background: #fbfbfb;
    border-radius: 2px;
    background-image: url(${props => props.url ? props.url : ''});
    background-repeat: no-repeat;
    background-size: 85% auto;
    background-position: center center;
    @media ${props => props.theme.mobile}{
        width: 34%;
        height: 120px;
    }
`;

export const ProductDetail = styled.div`
    width: calc(100% - 144px);
    padding-left: 20px;
    @media ${props => props.theme.mobile}{
        width: 66%;
        padding-left: 20px;
    }
`;

export const Name = styled.div`
    span {
        font-size: 13px;
        line-height: 19px;
        color: #111111;
    }
    margin-top: 5px;
    @media ${props => props.theme.mobile}{
        display: table;
        width: 100%;
        height: 56px;
        span {
            display: table-cell;
            vertical-align: bottom;
            height: 56px;
            font-size: 14px;
            line-height: 1.35;
        }
        margin-top: -16px;
    }
`;

export const Price = styled.div`
    font-size: 13px;
    line-height: 19px;
    font-weight: 500;
    color: #111;
    @media ${props => props.theme.mobile}{
        font-size: 15px;
        line-height: 26px;
        margin-top: 5px;
    }
`;

export const Amount = styled.div`
    display: flex;
    margin-top: 15px;
    img {
        width: 19px;
        height: 19px;
        cursor: pointer;
    }
    span {
        display: inline-block;
        margin: 0 8px;
        font-size: 13px;
        line-height: 19px;
        color: #111;
    }
    @media ${props => props.theme.mobile}{
        margin-top: 15px;
        img {
            width: 23px;
            height: 23px;
        }
        span {
            font-size: 14px;
            font-weight: 500;
            line-height: 26px;
            vertical-align: bottom;
        }

    }
`;

export const Delete = styled.div`
    position: relative;
    width: 24px;
    span {
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 13px;
        line-height: 19px;
        color: #111;
        text-decoration: underline;
        cursor: pointer;
    }
    @media ${props => props.theme.mobile}{
        position: absolute;
        width: 30px;
        bottom: 51px;
        right: 0;
        span {
            font-size: 16px;
            line-height: 23px;
        }
    }
`;

export const Payment = styled.div`
    padding: 30px 50px 30px 50px;
    border-top: 1px solid #ebebeb;
    background:#fff;
    width: 100%;
    position:absolute;
    bottom: 0;
    @media ${props => props.theme.mobile}{
        padding: 30px 20px 20px 30px;
    }
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom:  20px;
    span {
        font-size: 15px;
        font-weight: bold;
        line-height: 22px;
        color: #111;
    }
    .color {
        color: #E55F74;
    }
    @media ${props => props.theme.mobile}{
        span {
            font-size: 15px;
            line-height: 26px;
        }
    }
`;

export const ConfirmButton = styled(Link)`
    display: inline-block;
    width: 100%;
    height: 56px;
    font-weight: 500;
    font-size: 15px;
    line-height: 54px;
    color: #FFFFFF;
    text-align: center;
    background-color: #E55F74;
    border: 1px solid #E55F74;
    border-radius: 200px;
    cursor: pointer;
    transition: 0.2s;
    @media ${props => props.theme.mobile}{
        height: 45px;
        line-height: 44px;
        font-size: 15px;
    }
`;