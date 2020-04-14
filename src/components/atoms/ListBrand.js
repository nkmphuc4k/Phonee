import React, { Component } from 'react'
import {Brand} from './brand';
import "./brand.css";
import {LISTitem} from "./ListClickedItem";

var brands = [
    {
        id:1,
        image:"//cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_16.jpg",
        link:"#",
        name: "Iphone",
    },
    {
        id:2,
        image:"//cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg",
        name: "Samsung",
    },

    {
        id:3,
        image:"//cdn.tgdd.vn/Brand/1/OPPO42-b_9.png",
        name: "Oppo",
    },
    {
        id:4,
        image:"//cdn.tgdd.vn/Brand/1/Xiaomi42-b_45.jpg",
        name: "Xiaomi",
    }
];



export class ListBrand extends Component{

        constructor(props){
          super(props);
          this.state={
            items:[],
            currentitems:{ text:'',      key:''}     
          }
          this.themitems = this.themitems.bind(this);
          this.deleteItem = this.deleteItem.bind(this);
          this.updateState = this.updateState.bind(this);
        }
      

    updateState(prop){
  
      this.setState(
        { currentitems:{
            text: prop,
            key: Date.now()
          }             },
        () => {this.themitems(prop);}
      );
}

      themitems = (prop)=>{        
      // this.updateState(prop);
      const newItem = this.state.currentitems;  console.log(this.state)
      
      if(newItem.text!=="") {const newitems=[...this.state.items, newItem];
      this.setState({items:newitems})
      }
      }
      
      deleteItem(key){
        const filteredItems= this.state.items.filter(item=> item.key!==key);
        this.setState({items:filteredItems})
      }      


    render(){
        let listlogo = brands.map(
            (brand, index)=>{
                 return <a href={brand.link} onClick={()=> this.updateState(brand.name)}> <Brand key={brand.index} image={brand.image}/></a>
            }
        )
  return (
    <div className="filter">
    <div className="manu manu14">
    {listlogo}
    </div>
    <div className="fl price">
              <label>Chọn mức giá: </label>
              <a href="#" onClick={()=>{ alert("text");}}> Dưới 2 triệu </a>
              <a href="#"> Từ 2 - 4 triệu</a>
              <a href="#">Từ 4 - 7 triệu</a>
              <a href="#">Từ 7 - 13 triệu</a>
              <a href="#">Trên 13 triệu</a>
    </div>
 

  <LISTitem items={this.state.items}
    deleteItem={this.deleteItem}    
    />
  </div> 

    
  )
    }
}