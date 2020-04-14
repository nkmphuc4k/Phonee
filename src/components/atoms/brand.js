import React, { Component } from 'react'
import "./brand.css";

export class Brand extends Component{
    render(){
        return (
          <img src={this.props.image}/>
          )
    }
}

/*
 <div className="filter">
            <div className="manu manu14">
              <a href="/dtdd-apple-iphone?p=tu-2-4-trieu" data-id={80} className><img src="//cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_16.jpg" /></a>
              <a href="/dtdd-samsung?p=tu-2-4-trieu" data-id={2} className><img src="//cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg" /></a>
              <a href="/dtdd-oppo?p=tu-2-4-trieu" data-id={1971} className><img src="//cdn.tgdd.vn/Brand/1/OPPO42-b_9.png" /></a>
              <a href="/dtdd-xiaomi?p=tu-2-4-trieu" data-id={2235} className><img src="//cdn.tgdd.vn/Brand/1/Xiaomi42-b_45.jpg" /></a>
              <a href="/dtdd-vivo?p=tu-2-4-trieu" data-id={2236} className><img src="//cdn.tgdd.vn/Brand/1/Vivo42-b_50.jpg" /></a>
              <a href="/dtdd-realme?p=tu-2-4-trieu" data-id={17201} className><img src="//cdn.tgdd.vn/Brand/1/Realme42-b_37.png" /></a>
              <a href="/dtdd-vsmart?p=tu-2-4-trieu" data-id={17566} className><img src="//cdn.tgdd.vn/Brand/1/Vsmart42-b_40.png" /></a>
              <a href="/dtdd-nokia?p=tu-2-4-trieu" data-id={1} className><img src="//cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg" /></a>
              <a href="/dtdd-huawei?p=tu-2-4-trieu" data-id={104} className><img src="//cdn.tgdd.vn/Brand/1/Huawei42-b_30.jpg" /></a>
              <a href="/dtdd-mobell?p=tu-2-4-trieu" data-id={19} className><img src="//cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg" /></a>
              <a href="/dtdd-itel?p=tu-2-4-trieu" data-id={5332} className><img src="//cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg" /></a>
              <a href="/dtdd-coolpad?p=tu-2-4-trieu" data-id={2327} className><img src="//cdn.tgdd.vn/Brand/1/Coolpad42-b_33.png" /></a>
              <a href="/dtdd-blackberry?p=tu-2-4-trieu" data-id={100} className><img src="//cdn.tgdd.vn/Brand/1/BlackBerry42-b_38.png" /></a>
              <a href="/dtdd-masstel?p=tu-2-4-trieu" data-id={4832} className><img src="//cdn.tgdd.vn/Brand/1/Masstel42-b_0.png" /></a>
            </div>
            <div className="fl price">
              <label>Chọn mức giá: </label>
              <a href="/dtdd?p=duoi-2-trieu" className=" " data-id={7}>
                Dưới 2 triệu
              </a>
              <a href="/dtdd?p=tu-2-4-trieu" className="check " data-id={9}>
                Từ 2 - 4 triệu
              </a>
              <a href="/dtdd?p=tu-4-7-trieu" className=" " data-id={289}>
                Từ 4 - 7 triệu
              </a>
              <a href="/dtdd?p=tu-7-13-trieu" className=" " data-id={562}>
                Từ 7 - 13 triệu
              </a>
              <a href="/dtdd?p=tren-13-trieu" className=" " data-id={253}>
                Trên 13 triệu
              </a>
            </div>
   
          </div>
          */