import HomePage from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
