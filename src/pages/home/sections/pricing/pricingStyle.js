import styled from "styled-components";

export const  PricingStyle = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 200px;
    margin-bottom: 200px;
    .container{
        width: 70%;
        display: flex;
        flex-direction: column;
        height: auto;
        justify-content: space-between;
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
                text-align: center;
            }
            .subtittle{
                text-align: center;
                font-size: larger;

            }

        };

        .plans{
            width: 100%;
            height: 525px;
            display: flex;
            gap: 40px;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
            border: 1px solid transparent;
            transition: background-color 0.2s ease;
            transition: border-color 0.2s ease;
            @media (max-width: 1250px) {
                flex-direction: column;
                height: auto;
                margin-top: 35px;

            }
            .plan{
                height: 100%;
                min-width: 350px;
                background-color: var(--cards-hover-color);
                border-radius: 10px;
                padding: 40px 30px;
                justify-self: end;
                display: flex;
                flex-direction: column;
                gap: 20px;
                @media (max-width: 1250px) {


            }

                h2{
                    font-size: large;
                }

                .price{
                    width: 100%;
                    padding-bottom: 10px;
                    border-bottom: 2px solid var(--title-color);
                    h1{
                        font-size: xx-large;
                        font-weight: 900;
                    }
                }
                .itens{
                    width: 100;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    li{
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        height: 25px;

                        svg{
                            width: 15px;
                            color: var(--contrast-color);
                        }
                        p{
                            font-size: small;
                            font-weight: bold;
                            color: var(--title-color);
                        }
                    }
                }
                .button{
                    width: 100%;
                    border: 2px solid  var(--contrast-color);
                    border-radius: 5px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: auto;
                    h3{
                        color: var(--contrast-color);
                    }
                }
            }
            .plan:hover{
                            border-color: var(--contrast-color);
                            background-color: var(--cards-hover-color);
            }
        }

    }     
`