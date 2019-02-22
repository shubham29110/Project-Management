import { connect } from 'react-redux';
import DeveloperList from '../../components/project/DeveloperList'

// const mapDispatchToProps={
//   addProject,
//   getDeveloper
// }
const mapStateToProps = (state) => ({
  errors: state.errors,
  admin:state.admin.developer
})

export  default connect(mapStateToProps,null )(DeveloperList)