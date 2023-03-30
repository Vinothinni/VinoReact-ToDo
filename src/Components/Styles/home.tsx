import { Nav } from "../../App";
import { useLocation } from "react-router-dom";

const Home = () =>{
   const location = useLocation();
   console.log(location);
   
    return (
    <>
      <Nav/>
      <h1>Home</h1>
    </>
   );
  }

  export default Home;