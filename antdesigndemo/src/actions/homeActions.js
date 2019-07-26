import axios from 'axios';
export const homeActions  = {
    getData
}
// test
function getData(){

    return dispatch=>{
          return  axios.get('https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/getData')
            .then(res=>{
                console.log(res)
                return res
            })
    }
}
