import {Avatar, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {openInNewTab} from "../utils/openInNewTab.ts";

interface DetailsProps {
  avatarUrl: string | undefined;
  userName: string | undefined;
  url: string | undefined;
}

const UserDetails = ({avatarUrl, userName, url}: DetailsProps) => {
  return (
      <Grid
          container
          spacing={2}
          sx={{
            alignItems: 'center', justifyContent: 'center', mb: '15px', '&:hover': {
              cursor: 'pointer'
            }
          }}
          onClick={() => openInNewTab(url ?? '')}
      >
        <Avatar
            alt="Username"
            src={avatarUrl}
            sx={{width: 75, height: 75, mr: '10px'}}
        />
        <Typography
            variant="h3"
            component="h3"
        >
          {userName}
        </Typography>
      </Grid>
  );
};

export default UserDetails;