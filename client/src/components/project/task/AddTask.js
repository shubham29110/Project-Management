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
    maxWidth:1000,
    minWidth:900
},
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  },
});
class AddTask extends React.Component {
  state = {
    open: false,
    title:'',
    errors:{},
   
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = (e) => {
    debugger
    e.preventDefault();
    if(this.state.title){
      const user = {
          title: this.state.title,
      }
      console.log("user",user)
}
this.setState({ open: false });
}
    
  

  handleChange=(e)=>{
    this.setState({title:e.target.value})
  }

  render() {
    debugger
    const{classes,auth,project}=this.props
    const {errors,title} =this.state
if(this.props.project) console.log(auth.user.id,'+++++',project)
    return (
      <div  >
  
      <Grid item xs={12}  onClick={this.handleClickOpen}>
      <TextField
          name="title"
          label="title for task"
          style={{ margin: 8,width:900 }}
          placeholder="Enter Title for Task"
          value={title}
          helperText="Please provide title detail about task!"
          margin="normal"
          variant="outlined"
          className={classnames( {'is-invalid': errors.title })}
          multiline={true}
          rows={4}
          rowsMax={8}
          onChange={this.handleChange}
          InputLabelProps={{shrink: true,}}
        />
      </Grid>
      {project.hasOwnProperty('projectName')&&
        <Dialog classes={{ paper: classes.dialogPaper }}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">{project.projectName}</DialogTitle>
          <DialogContent>
          <TextField
          name="title"
          label="title for task"
          style={{ margin: 8,width:900 }}
          placeholder="Enter Title for Task"
          value={title}
          helperText="Please provide title detail about task!"
          
          margin="normal"
          variant="outlined"
          className={classnames( {'is-invalid': errors.title })}
          multiline={true}
          rows={4}
          rowsMax={8}
          onChange={this.handleChange}
          InputLabelProps={{shrink: true,}}
        />

              
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      }
      </div>
    );
  }
}

export default  withStyles(styles)(AddTask);