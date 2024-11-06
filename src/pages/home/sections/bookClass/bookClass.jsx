import { BookClassStyle } from "./bookClassStyle";

export const BookClass = () => {
    return (
      <BookClassStyle>
          <div className="container">
            <div className="images">
                  <img className="back" src="/public/class-1.jpg" alt="" />
                  <img className="front" src="/public/class-2.jpg" alt="" />
            </div>
            <div className="content">
                <div className="text">
                    <h1 className="tittle">THE CLASS YOU WILL <br/>GET HERE</h1>
                    <p className="description">Led by our team of expert and motivational instructors, “The Class You Will Get Here&quot; is a high-energy, results-driven session that combines a perfect blend of cardio, strength training, and functional exercises. Each class is carefully curated to keep you engaged and challenged, ensuring you never hit a plateau in your fitness endeavors.</p>
                </div>
                <div className="button">
                    <h3>Book A Class</h3>
                </div>
            </div>
          </div>
      </BookClassStyle>
    );
}