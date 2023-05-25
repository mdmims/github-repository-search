import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardContent} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {GithubRepo} from "../types/githubRepo.ts";
import {openInNewTab} from "../utils/openInNewTab.ts";

const UserRepository = ({name, description, stargazers_count, language, html_url}: Partial<GithubRepo>) => {

  return (
      <Card
          key={name}
          sx={{ width: 750, height: 150 }}
          onClick={() => openInNewTab(html_url ?? '')}
      >
        <CardActionArea>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <StarIcon /> {stargazers_count}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Language: {language}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default UserRepository;