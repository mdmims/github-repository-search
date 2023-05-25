import {Stack, Skeleton} from "@mui/material";
import {useGetUserRepositories} from "../hooks/useGetRepositories.tsx";
import {useGetUser} from "../hooks/useGetUser.tsx";
import UserDetails from "../components/UserDetails.tsx";
import {useParams} from "react-router-dom";
import UserRepository from "../components/UserRepository.tsx";
import {useState, Fragment} from "react";
import {parseLinkHeader} from "../utils/parseGithubApiLink.ts";
import PaginationLinks from "../components/PaginationLinks.tsx";
import {useDocumentTitle} from "../hooks/useDocumentTitle.tsx";

const User = () => {
  const params = useParams();
  const user = params?.userName ?? ''
  const address = `https://api.github.com/users/${user}/repos?page=1&per_page=5`
  const [currentUrl, setCurrentUrl] = useState(address)
  useDocumentTitle(user)
  const { isLoading, data} = useGetUserRepositories(currentUrl)
  const { data: userData } = useGetUser(user)
  const parsedPaginationLinks = parseLinkHeader(data?.headers ?? '')

  const displaySkeleton = () => (
      new Array(5).map(item =>
          <Skeleton key={item} variant="rectangular" width={500} height={150} />
      )
  )

  const handlePageChange = (changedUrl: string) => {
    setCurrentUrl(changedUrl)
  }

  const displayRepositories = () => {
    return (
        <Fragment>
          <UserDetails userName={userData?.login} avatarUrl={userData?.avatar_url} url={userData?.html_url}/>
          {data?.data.map((repo, index) => (
              <UserRepository key={index} {...repo} />
          ))}
          <PaginationLinks links={parsedPaginationLinks} callback={handlePageChange}/>
        </Fragment>
    )
  }

  return (
      <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{mt: '5rem'}}
      >
        {isLoading && !userData ? (
            displaySkeleton()

        ) : displayRepositories()

        }
      </Stack>
  );
};

export default User;