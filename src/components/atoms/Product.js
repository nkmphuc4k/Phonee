import React, { Component } from 'react'

export class Product extends Component{
    render(){
        return (
            <div>        
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <a href="#" class="thumbnail">
                        <img src={this.props.image}/>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.price}</p>
                    </a>
                </div>
                
                </div>
          )
    }
}