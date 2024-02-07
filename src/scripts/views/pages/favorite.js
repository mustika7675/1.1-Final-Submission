import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestauranFavorite } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="mainContent" id="daftar-restaurant">
        <h1 class="content_favorite">Your Favorite Restaurant</h1>
        <div class="container" id="menu">
      
        </div>      
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#menu');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestauranFavorite(restaurant);
    });
  },
};

export default Favorite;
