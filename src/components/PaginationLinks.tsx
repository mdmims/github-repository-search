import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

interface KeyValueMap<T> {
  [key: string]: T;
}

interface LinksProps {
  links: KeyValueMap<string>;
  callback: (arg: string) => void;
}

const PaginationLinks = ({ links, callback }: LinksProps) => {
  const prevPage = links?.prev;
  const nextPage = links?.next;
  const lastPage = links?.last;
  const firstPage = links?.first;

  return (
    <ButtonGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mb: "3 rem",
      }}
    >
      <Button
        variant="contained"
        onClick={() => callback(firstPage)}
        disabled={!firstPage}
      >
        <FirstPageIcon />
      </Button>

      <Button
        variant="contained"
        onClick={() => callback(prevPage)}
        disabled={!prevPage}
      >
        <NavigateBeforeIcon />
      </Button>

      <Button
        variant="contained"
        onClick={() => callback(nextPage)}
        disabled={!nextPage}
      >
        <NavigateNextIcon />
      </Button>

      <Button
        variant="contained"
        onClick={() => callback(lastPage)}
        disabled={!lastPage}
      >
        <LastPageIcon />
      </Button>
    </ButtonGroup>
  );
};

export default PaginationLinks;
