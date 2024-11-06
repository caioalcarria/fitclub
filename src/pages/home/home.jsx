import { HomeStyle } from "./homeStyle"
import { BookClass } from "./sections/bookClass/bookClass";
import { Dashboard } from "./sections/dashboard/dashboard";
import { Explore } from "./sections/explore/explore";
import { Join } from "./sections/Join/join";
import { Pricing } from "./sections/pricing/pricing";
import { Reports } from "./sections/reports/reports";

export const Home = () => {
    return (
      <HomeStyle>
        <Dashboard/>
        <Explore/>
        <BookClass/>
        <Join/>
        <Pricing/>
        <Reports/>


      </HomeStyle>
    );
}