import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/therestaurantdb-source';
import { createDetailRestaurant } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
        <section class="detail" id="daftar-restaurant">
          <div class="container-detail" id="detail-menu">
          
          </div>
        </section>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-menu');
    restaurantContainer.innerHTML = createDetailRestaurant(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        backdrop_path: CONFIG.BASE_IMAGE_URL,
        address: restaurant.address,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
