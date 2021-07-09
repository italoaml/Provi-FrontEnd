import Vue from 'vue'

export const userKey = '__connect_user'
// export const baseApiUrl = 'https://imsoftware-connect-backend.herokuapp.com'      
export const baseApiUrl = 'http://localhost:3002'                     

export function showError(e) {
    if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg: e.response.data })
        console.log(e.response.data)
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
        console.log(e)
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey } 