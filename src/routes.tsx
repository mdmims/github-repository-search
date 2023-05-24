import {Route, Routes} from "react-router-dom";
import PageNotFound from "./components/PageNotFound.tsx";
import pageRoutes from "./utils/pageRoutes";
import Home from "./pages/Home.tsx";


const AppRoutes = () => {
  return (
      <Routes>
        <Route path={pageRoutes.Home.path} element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
  );
};

export {AppRoutes};
