import { DashboardStyle } from "./dashboardStyle";

export const Dashboard = () => {
    return (
      <DashboardStyle>
        <div className="container">
          <div className="bg">
            <span>O</span>
            <h1>FITNESS</h1>
          </div>

          <div className="bgImg">
            <img src="/header.png" alt="" />
          </div>

          <div className="content">
            <h3 className="preTittle">BEST FITNESS IN THE TOWN</h3>

            <h1 className="tittle">
              <span>MAKE</span> YOUR <br /> BODY SHAPE
            </h1>

            <p className="subtittle">
              Unleash your potential and embark on a journey towards a stronger,
              fitter, and more confident you. Sign up for ‘Make Your Body Shape’
              now and witness the incredible transformation your body is capable
              oft
            </p>

            <div className="button">
              <h3>Get Started</h3>
            </div>
          </div>
        </div>
      </DashboardStyle>
    );
}