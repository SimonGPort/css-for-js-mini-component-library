import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

let Container = styled.div`
display:flex;
align-items:center;
width:${props => { return (props.width + "px") }};
padding:4px;
height:max-content;
border-bottom:2px solid #000000;
color: ${COLORS.gray700}
&:hover {
  color:black;
}
`
let Logo=styled(Icon)`
margin-right:${props=>{
if(props.sizeInput==="small"){return ("15px")}
if(props.sizeInput==="large")
    {return ("25px")}
}}
`
const Input=styled.input`

width: ${props=>{
  let logoSize=0
  if(props.size==='small'){
    logoSize=10.6+15
  }
  if(props.size==='large'){
    logoSize=16+25
  }
let newWidth=props.width-logoSize
return newWidth+"px"
}
};
outline:none;
border:none;
height: ${
  props=>{
    if(props.size==='small'){
      return "16px"
    }
    if(props.size==='small'){
      return "21px"
    }
  }
}
`


const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {


let sizeLogo={
  'small':10.6,
  'large':16
}



  return <Container width={width} >
    <Logo
      id={icon}
      strokeWidth={1}
      size={sizeLogo[size]}
      sizeInput={size}
    />
    <Input placeholder={placeholder} size={size} width={width}/>
    
    </Container >;
};

export default IconInput;
