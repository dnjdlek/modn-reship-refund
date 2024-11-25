const ADD_CART = 'cart/ADD_CART';
const CLEAR_CART = 'cart/CLEAR_CART';
const UPDATE_QTY_CART = 'cart/UPDATE_QTY_CART';
const REMOVE_CART = 'cart/REMOVE_CART';
const EARN_POINT = 'cart/EARN_POINT';
const USE_COUPON = 'cart/USE_COUPON';
const REMOVE_COUPON = 'cart/REMOVE_COUPON';

export const AddToCart = (
  product_ID,
  option_ID,
  option_name,
  option_size,
  product_image,
  qty,
  product_name,
  category_name,
  price,
  free_gift,
  is_point = 0,
) => ({
  type: ADD_CART,
  payload: {
    product_ID: product_ID,
    option_ID: option_ID,
    option_name: option_name,
    option_size: option_size,
    product_image: product_image,
    qty: qty,
    product_name: product_name,
    category_name: category_name,
    price: price,
    free_gift: free_gift,
    is_point: is_point,
  },
});
export const UpdateQtyCart = (key, type) => ({
  type: UPDATE_QTY_CART,
  payload: {
    key,
    type,
  },
});
export const RemoveCart = (key) => ({
  type: REMOVE_CART,
  payload: {
    key,
  },
});
export const EarnPoint = (point) => ({
  type: EARN_POINT,
  payload: {
    point,
  },
});
export const UseCoupon = (coupon_code, coupon_amount) => ({
  type: USE_COUPON,
  payload: {
    coupon_code,
    coupon_amount,
  },
});
export const RemoveCoupon = () => ({
  type: REMOVE_COUPON,
  payload: {},
});
export const ClearCart = () => ({
  type: CLEAR_CART,
  payload: {},
});

const initState = {
  cart_items: [],
  shipping: 0,
  point: 0,
  coupon: '',
  coupon_total: 0,
  subtotal: 0,
  total: 0,
  is_point_order: 0,
};

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return Object.assign({}, initState);
    case ADD_CART:
      var draft = state;
      if (action.payload.is_point) {
        draft = initState; // 장바구니 비움
        draft.cart_items = [action.payload];
        draft.subtotal = 0;
        draft.is_point_order = 1;
      } else {
        if (draft.is_point_order) {
          // 포인트 상품이 담겨있는경우 삭제
          draft = initState; // 비우기
          draft.cart_items = [action.payload];
          draft.subtotal = 0;
          draft.is_point_order = 0;
          console.log('action.payload', action.payload);
        } else {
          draft.cart_items = [...draft.cart_items, action.payload];
        }
      }
      draft.point = 0;

      // 가격 업데이트
      draft.subtotal += action.payload.price * action.payload.qty;
      draft.coupon = ''; // 장바구니 변경시 쿠폰 해제
      draft.coupon_total = 0; // 장바구니 변경시 쿠폰 해제
      if (draft.point > draft.subtotal) {
        draft.point = draft.subtotal;
      }
      draft.total = draft.subtotal - draft.point - draft.coupon_total;
      // if (draft.is_point_order) {
      //     return Object.assign({}, state, { draft });
      // }
      // console.log('state', state);
      // console.log('draft', draft);
      return Object.assign({}, state, draft);
    case UPDATE_QTY_CART:
      var draft = state;
      if (action.payload.type == '+') {
        draft.cart_items[action.payload.key].qty = ++draft.cart_items[
          action.payload.key
        ].qty;
        draft.subtotal += parseInt(draft.cart_items[action.payload.key].price);
      } else {
        if (draft.cart_items[action.payload.key].qty >= 2) {
          draft.cart_items[action.payload.key].qty = --draft.cart_items[
            action.payload.key
          ].qty;
          draft.subtotal -= parseInt(
            draft.cart_items[action.payload.key].price,
          );
        }
      }
      draft.coupon = ''; // 장바구니 변경시 쿠폰 해제
      draft.coupon_total = 0; // 장바구니 변경시 쿠폰 해제
      if (draft.point > draft.subtotal) {
        draft.point = draft.subtotal;
      }
      // draft.point = 0; // 장바구니 변경시 포인트 사용 해제
      draft.total = draft.subtotal - draft.point - draft.coupon_total;
      return Object.assign({}, state, { draft });
    case REMOVE_CART:
      var draft = state;
      draft.subtotal -=
        draft.cart_items[action.payload.key].price *
        draft.cart_items[action.payload.key].qty;
      draft.cart_items.splice(action.payload.key, 1);
      if (draft.point > draft.subtotal) {
        draft.point = draft.subtotal;
      }
      draft.point = 0; // 장바구니 변경시 포인트 해제
      draft.coupon = ''; // 장바구니 변경시 쿠폰 해제
      draft.coupon_total = 0; // 장바구니 변경시 쿠폰 해제
      draft.total = draft.subtotal - draft.point - draft.coupon_total;
      return Object.assign({}, state, { draft });
    case EARN_POINT:
      var draft = state;
      draft.point = action.payload.point;
      if (draft.point > draft.subtotal) {
        draft.point = draft.subtotal;
      }
      if (!draft.point) {
        draft.point = 0;
      }
      console.log(draft.point);
      draft.total = draft.subtotal - draft.point - draft.coupon_total;
      return Object.assign({}, state, { draft });
    case USE_COUPON:
      var draft = state;
      draft.coupon_total = action.payload.coupon_amount;
      draft.coupon = action.payload.coupon_code;
      draft.total = draft.subtotal - draft.point - draft.coupon_total;
      return Object.assign({}, state, { draft });
    case REMOVE_COUPON:
      var draft = state;
      draft.coupon_total = 0;
      draft.coupon = '';
      draft.total = draft.subtotal - draft.point - draft.coupon_total;
      return Object.assign({}, state, { draft });
    default:
      return state;
  }
};
export default CartReducer;
