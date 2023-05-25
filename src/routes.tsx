import {Route, Routes, useParams} from "react-router-dom";
import pageRoutes from "./utils/pageRoutes";
import Home from "./pages/Home.tsx";
import {validateGithubUsername} from "./utils/validateGithubUsername.ts";
import InvalidUsername from "./components/InvalidUsername.tsx";
import User from "./pages/User.tsx";


const ValidateUser = () => {
  const params = useParams();
  const user = params?.userName
  const isValidUsername = validateGithubUsername(user ?? '')

  if (!user) {
    return <Home />
  }

  if (!isValidUsername) {
    return <InvalidUsername />;
  }

  return <User />;
}


const AppRoutes = () => {
  return (
      <Routes>
        <Route path={pageRoutes.Home.path} element={<Home/>}/>
        <Route path={pageRoutes.User.path} element={<ValidateUser/>}/>
      </Routes>
  );
};

export {AppRoutes};
