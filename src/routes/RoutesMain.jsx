import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';


export const RoutesMain = () => {
        return(
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
        )
}