import React, {useState} from 'react';

import SidePopup from '../SidePopup';
import {useSelector, useDispatch} from 'react-redux';
import {RemoveCart, UpdateQtyCart} from '../../store/cart';
import {
    BasketWrapper,
    Title,
    BasketItemWrapper,
    ItemInfo,
    ProductImage,
    ProductDetail,
    Name,
    Price,
    Amount,
    Delete,
    Payment,
    Total,
    ConfirmButton,
    NullPage
} from './styled';

const Description = ({show, onClose}) => {
    const Dispatch = useDispatch();
    const cart_items = useSelector(state=>state.cart.cart_items);
    const cart = useSelector(state=>state.cart);

    const plusCouont = (e) => {
        Dispatch(UpdateQtyCart(e.currentTarget.dataset.key, '+'));
    };
    const minusCouont = (e) => {
        Dispatch(UpdateQtyCart(e.currentTarget.dataset.key, '-'));
    }

    const RemoveCartItem = (e) => {
        const key = e.currentTarget.dataset.key;
        Dispatch(RemoveCart(key));
        console.log(key);
    }

    return (
        <SidePopup show={show} onClose={onClose}>
            <BasketWrapper>
                <Title>
                    장바구니
                </Title>
                
                 <BasketItemWrapper>
                     {cart_items.length ? cart_items.map((item, key) => (
                         <ItemInfo>
                            <ProductImage url={item.product_image} />
                            <ProductDetail>
                                <Name>
                                    <span>
                                        {item.product_name}
                                    </span>
                                </Name>
                                <Price>
                                    {parseInt(item.price).toLocaleString('en')}원
                                </Price>
                                <Amount>
                                    <div>
                                        <img onClick={minusCouont} data-key={key} src={ "/images/minus.png"} alt="" /> 
                                        <span>{item.qty}</span>
                                        <img onClick={plusCouont} data-key={key} src={ "/images/plus.png"} alt="" /> 
                                    </div>
                                </Amount>
                            </ProductDetail>
                            <Delete onClick={RemoveCartItem} data-key={key}>
                                <span>
                                    삭제
                                </span>
                            </Delete>
                        </ItemInfo>
                     )) : (
                        <NullPage>      
                            <img src={ "/images/mini_basket.png"} />
                            <span>고객님의 장바구니가 현재 비어있습니다.</span>
                        </NullPage>
                     )}
                    
                </BasketItemWrapper>
            </BasketWrapper>
            <Payment>
                <Total>
                    <span>총 결제금액</span>
                    <span className="color">{parseInt(cart.total).toLocaleString('en')}원</span>
                </Total>
                <ConfirmButton to="/basket">
                    장바구니 보기
                </ConfirmButton>
            </Payment>
        </SidePopup>
    );
};

export default Description;