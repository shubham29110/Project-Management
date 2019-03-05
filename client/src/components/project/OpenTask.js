import React,{Component} from 'react';
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
    
      title: '',
        errors: {}
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
          label=""
          style={{ margin: 8 }}
          placeholder="Enter Title for Task"
          value={title}
          helperText="Please provide title detail about task!"
          fullWidth
          margin="normal"
          variant="outlined"
          className={classnames( {'is-invalid': errors.discription })}
          multiline={true}
          rows={4}
          rowsMax={8}
          InputLabelProps={{shrink: true,}}
        />
        < TaskDialog />
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
  
      </Card>
    );
  }


 
}

OpenTask.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenTask);