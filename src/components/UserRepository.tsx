import Typography from "@mui/material/Typography";
import {Box, Card, CardActionArea, CardContent} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {GithubRepo} from "../types/githubRepo.ts";
import {openInNewTab} from "../utils/openInNewTab.ts";
import {useDocumentTitle} from "../hooks/useDocumentTitle.tsx";

const UserRepository = ({name, description, stargazers_count, language, html_url}: Partial<GithubRepo>) => {
  useDocumentTitle(`${name}`)
  return (
      <Card
          key={name}
          sx={{ width: 800, height: 170 }}
          onClick={() => openInNewTab(html_url ?? '')}
      >
        <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="text.primary" gutterBottom>
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" component="span">
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <StarIcon /> {stargazers_count}
              </Box>
            </Typography>
          </Box>

          <Typography sx={{ mb: 6 }}  color="text.secondary">
            {description}
          </Typography>
          <Typography color="#335789">
            {language}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default UserRepository;