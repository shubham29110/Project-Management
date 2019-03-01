import { connect } from 'react-redux';
import { fecthAssignedProject } from '../../actions/project';

import AssignedProject from '../../components/project/AssignedProject'

const mapDispatchToProps={
  fecthAssignedProject
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  auth:state.auth,
  newProject:state.project.newProject
})

export  default connect(mapStateToProps,mapDispatchToProps )(AssignedProject)