import SearchBar from "../components/SearchBar.tsx";
import {Stack, Paper, Skeleton, Avatar} from "@mui/material";
import {useGetUserRepositories} from "../hooks/useGetRepositories.tsx";
import {useGetUser} from "../hooks/useGetUser.tsx";
import UserDetails from "../components/UserDetails.tsx";
import {useParams} from "react-router-dom";
import UserRepository from "../components/UserRepository.tsx";
import {useState} from "react";

const Home = () => {
  const [resultsPerPage, setResultsPerPage] = useState(10)
  const params = useParams();
  const user = params?.userName
  const { isLoading, isError, data} = useGetUserRepositories(user, 5)
  const { data: userData } = useGetUser(user)

  const displaySkeleton = () => (
      new Array(resultsPerPage).map(item =>
          <Skeleton key={item} variant="rectangular" width={500} height={150} />
      )
  )

  const displayRepositories = () => (data?.data.map((repo, index) =>
      <UserRepository key={index} {...repo} />))

  return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0.5}
        sx={{mt: '5rem'}}
      >
        <UserDetails userName={userData?.login} avatarUrl={userData?.avatar_url} url={userData?.html_url}/>
        {isLoading ? (
            displaySkeleton()

        ) : displayRepositories()

        }
      </Stack>
  );
};

export default Home;