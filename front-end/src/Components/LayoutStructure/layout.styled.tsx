import styled from "styled-components"

import { FaSearch, FaUserAlt, FaCartPlus } from 'react-icons/fa'

export const TitleHeard = styled.p`
    background-color: transparent;
    border:none;
    color: #fff;
    font-size: 18px;
    width: 50%;
    ::placeholder {
        color: rgba(255,255,255,0.8);
        font-size: 18px;
    }
    text-align: center;
    padding: 0;
    margin: 0;
    margin-top: 10px;
`
export const FaCartPlusIcon = styled(FaCartPlus)`
    color: rgba(255,255,255,0.8);
    font-size: 22px;
    
`
export const FaUSerAltIcon = styled(FaUserAlt)`
    font-size: 22px;
    color: rgba(255,255,255,0.8);
`
export const Button = styled.button`
    background: linear-gradient(130.14deg, rgba(1, 12, 26, 0.6) 7.18%, rgba(3, 39, 81, 0) 100%);
    border: none;
    height: 60px;
    width: 60px;
    margin-top: 10px;
    border-radius: 10px;
`
export const FaSearchIcon = styled(FaSearch)`
    font-size: 18px;
    color: rgba(255,255,255, 0.8);
`
export const Header = styled.header`
    margin-inline: 20px;
    margin-block-end: 20px;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0.1;
`
export const Main = styled.div`
    flex: 0.93;
    flex-direction: column;
    overflow-y:scroll ;
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
`
export const Footer = styled.footer`
    flex: 0.07;
    flex-direction: row;
    display: flex;
    box-shadow: 0px 18px 40px -1px rgba(255,255,255,0.8);
    background-color: #0058c423;
    div {
        align-items: center;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`