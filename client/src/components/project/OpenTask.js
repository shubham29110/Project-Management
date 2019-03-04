import React,{Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  TextField } from '@material-ui/core';

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
    
        discription: '',
        errors: {}
    }
}
  render (){
    const { errors,discription } = this.state;
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
          <TextField
          name="discription"
          label="Discription"
          style={{ margin: 8 }}
          placeholder="Discription"
          value={discription}
          helperText="Please provide brief discription about project!"
          fullWidth
          margin="normal"
          variant="outlined"
          className={classnames( {'is-invalid': errors.discription })}
          multiline={true}
          rows={4}
          rowsMax={8}
          InputLabelProps={{shrink: true,}}
          onChange={this.handleInputChange}
        />
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