import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;

  .container {
    width: 70%;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      img {
        width: 150px;
      }
    }

    nav {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      font-weight: 500;

      a {
        position: relative;
        display: inline-block;
        padding-bottom: 4px;
      }

      a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background: var(--contrast-color);
        transition: width 0.5s ease;
      }

      a:hover::after {
        width: 50%;
      }
    }

    .button {
      background-color: var(--contrast-color);
      height: 48px;
      width: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      transition: background-color 0.2s ease;
      cursor: pointer;
    }
    .button:hover {
      background-color: var(--contrast-hover-color);
    }
    .menuToogleIcon {
      display: none;
    }
    
    @media (max-width: 1250px) {
        .nav,
        .button {
            display: none;
      }
      .menuToogleIcon {
          display: block;
          width: 40px;
          color: var(--contrast-color);
        }
    } 
}
.menuToogle{
    display: none;
}
@media (max-width: 1250px) {
    .menuToogle {
      display: block;
      position: fixed;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(31, 33, 37, 0.8);;
      z-index: 2;
      

      .nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
          background-color: var(--cards-hover-color);
          width: 100%;
          height: 80px;
          border-bottom: 1px solid var(--cards-bg-color);
          display: flex;
          justify-content: center;
          align-items: center; 
          font-size: x-large;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }
        a:hover{
            background-color: var(--cards-bg-color);
        }
        svg{
          background-color: brown;
          width: 100%;
          height: 80px;
          color: var(--text-color);;
          display: flex;
          justify-content: center;
          align-items: center; 
          transition: background-color 0.2s ease;
          border-radius: 0  0 40px 40px;
        }
        svg:hover{
            background-color: #8b2323;
      }
    }
  }
}`