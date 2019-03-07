import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { HashRouter as Router } from "react-router-dom";
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

  handleClick=(list)=>{
    debugger
  if(list.title){
  const project={
    projectName:list.title,
    developerName:list.developer,
    developerEmail:list.developerEmail
  }
  console.log(project)
  this.props.addTaskToProject(project,this.props.history)
}
}
  
  componentDidMount(){
    if(this.props){
      this.props.fecthProjectList()
    }
    
  }
  render() {
    const {classes,projectList} = this.props
    if(projectList.length)console.log('projectList',projectList)
  

    return(
      <Router>
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
        
        <TableBody >
       
        {projectList.length && projectList.map((list ,i)=>(
          
          
            <TableRow key={i} component="a" href='/#/OpenTask' onClick={() => this.handleClick(list)} key={list.id}>
              <TableCell name="projectName"component="th" scope="row">
                {list.title}
              </TableCell>
              <TableCell align="right">{list.date}</TableCell>
              <TableCell align="right">{list.technology+'\n'}</TableCell>
              <TableCell name="projectName" align="right">{list.developer+'\n'}</TableCell>
              <TableCell align="right">{list.confirmation.toString()}</TableCell>
            </TableRow>
           
            
            ))}
          
        </TableBody>
       
      </Table>
   
    </Paper>
    </Router>
  )
}
}
 export default (withStyles(styles)(ProjectList))