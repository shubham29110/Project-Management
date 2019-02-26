import { connect } from 'react-redux';
import {fecthProjectList} from '../../actions/project'
import ProjectList from '../../components/project/ProjectList'

const mapDispatchToProps={
  fecthProjectList
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  projectList:state.project.projectList
})

export  default connect(mapStateToProps,mapDispatchToProps )(ProjectList)