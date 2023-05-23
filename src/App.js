import SideNavBar from "./component/headers/SideNavBar";
import {Route, Routes} from "react-router-dom";
import HomePage from "./component/HomePage";
import Categories from "./component/Categories";
import CreateCategory from "./component/CreateCategory";

function App() {

  return (
    <div>
        <SideNavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="categories" element={<Categories/>}/>
            <Route path="/createCategory" element={<CreateCategory/>}/>
        </Routes>
    </div>
  );
}

export default App;
