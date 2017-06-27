// export const NAVIGATE = 'NAVIGATE';
// export const LOG_IN = 'LOG_IN';
// export const LOG_OUT = 'LOG_OUT';
// export const INIT_SENSORS = 'INIT_SENSORS'
// export const INIT_WARNINGS = 'INIT_WARNINGS'
// export const TOGGLE_PROFILE = 'TOGGLE_PROFILE'
// export const HELP = 'HELP'
// export const VIEW_WARNINGS = 'VIEW_WARNINGS'
// export const VIEW_DIRECTORY = 'VIEW_DIRECTORY'
// export const GOTO_CHART = 'GOTO_CHART'
// export const SELECT_FOLDER = 'SELECT_FOLDER'


// export const resource = (method, endpoint, payload, notJSON) => {
//   const options =  {
//         method,
//         credentials: 'include'
//   }

//   if (notJSON) {
//     options.body = payload
//   } else {
//     options.body = JSON.stringify(payload)
//     options.headers = {
//         'Content-Type': 'application/json'
//     }
//   }

//   return fetch(`${url}/${endpoint}`, options)
//     .then(r => {
//       if (r.status === 200) {
//           if(r.headers.get('Content-Type')) {
//                 return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
//           }
//       }
//     })
// }

// export const error = (message) => (dispatch) => {
//     dispatch({type:'ERROR', message: message})
// }

// export const navigate = (newPath) => (dispatch) => {
//     dispatch({type: 'NAVIGATE', newPage: newPath})
// }