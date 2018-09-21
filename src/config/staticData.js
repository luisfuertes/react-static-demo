import _ from 'lodash'
import Promise from 'bluebird'

// API DATA CONFIG
const apiConfig = []

// LOAD AND FORMAT API DATA
function getStaticData() {
  return Promise.map(apiConfig, v => v.apiRequest, { concurrency: 2 })
    .then(apiResults => {
      //console.log('getStaticData apiResults: ', apiResults)

      let data = {}
      _.map(apiConfig, (v, i) => {
        data[v.key] = v.formatter(apiResults[i])
      })

      //console.log('getStaticData data: ', data)
      return data
    })
    .catch(error => {
      console.error('ERROR: ', error)
    })
}

export default getStaticData
