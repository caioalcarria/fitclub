import styled from "styled-components";

export const  ReportsStyle = styled.section`
        width: 100vw;
        height: 500px;
        background-color: var(--cards-hover-color);
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .container{
            width: 50%;
            height: 70%;
            display: flex;
            position: relative;
            @media (max-width: 900px) {
                width: 70%;
                height: 65%;


               }


            .icon{
                position: relative;
                margin-right: 30px;
                svg{
                    width: 60px;
                    margin-top: 60px;
                    color: red;
                    fill: var(--contrast-color);
                    opacity: 50%;
                }
                @media (max-width: 900px) {
                display: none;

               }

            }
            .report{
                width: 90%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                @media (max-width: 900px) {
                flex-direction: column-reverse;
                width: 110%;
                    .content{
                        width: 100%;
                        
                        
                    }
               }


                .content{
                    height: 60%;
                    width: 85%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    h1{
                        font-size: large;
                        font-weight: 900;

                    }
                    p{
                        
                    }
                    .stars{
                        display: flex;
                        gap: 3px;
                        margin-top: 10px;
                        svg{
                            width: 20px;
                            fill: var(--contrast-color);
                        }
                    }

                }
                .client{
                    height: 70px;
                    width: 250px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    img{
                        height: 100%;
                        border-radius: 50px;
                    }
                    .memberInfo{
                        h2{
                            font-size: large;
                            font-weight: 900;
                        }
                    }
                }
            }



            .arrows{
                display: flex;
                height: 100%;
                align-items: end;
                gap: 10px;
                position: absolute;
                z-index: 1;
                bottom: 0;
                right: 0;

                @media (max-width: 900px) {
                
                    bottom: 105%;
                    right:auto ;


               }
                
                .arrow{
                    svg{
                        color: var(--contrast-color);
                        width: 30px;
                    }
                }
                    }
        }
        




`