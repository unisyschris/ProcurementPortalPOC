import { connect } from 'react-redux';
import PlanHome from './PlanHome';
import {planActions} from '../../../actions/planActions'
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPlanList:()=>dispatch(planActions.getPlanList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanHome);