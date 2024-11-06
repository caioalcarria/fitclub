import styled from "styled-components";

export const  JoinStyle = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
    .container{
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        position: relative;
        align-items: center;

        .top { 
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            .tittle{
                font-size: xx-large;
            }
            .subtittle{
                text-align: center;
                font-size: larger;

            }

        };
        .illustration{
            border-radius: 15px;
            width: 100%;
        }
        
    }
    
    .infos{
        background-color: var(--cards-hover-color);
        position: relative;
        top: -65px;
        height: 130px;
        width: 60%;
        border-radius: 15px;
        z-index: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media (max-width: 1250px) {
            top: auto;
            flex-direction: column;
            height: auto;
            padding: 25px 25px 25px 30px;
            gap: 30px;
            margin-top: 20px;
            width: 70%;
            align-items: baseline;

        }

        .info{
            width: 250px;
            height: 80%;
            display: flex;
            align-items: center;
            gap: 10px;
            @media (max-width: 1250px) {
                width: 80%;
            }
            

            svg{
                width: 25%;
                max-width: 50px;
                max-height: 50px;
                padding: 10px;
                background-color: var(--contrast-color);
                border-radius: 5px;
                color: var(--title-color);
            }
            .content{
                width: 75%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                h1{
                    font-size: large;
                }
                p{
                    font-size: small;
                }
            }
        }
    }

    
`