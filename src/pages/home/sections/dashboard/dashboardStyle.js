import styled from "styled-components";

export const  DashboardStyle = styled.section`
        width:100vw ;
        display: flex;
        justify-content: center;
        height: 70vh;
        margin-top: 50px;
        @media (max-width: 1250px) {
            margin-top: 20px;
        }


        .container{

            width: 70%;
            position: relative;
            display: flex;
            align-items: center;
            height: 80%;


            
            .content{
                position: relative;
                width: 50%;
                min-width: 550px;
                height: 70%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                @media (max-width: 1250px) {
                    width: auto;
                    min-width: auto;
                }


                .preTittle{
                    font-weight: bolder;
                    color: var(--contrast-color);
                    font-size: medium;
                }

                .tittle{
                    font-size: 90px;
                    font-family: "Poppins", ;
                    font-weight: 900;
                    font-style: normal;
                    letter-spacing: -5px;
                    -webkit-text-stroke: 3px white; 

                @media (max-width: 1250px) {

                        
                }
                @media (max-width: 600px) {

                     font-size: 20vw;
                }

                    span{
                        color: transparent;
                        -webkit-text-stroke: 1px white; 
                    }
                    
                }
                .subtittle{
                    font-size: large;
                    font-weight: 500;
                    @media (max-width: 600px) {

                    font-size: small;
                    }
                }
                .button{
                    background-color: var(--contrast-color);
                    margin-top: 20px;
                    min-height:48px;
                    width: 140px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    transition: background-color 0.2s ease;
                    cursor: pointer;
                }
                .button:hover{
                    background-color: var(--contrast-hover-color);
            
                }

            }

            .bg{
                position: absolute;
                right: 150px;
                bottom: 0;
                text-align: right;
                opacity: 20%;
                width: 100%;

                span{
                    
                    font-size: 400px;
                    font-weight: 100;
                    color: var(--contrast-color) ;
                }
                h1{
                    position: relative;
                    left: -180px;
                    font-size: 150px;
                    line-height: 0.8; 
                    right: 100px;
                    -webkit-text-stroke: 5px ;
                }

                @media (max-width: 1500px) {
                    right: 0;
                    h1{
                        left: -100px;
                    }
                }
                @media (max-width: 1250px) {
                    display: none;
                }


            }
            .bgImg{
                position: absolute;
                right: 155px;
                bottom: 0;
                img{
                    height: 500px;
                }

                @media (max-width: 1500px) {
                    right: 5px;
                }
                @media (max-width: 1250px) {
                    display: none;
                }


            }
        }
`