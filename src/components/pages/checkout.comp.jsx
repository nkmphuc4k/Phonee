import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectGuest, selectTotalMoney, selectItems } from '../../redux/cart/selectors';
import { emptyCart } from '../../redux/cart/actions';
import { formatVnd } from '../../utils/helpers';
import routes from '../../utils/routes';

import CartItem from '../atoms/cart-item.comp';
import {
  PageContainer,
  InfoHeading,
  SuccessCheckout,
  Red,
  Blue,
  Hr,
  InfoList,
  NormalLink,
  LinkToHome,
} from './checkout.styled';

function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const guest = useSelector(selectGuest);
  const cartItems = useSelector(selectItems);
  const totalMoney = useSelector(selectTotalMoney);

  if (!cartItems.length) {
    history.push(routes.home.path);
  }

  return (
    <PageContainer>
      <SuccessCheckout>
        <ion-icon name="checkmark"></ion-icon> Đặt hàng thành công
      </SuccessCheckout>

      <p>
        Cảm ơn{' '}
        <b>
          {guest.gender} {guest.name.split(/\s/).pop()}{' '}
        </b>{' '}
        đã cho Phonee cơ hội được phục vụ. Trong 10 phút, nhân viên Phonee sẽ{' '}
        <b>gửi tin nhắn hoặc gọi điện</b> xác nhận giao hàng cho {guest.gender}.
      </p>

      <InfoHeading>Thông tin đặt hàng:</InfoHeading>
      <InfoList>
        <li>
          {' '}
          Người nhận:{' '}
          <b>
            {' '}
            {guest.name}, {guest.phone}{' '}
          </b>{' '}
        </li>
        <li>
          Địa chỉ nhận hàng:{' '}
          <b>
            {guest.street}, {guest.ward?.label}, {guest.district?.label}, {guest.province?.label}
          </b>
        </li>
        <li>
          Tổng tiền:{' '}
          <b>
            <Red> {formatVnd(totalMoney)} </Red>
          </b>
        </li>
      </InfoList>

      <NormalLink
        onClick={() => {
          if (window.confirm('Bạn có chắc muốn hủy đơn hàng')) {
            dispatch(emptyCart());
            history.push(routes.home.path);
          }
        }}
      >
        Hủy đơn hàng
      </NormalLink>
      <p>
        Khi cần hỗ trợ vui lòng gọi{' '}
        <b>
          <Blue>1900.0000</Blue>
        </b>
      </p>

      <InfoHeading>Sản phẩm đã mua:</InfoHeading>
      {cartItems.map(({ product, amount }) => (
        <CartItem key={product.id} product={product} amount={amount} fixed />
      ))}

      <Hr />

      <LinkToHome to={routes.home.path}>Về trang chủ</LinkToHome>
    </PageContainer>
  );
}

export default Checkout;
