export default class pageRoutes {
  static Home = {
    label: 'home',
    path: '/',
    title: 'Home',
  };

  static User = {
    label: 'user',
    path: '/:userName',
    title: 'User',
  };
}