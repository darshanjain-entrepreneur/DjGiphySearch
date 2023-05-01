import React from 'react'
import styled, { useTheme } from 'styled-components'


const Button = ({name , icon , onClick}) => {

    const theme = useTheme();
  return (
   <Buttonstyled theme={theme}>
     <span>
        {icon}
        {name}

     </span>
     <span>
        
     </span>
   </Buttonstyled>
  )
}

const Buttonstyled = styled.button`
 background-color: transparent;
    color: ${(props) => props.theme.colorWhite};
    font-weight: 600;
    cursor: pointer;   
    font-family: inherit;
    font-size: 1.3rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;  
    transition: all .3s ease-in-out;
    span:first-child{
        position: relative;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .7rem 2rem;
        border-radius: 1rem;
        gap: 1rem;
        background: ${(props) => props.theme.colorBg1};
    }
    span:last-child{
        position: absolute;
        top: 50%;
        left: -.3rem;
        transform: translateY(-50%);
        width: calc(100% + .6rem);
        height: calc(100% + .6rem);
        background: linear-gradient(to right,
            ${(props) => props.theme.colorPurple},
            ${(props) => props.theme.colorGreen}
        );
        background-size: 400% 200%;
        border-radius: 1rem;
        z-index: 1;
        animation: gradient 5s ease-in-out infinite;
        @keyframes gradient{
            0%{
                background-position: 0% 50%;
            }
            50%{
                background-position: 100% 50%;
            }
            100%{
                background-position: 0% 50%;
            }
        }
    }
    &:hover span:first-child{
        transition: all .3s ease-in-out;
        color: #ff0059;
    }
    &:hover span:last-child{
        animation-play-state: paused;
    }

`

export default Button