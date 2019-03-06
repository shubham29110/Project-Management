import React,{Component} from 'react';
import io from "socket.io-client";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {  TextField } from '@material-ui/core';
import TaskDialog from '../project/TaskDialog';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class OpenTask extends Component {
  constructor(props) {
                        super(props);
                        this.state = {
                          username:'',
                          title: '',
                          dicription: '',
                          errors:{}
                        
                        }
                        this.socket = io('localhost:5000',{
                                      path: '/task'
                                    });
                        this.socket.on('RECEIVE_TITLE', function(data){
                                        debugger
                                        addTitle(data);
                                    });

                        const addTitle = data => {
                                                  debugger
                                                  console.log('data'+data.title);
                                                  this.setState({title:  data.title});
                                                  this.setState({title: ''});
                                                  console.log('tite'+this.state.title);
                                              };

                        this.sendTitle = ev => {
                                                debugger
                                                ev.preventDefault();
                                                this.socket.emit('SEND_TITLE', {
                                                    author: this.state.username,
                                                    title: this.state.title
                                                })
                                                this.setState({title: ''});

                                              }
                      }


 
  
  render (){
    const { errors,title } = this.state;
    const { classes } = this.props;


    return (

      
      <Card className={classes.card}>
        <CardContent>
          <TextField
          name="title"
          label="title"
          style={{ margin: 8 }}
          placeholder="Enter Title for Task"
          value={title}
          helperText="Please provide title detail about task!"
          fullWidth
          margin="normal"
          variant="outlined"
          className={classnames( {'is-invalid': errors.title })}
          multiline={true}
          rows={4}
          rowsMax={8}
          onChange={e => this.setState({title: e.target.value})}
          InputLabelProps={{shrink: true,}}
        />
        < TaskDialog />
        </CardContent>
        <CardActions>
          <Button 
            size="small"
            onClick={this.sendTitle}
            >OK</Button>
        </CardActions>
  
      </Card>
    );
  }


 
}

OpenTask.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenTask);