import React from 'react';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  
  },
  dialogPaper: {
    maxHeight: 'none',
},
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
class TaskDialog extends React.Component {
  state = {
    open: false,
    discription:'',
    errors:{},
    comment:''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const{classes}=this.props
    const {discription,errors,comment} =this.state
    return (
      <div >
      <Button style={{width:'100%'}}>
      <Grid item xs={12}  onClick={this.handleClickOpen}>
         <Paper className={classes.paper}> Task Title</Paper>
      </Grid>
       </Button>
        <Dialog classes={{ paper: classes.dialogPaper }}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Task Title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
                name="discription"
                label="discription"
                style={{ margin: 8 }}
                placeholder="Enter brief discription for Task"
                value={discription}
                helperText="Please provide brief detail about task!"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classnames( {'is-invalid': errors.discription })}
                multiline={true}
                rows={4}
                rowsMax={8}
                InputLabelProps={{shrink: true,}}
              />

              <Typography textAlign="left" variant="h5" component="h6" >
                Add comment
               </Typography>

               <TextField
                name="comment"
                label="comment"
                style={{ margin: 8 }}
                placeholder="write a comment"
                value={comment}
                fullWidth
                margin="normal"
                variant="outlined"
                className={classnames( {'is-invalid': errors.discription })}
                multiline={true}
                rows={4}
                rowsMax={4}
                InputLabelProps={{shrink: true,}}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default  withStyles(styles)(TaskDialog);