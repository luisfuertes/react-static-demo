import universal from 'react-universal-component'

const Home = universal(import('./home/detail/'))
const DynamicRouteComponent = universal(import('./home/detail2/'))

export { Home, DynamicRouteComponent }
