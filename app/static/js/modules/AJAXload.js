// export function ajaxLoad(url) {
//   const config = {
//     method: 'GET'

//   }
//   return fetch(url, config)
//     .then(response => response.text())
//     .then(data => {

//       changeUrl(url)
//       if (url === '/') {
//         document.querySelector('.wrapper').innerHTML = data
//         return 
//       }
//       document.querySelector('#content').innerHTML = data
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }


// function changeUrl(path) {
//   window.history.pushState({}, null, path)
// }


