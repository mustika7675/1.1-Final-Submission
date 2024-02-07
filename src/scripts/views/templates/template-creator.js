import CONFIG from '../../globals/config';

const createRestaurantTemplate = (source) => `
    <div class="card-Menu">
        <div class ="card">                   
            <img class="picture" src="${CONFIG.BASE_IMAGE_URL + source.pictureId}" alt="${source.name}" title="${source.name}"></img>
            <h2><a class="detail-resto" href="${`/#/detail/${source.id}`}">${source.name}</a></h2>
            <p class=" resto"> -> Rating: ${source.rating}</p>
            <p class="resto">-> Kota: ${source.city}</p>  
        </div>
    </div>
`;

const createDetailRestaurant = (source) => `
    <div class="frameDetailReview" id="frameDetail">
        <h2 class=" name">${source.name} ⭐️${source.rating}</h2>    
        <div class="image-city">   
            <img class="imageDetail" src="${CONFIG.BASE_IMAGE_URL + source.pictureId}" alt="${source.name}" />
            <h3>${source.city}</h3>
            <p>${source.address}</p><br>
            <p class="description">${source.description}</p> 
        </div>
    </div> 
    <div class="frameDetailReview" id="frameReview"> 
        <div class="menus">
            <h3>Menu</h3>
            <div class="menu">
                <div class="list-menu">
                    <h4 class="header">Makanan</h4>
                    <div class="list">
                        ${source.menus.foods.map((menus) => `
                            <li>${menus.name}</li>
                        `).join('')}
                    </div>
                </div>
                <div class="list-menu">
                    <h4 class="header">Minuman</h4>
                    <div class="list" >
                        ${source.menus.drinks.map((menus) => `
                            <li>${menus.name}</li>
                        `).join('')}                
                     </div>       
                </div>
            </div>
        </div>
        <div class="customer-review">
            <h3 >Review Pelanggan</h3>
            <div class="review">
                ${source.customerReviews.map((reviews) => `
                    <div class="review-pelanggan">
                        <p class="name-pelanggan">${reviews.name}</p>
                        <p>"${reviews.review}"</p><br>
                        <p>${reviews.date}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>  
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestauranFavorite = (source) => `
    <div class="card-Menu">
        <div class ="card">                   
            <img class="picture" src="${CONFIG.BASE_IMAGE_URL + source.pictureId}" alt="${source.name}" title="${source.name}"></img>
            <h2><a class="detail-resto" href="${`/#/detail/${source.id}`}">${source.name}</a></h2>
            <p class=" resto"> -> Rating: ${source.rating}</p>
            <p class="resto">-> Kota: ${source.city}</p>  
            <p class="resto">->Alamat: ${source.address}</p><br> 
        </div>
    </div>

`;

export {
  createRestaurantTemplate,
  createDetailRestaurant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestauranFavorite,
};
