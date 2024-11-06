import styled from "styled-components";

export const  ExploreStyle = styled.section`
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        margin-top: 100px;
        @media (max-width: 600px) {
            height: auto;
        }

        .container{
            width: 70%;
            display: flex;
            flex-direction: column;
            gap: 80px;

            .top{
                height: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                h1{
                    font-size: xx-large;
                }
                .arrows{
                    display: flex;
                    height: 100%;
                    align-items: center;
                    gap: 15px;
                    
                    .arrow{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 2px solid var(--title-color);
                        transition: border-color 0.2s ease;

                        svg{
                            color: var(--title-color);
                            width: 70%;
                        }
                    }
                    .arrow:hover{
                        border: 2px solid var(--contrast-color);
                    }
                    .arrow:hover svg{
                        color: var(--contrast-color);
                    }
                    @media (max-width: 600px) {
                        display: none;
                        width: auto;
                    }
                }
            }
            .cards{
                height: 325px;
                width: 100%;
            @media (max-width: 600px) {
                height: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
            }


                ul{
                    display: flex;
                    justify-content: space-between;
                    gap: 40px;
                    height: 100%;
                    max-width: 100%;
                    overflow-x: auto;
                    scroll-behavior: smooth; 
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    @media (max-width: 600px) {
                        overflow-x: unset;
                        flex-direction: column;
                        width: 100%;
                    }

                    li{

                        height: 100%;
                        @media (max-width: 600px) {
                        min-height: 300px;
                        width: 100%;
                        
                    }


                        .card{
                            width: 300px;
                            background-color: var(--cards-bg-color);
                            height: 100%;
                            border-radius: 5px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            padding: 0 10px 0 15px;
                            border: 1px solid transparent;
                            transition: background-color 0.2s ease;
                            transition: border-color 0.2s ease;
                            @media (max-width: 600px) {
                                width: 100%;
                            }




                            
                            .img{
                                width: 50px;
                                height: 50px;
                                background-color: var(--contrast-color);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 5px;

                                svg{
                                    width: 60%;
                                }

                            }
                            .content{
                                display: flex;
                                flex-direction: column;
                                gap: 10px;
                                .description{
                                    font-size: large;
                                    font-weight: 500;
                                }
                            }
                            .link{
                                display: flex;
                                align-items: center;
                                gap: 5px;
                                cursor: pointer;
                                transition: color 0.2s ease;
                                svg{
                                    width: 25px;
                                }
                                h3{
                                    transition: color 0.2s ease;
                                }
                            }
                            .link:hover{
                                color: var(--contrast-color);
                            }
                            .link:hover h3{
                                color: var(--contrast-color);
                            }



                        }

                        .card:hover{
                            border-color: var(--contrast-color);
                            background-color: var(--cards-hover-color);
                        }


                    }
                }
                ul::-webkit-scrollbar {
                    display: none;
                }
                
            }

        }
`