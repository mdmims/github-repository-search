import {Stack, Skeleton} from "@mui/material";
import {useGetUserRepositories} from "../hooks/useGetRepositories.tsx";
import {useGetUser} from "../hooks/useGetUser.tsx";
import UserDetails from "../components/UserDetails.tsx";
import {useParams} from "react-router-dom";
import UserRepository from "../components/UserRepository.tsx";
import {useState, Fragment} from "react";

const Home = () => {
  const [resultsPerPage, setResultsPerPage] = useState(10)
  const params = useParams();
  const user = params?.userName ?? ''
  const { isLoading, data} = useGetUserRepositories(user , 5)
  const { data: userData } = useGetUser(user)

  const displaySkeleton = () => (
      new Array(resultsPerPage).map(item =>
          <Skeleton key={item} variant="rectangular" width={500} height={150} />
      )
  )

  const displayRepositories = () => {
    return (
        <Fragment>
          <UserDetails userName={userData?.login} avatarUrl={userData?.avatar_url} url={userData?.html_url}/>
          {data?.data.map((repo, index) => (
              <UserRepository key={index} {...repo} />
          ))
          }
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

export default Home;