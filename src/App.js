import Gallery from "./pages/gallerypage/Gallery";
import Login from "./pages/login/Login";

//import Sortable from "sortablejs";
import Layout from "./components/layout/Layout";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";



function App() {
 const {user} = useContext(AppContext)
  return (
    <div>
      <Layout />
      { user ? <Gallery /> : <Login /> }
    </div>
  );
}

export default App;
