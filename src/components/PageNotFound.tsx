import {useDocumentTitle} from "../hooks/useDocumentTitle.tsx";

const PageNotFound = () => {
  useDocumentTitle('Page Not Found')

  return (
      <div>
        Page Not Found
      </div>
  );
};

export default PageNotFound;