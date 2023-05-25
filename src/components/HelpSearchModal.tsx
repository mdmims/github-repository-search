import Button from "@mui/material/Button";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from 'react'
import {Link} from "react-router-dom";


const HelpSearchModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <Box sx={{mb: '2rem'}}>
        <Button onClick={handleOpen}>Searching for Repositories?</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 50
          }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Searching for User repositories
            </Typography>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
              Type in the desired Username in the browser URL to view their respective GitHub repositories, ie:
              <br/>
              <Link to="/webpack" style={{ textDecoration: 'none', color: 'white' }}>http://localhost:8080/webpack</Link>
            </Typography>
          </Box>
        </Modal>
      </Box>
  );
};

export default HelpSearchModal;