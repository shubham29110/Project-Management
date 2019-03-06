import { connect } from 'react-redux';
 import { addTask } from '../../../actions/task';
// import { getDeveloper } from '../../actions/developer';
import AddTask from '../../../components/project/task/AddTask'

const mapDispatchToProps={
  addTask,
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  auth:state.auth,
  project:state.project.project
  // developer:state.developer.developer
})

export  default connect(mapStateToProps,mapDispatchToProps )(AddTask)