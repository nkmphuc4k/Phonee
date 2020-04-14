import React, { Component } from 'react'

export function LISTitem(props)
{
const items= props.items;
const listiems = items.map(item=>
    {return <button>{item.text}</button>})
return(<div>{listiems}</div>)

}
export default LISTitem;