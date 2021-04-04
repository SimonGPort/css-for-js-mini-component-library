import React, {useState} from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import { Search, AtSign, ChevronDown } from 'react-feather';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

let Wrapper=styled.div`
width:fit-content;
position:relative;
`

let ContainerSelect=styled.select`
appearance: none;
padding:12px 52px 12px 16px;
display:flex;
align-items:center;
border-radius: 8px;
background: rgba(128, 128, 128, 0.15);
height: 43px;
width:fit-content;
color:#656565;
&:hover {
  color:black;
}
`

let Icon=styled(ChevronDown)`
position: absolute;
    top: 10px;
    right: 11px;
`

let TextContainer=styled.option`
margin-right:25px;
`


let ArrowContainer=styled.div`
top:0px;
right:0px;
position:absolute;
color: #656565;
`

  return (
    <>
<select>
  {children}
</select>


<Wrapper>
<Icon />
    <ContainerSelect >
{children}
    </ContainerSelect>
    </Wrapper>
    </>
  );
};

export default Select;
