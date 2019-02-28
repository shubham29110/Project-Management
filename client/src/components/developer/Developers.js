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

 
class TotalDevelopers extends React.Component { 

  componentDidMount(){
    debugger
    if(this.props){
      this.props.fecthTotalDeveloper()
    }
    
  }
  render() {
    const {classes,totalDevelopers} = this.props
    if(totalDevelopers.length)console.log('totalDevelopers',totalDevelopers)
  

    return(
   <Paper className={classes.root}>
  
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email-Address</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Technologies</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
        {totalDevelopers.length && totalDevelopers.map((list)=>(
            <TableRow key={list.id}>
              <TableCell component="th" scope="row">
                {list.name }
              </TableCell>
              <TableCell align="right">{list.email}</TableCell>
              <TableCell align="right">
                {list.role}</TableCell>
              <TableCell align="right">{list.technology+'\n'}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
   
    </Paper>
  )
}
}




 
 export default (withStyles(styles)(TotalDevelopers))