import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class AssignedProject extends React.Component {
  state = {
    expanded: null,
   
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  componentWillMount(){
    if(this.props.match.params.token){
      const token={
        token:this.props.match.params.token
      }
      this.props.fecthAssignedProject(token)
    }
  }
  render() {
    debugger
    const { classes,newProject } = this.props;
    const { expanded } = this.state;

    return (
      
      <div className={classes.root}>
      {newProject.hasOwnProperty('title') && 
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{newProject.title}</Typography>
            <Typography className={classes.secondaryHeading}> {newProject.technology+' '}</Typography>
            <Typography style={{    paddingLeft: '30%'}}>Status:{'  '+newProject.confirmation.toString()}</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails>
            <Typography>
             {newProject.discription}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        }
      </div>
    
    );
  }
}


export default withStyles(styles)(AssignedProject);