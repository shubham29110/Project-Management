import { connect } from 'react-redux';
import {fecthProjectList,addTaskToProject} from '../../actions/project'
import ProjectList from '../../components/project/ProjectList'

const mapDispatchToProps={
  fecthProjectList,
  addTaskToProject
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  projectList:state.project.projectList
})

export  default connect(mapStateToProps,mapDispatchToProps )(ProjectList)