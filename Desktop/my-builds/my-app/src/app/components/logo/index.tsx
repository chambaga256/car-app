import React from'react'
import  styled from'styled-components'
import CarLogoImg from"../../../assets/images/car-logo.png"
import tw from"twin.macro"
 const LogoContainer =styled.div`
${tw`
flex
items-center


`};
 `

 const LogoText=styled.div`
 ${tw`
 text-xl
 md:text-2xl
 font-bold
 text-black
 m-1
 
 `}` 
 const Image= styled.div`
 ${tw`
 
h-0 md:h-9
 `};
 width:auto;
 img{
     weight:auto;
     height:100%;
 }

 `

export function Logo(){
    return<LogoContainer>
        <Image>
     <img src={CarLogoImg}/>

        </Image>
        <LogoText>
            Your Car
        </LogoText>
    </LogoContainer>

}