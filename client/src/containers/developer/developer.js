import { connect } from 'react-redux';
import {fecthTotalDeveloper} from '../../actions/developer'
import Developers from '../../components/developer/Developers'

const mapDispatchToProps={
  fecthTotalDeveloper
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  totalDevelopers:state.developer.totalDeveloper
})

export  default connect(mapStateToProps,mapDispatchToProps )(Developers)