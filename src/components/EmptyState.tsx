import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {EmptyStateProps} from "../types/emptyState.ts";

const EmptyState = (props: EmptyStateProps) => {

  return (
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
        <Card sx={{maxWidth: 500, justifyContent: 'center'}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.heading}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small" color="primary" sx={{justifyContent: "center"}} onClick={props?.buttonHandler} >
              {props.buttonText}
            </Button>
          </CardActions>
        </Card>
      </div>
  );
};

export default EmptyState;