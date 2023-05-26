import { useState, Fragment } from "react";
import { ButtonGroup, Skeleton, Stack } from "@mui/material";
import { useGetPopularRepositories } from "../hooks/useGetMostPopular.tsx";
import UserRepository from "../components/UserRepository.tsx";
import Button from "@mui/material/Button";
import HelpSearchModal from "../components/HelpSearchModal.tsx";
import { Language } from "@mui/icons-material";

type Language = "typescript" | "javascript" | "python" | "golang";

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>("typescript");
  const { isLoading, data } = useGetPopularRepositories(selectedLanguage);
  const languageOptions: Language[] = [
    "typescript",
    "javascript",
    "python",
    "golang",
  ];

  const displaySkeleton = (): JSX.Element[] =>
    new Array(5).map((item) => (
      <Skeleton key={item} variant="rectangular" width={500} height={150} />
    ));

  const displayRepositories = (): JSX.Element => {
    return (
      <Fragment>
        {data &&
          data.map((repo, index) => <UserRepository key={index} {...repo} />)}
      </Fragment>
    );
  };

  const handleLanguageClick = (lang: Language) => {
    setSelectedLanguage(lang);
  };

  const renderLanguageButtons = () => {
    return (
      <ButtonGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: "3 rem",
        }}
      >
        {languageOptions.map((option, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleLanguageClick(option)}
            sx={{
              backgroundColor:
                selectedLanguage === option ? "#335789" : "#B8B8B8",
              "&:hover": {
                backgroundColor: "#505050",
              },
            }}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
    );
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0.5}
      sx={{ mt: "2rem" }}
    >
      <HelpSearchModal />
      <h3>Most popular repositories by Language</h3>
      {renderLanguageButtons()}
      {isLoading ? displaySkeleton() : displayRepositories()}
    </Stack>
  );
};

export default Home;
