import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantSource {
  static async homeRestaurant() {
    const response = await fetch(API_ENDPOINT.HOMEPAGE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestaurantSource;
