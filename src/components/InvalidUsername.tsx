import {useNavigate} from "react-router-dom";
import EmptyState from "./EmptyState.tsx";
import {InvalidUserEmptyState} from "../types/emptyState.ts";


const InvalidUsername = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }
  const type = InvalidUserEmptyState;
  type.buttonHandler = handleGoBack


  return (
      <EmptyState {...type} />
  );
};

export default InvalidUsername;