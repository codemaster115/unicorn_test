import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: 'githubSearch',
    component: asyncComponent(() => import('./containers/GithubSearch'))
  },
  {
    path: 'contacts',
    component: asyncComponent(() => import('./containers/Contacts'))
  }
];
export default routes;
