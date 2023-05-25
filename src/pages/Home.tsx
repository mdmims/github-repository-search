import { useState } from 'react'
import {ButtonGroup, Skeleton, Stack, Grid} from "@mui/material";
import {useGetPopularRepositories} from "../hooks/useGetMostPopular.tsx";
import UserRepository from "../components/UserRepository.tsx";
import Button from "@mui/material/Button";
import HelpSearchModal from "../components/HelpSearchModal.tsx";

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('typescript')
  const { isLoading, data} = useGetPopularRepositories(selectedLanguage)
  const languageOptions = ["typescript", "javascript", "python", "golang"]

  const displaySkeleton = () => (
      new Array(5).map(item =>
          <Skeleton key={item} variant="rectangular" width={500} height={150} />
      )
  )

  const displayRepositories = () => {
    return (
        <>
          {data && data.map((repo, index) => (
              <UserRepository key={index} {...repo} />
          ))}
        </>
    )
  }

  const handleLanguageClick = (lang: string) => {
    setSelectedLanguage(lang)
  }

  const renderLanguageButtons = () => {
      return (
          <ButtonGroup sx={{display: "flex", flexDirection: "row", alignItems: "center", mb: "3 rem"}}>
            {languageOptions.map((option, index) => (
                <Button key={index} variant="contained" onClick={() => handleLanguageClick(option)}>{option}</Button>
            ))}
          </ButtonGroup>
      )
  }

  return (
      <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{mt: '2rem'}}
      >
        <HelpSearchModal />
        <h3>Most Popular ({selectedLanguage})</h3>
        {renderLanguageButtons()}
        {isLoading ? (
            displaySkeleton()

        ) : displayRepositories()

        }
      </Stack>
  );
};

export default Home;