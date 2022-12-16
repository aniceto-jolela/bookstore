import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Pagamento</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"  marginBottom={2}>
          Dados de pagamento
          </Typography>
          
          <Typography variant="h6" fontSize={14}>produtos : <Typography fontSize={14} component="span" color="#ae2929" > 1286 </Typography>  </Typography>
            <Typography variant="h6" fontSize={14}>Itens : <Typography fontSize={14} component="span" color="#ae2929" > 86 </Typography> </Typography>
            <Typography variant="h6" fontSize={14}>Preços : <Typography fontSize={14} component="span" color="#ae2929" > 63286 </Typography> </Typography>
            <Typography variant="h6" marginTop={1} marginBottom={2} fontSize={14}>E-mail : <Typography fontSize={14} component="span" color="#ae2929" > anicetojosejolelaj@gmail.com </Typography> </Typography>
        
            <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SendIcon />} size="small">
                Comprar
            </Button>
            </Stack>
        </Box>
      </Modal>
    </div>
  );
}