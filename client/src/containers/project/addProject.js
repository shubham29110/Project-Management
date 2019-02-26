import { connect } from 'react-redux';
import { addProject } from '../../actions/project';
import { getDeveloper } from '../../actions/developer';
import AddProject from '../../components/project/AddProject'

const mapDispatchToProps={
  addProject,
  getDeveloper
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  auth:state.auth,
  technology:state.project.technology,
  developer:state.developer.developer
})

export  default connect(mapStateToProps,mapDispatchToProps )(AddProject)