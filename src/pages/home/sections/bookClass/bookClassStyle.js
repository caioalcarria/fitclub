import styled from "styled-components";

export const  BookClassStyle = styled.section`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    margin-top: 150px;
    @media (max-width: 1250px) {
            height: auto;
        }
    
    .container{
        width: 70%;
        display: flex;
        height: 100%;

        @media (max-width: 1250px) {
            flex-direction: column;
            gap: 40vw;
            align-items: center;
        }

        .images{
            width: 50%;
            position: relative;
            @media (max-width: 1250px) {
                width: 100%;
                position: relative;
                .back{
                    position: static;
                    
                }
                .front{
                    position: static;
                }
        }

            .back{
                position: absolute;
                width: 90%;
                top: 0;
                right: 0;
                border-radius: 10px;
            }
            .front{
                position: absolute;
                z-index: 1;
                width: 45%;
                top: 45%;
                border-radius: 10px;
            }
        }
        .content{
            width: 50%;
            display: flex;
            flex-direction: column;
            padding: 50px 30px 0 50px;
            @media (max-width: 1250px) {
                width: 100%;
                padding: 50px 0px 0 0px;
            }
            .text{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
                
                .tittle{
                    font-size: xx-large;
                    line-height: 1.3; 

                }
                .description{
                    font-size: 18px;
                }

            }
            .button{
                    background-color: var(--contrast-color);
                    height:48px;
                    width: 140px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    margin-top: 60px;
                    transition: background-color 0.2s ease;
                    cursor: pointer;
                    h3{
                        font-size: 14px;
                    }
                }
                .button:hover {
                    background-color: var(--contrast-hover-color);
                }
        }
    }

`