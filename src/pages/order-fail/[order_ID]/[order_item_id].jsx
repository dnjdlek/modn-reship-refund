import React from 'react';
import OrderFail from '../../../views/OrderFail';
import { FailOrderGetPost } from '../../../api/order';

const Index = (props) => {
  console.log(props);
  return <OrderFail item={props.order} />;
};

export async function getServerSideProps(router) {
  const res = await FailOrderGetPost({
    order_ID: router.query.order_ID,
    order_item_id: router.query.order_item_id,
  });

  // Pass data to the page via props
  return {
    props: {
      order: res.data.body,
    },
  };
}

export default Index;
