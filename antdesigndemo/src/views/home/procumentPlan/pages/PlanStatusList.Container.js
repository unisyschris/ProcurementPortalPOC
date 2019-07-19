import { connect } from 'react-redux';
import PlanStatusList from './PlanStatusList';
import {planActions} from '../../../../actions/planActions'
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getStatusPlanList:()=>dispatch(planActions.getStatusPlanList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanStatusList);