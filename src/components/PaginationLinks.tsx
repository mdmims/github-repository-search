import Button from "@mui/material/Button";
import {ButtonGroup} from "@mui/material";

interface KeyValueMap<T> {
  [key: string]: T;
}

interface LinksProps {
  links: KeyValueMap<string>;
  callback: (arg: string) => void;
}

const PaginationLinks = ({links, callback}: LinksProps) => {
  const prevPage = links?.prev
  const nextPage = links?.next
  const lastPage = links?.last

  return (
      <ButtonGroup sx={{display: "flex", flexDirection: "row", alignItems: "center", mb: "3 rem"}}>
        {prevPage && (
            <Button
                variant="contained"
                onClick={() => callback(prevPage)}
            >Previous Page
            </Button>
        )}
        {nextPage && (
            <Button
                variant="contained"
                onClick={() => callback(nextPage)}
            >Next Page
            </Button>
        )}
        {lastPage && (
            <Button
                variant="contained"
                onClick={() => callback(lastPage)}
            >Last Page
            </Button>
        )}
      </ButtonGroup>
  );
};

export default PaginationLinks;