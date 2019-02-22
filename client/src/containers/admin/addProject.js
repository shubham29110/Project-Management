import { connect } from 'react-redux';
import { addProject } from '../../actions/admin';
import AddProject from '../../components/project/AddProject'

const mapDispatchToProps={
  addProject
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  auth:state.auth
})

export  default connect(mapStateToProps,mapDispatchToProps )(AddProject)