import _ from 'lodash'

const getPaths = data => {
  const staticPaths = [
    {
      path: '/',
      component: 'src/components/pages/home/detail/',
      getData: () => ({
        static: {}
      })
    },
    {
      is404: true,
      component: 'src/components/pages/404'
    }
  ]

  return _.union(staticPaths)
}

export default getPaths
