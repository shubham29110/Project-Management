import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

 
class ProjectList extends React.Component { 
  componentDidMount(){
    if(this.props){
      this.props.fecthProjectList()
    }
    
  }
  render() {
    const {classes,projectList} = this.props
    if(projectList.length)console.log('projectList',projectList)
  

    return(
   <Paper className={classes.root}>
  
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Date and Time</TableCell>
            <TableCell align="right">Technologies</TableCell>
            <TableCell align="right">Developer</TableCell>
            <TableCell align="right">Confirmation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {projectList.length && projectList.map((list)=>(
            <TableRow key={list.id}>
              <TableCell component="th" scope="row">
                {list.title}
              </TableCell>
              <TableCell align="right">{list.date}</TableCell>
              <TableCell align="right"
               renderValue={selected => selected.join(', ')}>
                {list.technology+'\n'}</TableCell>
              <TableCell align="right">{list.developer+'\n'}</TableCell>
              <TableCell align="right">{list.confirmation.toString()}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
   
    </Paper>
  )
}
}




 
 export default (withStyles(styles)(ProjectList))