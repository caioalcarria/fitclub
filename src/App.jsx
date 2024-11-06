import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { RoutesMain } from "./routes/RoutesMain"



export const App = () =>{
  return (
    <>
      <Header/>
      <RoutesMain/>
      <Footer/>
    </>
  )
}