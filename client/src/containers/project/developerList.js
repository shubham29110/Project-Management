import { connect } from 'react-redux';
import {addCorrespondingDeveloper} from '../../actions/developer'
import DeveloperList from '../../components/project/DeveloperList'

const mapDispatchToProps={
  addCorrespondingDeveloper
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  developerList:state.developer.developerList,
  //developer:state.project.developer
})

export  default connect(mapStateToProps,mapDispatchToProps )(DeveloperList)