import axios from 'axios';
export const planActions = {
    getPlanList,
    getStatusPlanList
}
function getPlanList(){
  
    return dispatch=>{
        return  axios.get('https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/planlist')
          .then(res=>{
              console.log(res)
              return res
          })
          .catch(error=>{
              console.log(error)
          })
  }
}
function getStatusPlanList(){
    return dispatch=>{
        return  axios.get('https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/planStatusList')
          .then(res=>{
              console.log(res)
              return res
          })
  }
}