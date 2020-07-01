import styled from 'styled-components';
import { shade } from "polished";


export const Card = styled.div`

width: 200px;
min-height: 200px;
height:100%;
border-radius: 10px ;
background: ${props => props.theme.colors.primary};
color:  ${props => props.theme.colors.textPrimary};
display:flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
font-family: sans-serif;
margin: 8px;
padding: 8px;
:hover {
		background: ${props => shade(0.1, props.theme.colors.primary)}; 
		cursor: pointer;
	};

`;