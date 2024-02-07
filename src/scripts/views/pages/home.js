import TheRestaurantSource from '../../data/therestaurantdb-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
        <section class="jumbotron">
          <img src="./images/heros/hero-image.jpg" alt="jumbotron">
        </section>

        <h1>Choice your restaurant</h1>

        <section class="mainContent" id="daftar-restaurant">
            <div class="container" id="menu">
          
            </div>      
        </section>
      `;
  },

  async afterRender() {
    const restaurantS = await TheRestaurantSource.homeRestaurant();
    const restaurantContainer = document.querySelector('#menu');
    restaurantS.forEach((menuItem) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(menuItem);
    });
  },
};

export default HomePage;
