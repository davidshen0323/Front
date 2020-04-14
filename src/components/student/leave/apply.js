import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import Applytable from './applytable';
import { makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


/*------------ STYLE ------------*/
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
}));
/*------------------------------*/




export default function Apply() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <AssignmentOutlinedIcon />
      </IconButton>

      <Dialog onClose={handleClose}  open={open} variant="inline">
        <DialogTitle  onClose={handleClose}>
          <br/>
        </DialogTitle>

        <DialogContent dividers>
          <Applytable/>
        </DialogContent>

        <DialogActions>
        <Button onClick={handleClose} color="secondary" autoFous>關閉視窗</Button>
        <Button  
        // disabled={inputs===2 ? false : true} 
        onClick={handleClose}
        color="primary" autoFous>確認送出</Button>
        </DialogActions>

      </Dialog>
      {/* <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle className={classes.form} onClose={handleClose}/>
        <Applytable/>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            確定
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
