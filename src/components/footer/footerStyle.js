import styled from "styled-components";

export const  FooterStyle = styled.footer`
    height: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 950px) {
            margin-top: 50px;
            margin-bottom: 50px;
            height: auto;
           }



    .container{
        max-height: 100%;
        display: flex;
        flex-direction: row;
        width: 70%;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 950px) {
            flex-direction: column;
            max-height: none;
            height: auto;
           }
        



        .card{
            width: 30%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-right: 30px;

            @media (max-width: 950px) {
                width: 100%;
           }

            .logo{
                width: 200px;
            }
            img{
                font-weight: 600;
                color: var(--text-color);
            }

            .socialMedia{
                width: 150px;
                display: flex;
                justify-content: space-between;

                .icon{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 1px solid var(--contrast-color); /* 10px de largura, estilo sólido, cor preta */
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg{
                        width: 20px;
                        fill: var(--contrast-color);
                    }
                }
            }
        }




















        .links{

            width: 60%;

            display: flex;
            justify-content: space-between;

            @media (max-width: 950px) {
                margin-top: 50px;
                flex-direction: column;
                width: 100%;
                gap: 40px;
                align-items: ;
           }

            .linkSection{
                display: flex;
                flex-direction: column;
                gap: 20px;

                h1{
                    font-size: x-large;
                    margin-bottom: 10px;
                }
                
                a{
                font-weight: 600;
                color: var(--text-color);
                }

            }


        }
    }
`