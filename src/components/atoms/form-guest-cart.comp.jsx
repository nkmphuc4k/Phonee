import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { selectGuest } from '../../redux/cart/selectors';
import { submitGuest } from '../../redux/cart/actions';

import { getProvinces, getDistricts, getWards } from './form-guest-cart.utils';
import {
  Container,
  Heading,
  Row,
  NoOptionMessage,
  MarginTop,
  RadioButton,
  TextInput,
} from './form-guest-cart.styled';

function FormGuestCart() {
  const dispatch = useDispatch();
  const cachedGuest = useSelector(selectGuest);

  // I use a lot of 'useState', then submit to redux when component is unmounted, instead of using redux directly, because it'll be verbose to create a lot of actions in redux
  const [gender, setGender] = useState(cachedGuest.gender);
  const [name, setName] = useState(cachedGuest.name);
  const [phone, setPhone] = useState(cachedGuest.phone);
  const [province, setProvince] = useState(cachedGuest.province);
  const [district, setDistrict] = useState(cachedGuest.district);
  const [ward, setWard] = useState(cachedGuest.ward);
  const [street, setStreet] = useState(cachedGuest.street);
  const [requirement, setRequirement] = useState(cachedGuest.requirement);

  useEffect(() => {
    return () =>
      dispatch(
        submitGuest({
          gender,
          name,
          phone,
          province,
          district,
          ward,
          street,
          requirement,
        }),
      );
  }, [dispatch, gender, name, phone, province, district, ward, street, requirement]);

  return (
    <Container>
      <Heading>Thông tin giao hàng:</Heading>
      <form onSubmit={() => console.log('submit')}>
        <div onChange={(e) => setGender(e.target.value)}>
          <RadioButton htmlFor="male">
            <input type="radio" name="gender" id="male" value="anh" required />
            <ion-icon name="radio-button-on" />
            <ion-icon name="radio-button-off" />
            Anh
          </RadioButton>
          <RadioButton htmlFor="female">
            <input type="radio" name="gender" id="female" value="chị" required />
            <ion-icon name="radio-button-on" />
            <ion-icon name="radio-button-off" />
            Chị
          </RadioButton>
        </div>
        <Row>
          <TextInput
            type="text"
            placeholder="Họ và tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            name="name"
          />
          <TextInput
            type="text"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            name="phone"
          />
        </Row>
        <MarginTop>Địa chỉ giao hàng:</MarginTop>
        <Row>
          <Select
            options={getProvinces()}
            value={province}
            placeholder="Chọn tỉnh thành"
            onChange={(payload) => {
              setProvince(payload);
              setDistrict(null); // reset district and ward when the selected province changes
              setWard(null);
            }}
            required
          />
          <Select
            options={getDistricts(province?.value)}
            value={district}
            placeholder="Chọn quận, huyện"
            noOptionsMessage={() => <NoOptionMessage>Bạn chưa chọn tỉnh thành</NoOptionMessage>}
            onChange={(payload) => {
              setDistrict(payload);
              setWard(null);
            }}
            required
          />
        </Row>
        <Row>
          <Select
            options={getWards(district?.value)}
            value={ward}
            placeholder="Chọn phường, xã"
            noOptionsMessage={() => <NoOptionMessage>Bạn chưa chọn quận, huyện</NoOptionMessage>}
            onChange={(payload) => setWard(payload)}
            required
          />
          <TextInput
            type="text"
            placeholder="Số nhà, tên đường"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
            name="street"
          />
        </Row>
        <Row>
          <TextInput
            style={{ gridColumn: '1/-1' }}
            type="text"
            placeholder="Yêu cầu khác (không bắt buộc)"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            name="requirement"
          />
        </Row>
      </form>
    </Container>
  );
}

export default FormGuestCart;
