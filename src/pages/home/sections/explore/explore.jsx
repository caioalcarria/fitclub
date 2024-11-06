/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { ExploreStyle } from "./exploreStyle";

export const Explore = () => {
  let ulCarroselCard = useRef()

  const rigth = ()=>{
    ulCarroselCard.current.scrollLeft += 300
  }
  const left = ()=>{
    ulCarroselCard.current.scrollLeft -= 300
  }


  let arroySvg = <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

  const cards = ()=>{
    let arr1 = [1,2,3,4]
    return arr1.map((i)=>(
        
          <li key={i}>
          <div className="card">
  
  
            <div className="img">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 11.5H14.5L13 14.5L11 8.5L9.5 11.5H8.5M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.75009 14.4724 8.97129 18.311 10.948 20.0749C11.3114 20.3991 11.4931 20.5613 11.7058 20.6251C11.8905 20.6805 12.0958 20.6805 12.2805 20.6251C12.4932 20.5613 12.6749 20.3991 13.0383 20.0749C15.015 18.311 19.2362 14.4724 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div className="content">
                <h2 className="tittle">Physical Fitness</h2>
                <p className="description">It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.</p>
            </div>
  
            <div className="link">
                <h3>Join Now</h3>
                {arroySvg}
            </div>
  
          </div>
        </li>
        
    ))
  }
  return (
    <ExploreStyle>
        <div className="container">

          <div className="top">
            
            <h1 className="tittle">EXPLORE OUR PROGRAM</h1>

            <div className="arrows">

              <div onClick={()=>{left()}} className="preview arrow">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div onClick={()=>{rigth()}} className="next arrow">
                  {arroySvg}
              </div>

            </div>

          </div>







          <div className="cards">
            <ul ref={ulCarroselCard} >
                      <li>
                    <div className="card">
            
            
                      <div className="img">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 11.5H14.5L13 14.5L11 8.5L9.5 11.5H8.5M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.75009 14.4724 8.97129 18.311 10.948 20.0749C11.3114 20.3991 11.4931 20.5613 11.7058 20.6251C11.8905 20.6805 12.0958 20.6805 12.2805 20.6251C12.4932 20.5613 12.6749 20.3991 13.0383 20.0749C15.015 18.311 19.2362 14.4724 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </div>
                      <div className="content">
                          <h2 className="tittle">Physical Fitness</h2>
                          <p className="description">It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.</p>
                      </div>
            
                      <div className="link">
                          <h3>Join Now</h3>
                          {arroySvg}
                      </div>
            
                    </div>
                  </li>

                  <li>
                    <div className="card">
            
            
                      <div className="img">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.9 11.4444V14.2222M6.9 11.4444V4.77778C6.9 3.8573 7.66112 3.11111 8.6 3.11111C9.53888 3.11111 10.3 3.8573 10.3 4.77778M6.9 11.4444C6.9 10.524 6.13888 9.77778 5.2 9.77778C4.26112 9.77778 3.5 10.524 3.5 11.4444V13.6667C3.5 18.269 7.30558 22 12 22C16.6944 22 20.5 18.269 20.5 13.6667V8.11111C20.5 7.19064 19.7389 6.44444 18.8 6.44444C17.8611 6.44444 17.1 7.19064 17.1 8.11111M10.3 4.77778V10.8889M10.3 4.77778V3.66667C10.3 2.74619 11.0611 2 12 2C12.9389 2 13.7 2.74619 13.7 3.66667V4.77778M13.7 4.77778V10.8889M13.7 4.77778C13.7 3.8573 14.4611 3.11111 15.4 3.11111C16.3389 3.11111 17.1 3.8573 17.1 4.77778V8.11111M17.1 8.11111V10.8889" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </div>
                      <div className="content">
                          <h2 className="tittle">Strength</h2>
                          <p className="description">IEmbrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.</p>
                      </div>
            
                      <div className="link">
                          <h3>Join Now</h3>
                          {arroySvg}
                      </div>
            
                    </div>
                  </li>

                  <li>
                    <div className="card">
            
            
                      <div className="img">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </div>
                      <div className="content">
                          <h2 className="tittle">Fat Lose</h2>
                          <p className="description">Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.</p>
                      </div>
            
                      <div className="link">
                          <h3>Join Now</h3>
                          {arroySvg}
                      </div>
            
                    </div>
                  </li>

                  <li>
                    <div className="card">
            
            
                      <div className="img">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7.9966C3.83599 7.99236 3.7169 7.98287 3.60982 7.96157C2.81644 7.80376 2.19624 7.18356 2.03843 6.39018C2 6.19698 2 5.96466 2 5.5C2 5.03534 2 4.80302 2.03843 4.60982C2.19624 3.81644 2.81644 3.19624 3.60982 3.03843C3.80302 3 4.03534 3 4.5 3H19.5C19.9647 3 20.197 3 20.3902 3.03843C21.1836 3.19624 21.8038 3.81644 21.9616 4.60982C22 4.80302 22 5.03534 22 5.5C22 5.96466 22 6.19698 21.9616 6.39018C21.8038 7.18356 21.1836 7.80376 20.3902 7.96157C20.2831 7.98287 20.164 7.99236 20 7.9966M10 13H14M4 8H20V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </div>
                      <div className="content">
                          <h2 className="tittle">Weight Gain</h2>
                          <p className="description">Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.</p>
                      </div>
            
                      <div className="link">
                          <h3>Join Now</h3>
                          {arroySvg}
                      </div>
            
                    </div>
                  </li>
            </ul>
          </div>
        </div>
      </ExploreStyle>
    );
}
