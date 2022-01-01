
function getProduct(){
    var product_wrap = document.querySelector(".home__wrap").querySelector(".grid__row");
    product_wrap.innerHTML = ""
    for (let i = 0; i < 25; i++) {
        var product_row = document.createElement("div");
        product_row.classList = "grid__column-2-4";
        var product = document.createElement("div");
        product.classList = "home__product";
        var random_img = Math.floor(Math.random() * 50);
        var random_price = Math.floor(Math.random() * 10000000);
        product.innerHTML = `
            <div class="home__product-img" style="background: url(https://picsum.photos/id/${random_img}/300)"></div>
            <h4 class="home__product-description">Set dưỡng trắng Whoo đông y hoàng cung Gong Ying Jang...</h4>
            <div class="home__product-price">
                <span class="home__product-price--old">${numberWithCommas(random_price)}đ</span>
                <span class="home__product-price--new">${numberWithCommas(random_price-100000)}đ</span>
            </div>
            <div class="home__product-review">
                <div class="home__product-favourite">
                    <i class="far fa-heart"></i>
                    <!-- <i class="fas fa-heart"></i> -->
                </div>
                <div class="home__product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="home__product-sold">Đã bán 8.8k</span>
                </div>
            </div>
            <div class="home__product-original">
                <div class="home__product-brand">Whoo</div>
                <div class="home__product-nation">Hàn Quốc</div>
            </div>
            <div class="home__product-tag">
                <i class="fas fa-check"></i>
                <span class="home__product-tag-name">Yêu thích</span>
            </div>
            <div class="home__product-sales"></div>
        `
        product_row.appendChild(product);
        product_wrap.appendChild(product_row)
    }
}

var count = 1;
var currentPage = document.querySelector(".home__filter-page-current");
var leftIcon = document.querySelector(".left-icon");
var rightIcon = document.querySelector(".right-icon");
function nextPage(){
    count++;
    getProduct();
    currentPage.innerText = count;
}

function backPage(){
    count--;
    getProduct();
    currentPage.innerText = count;
}

function closeTag(){
    document.querySelector(".modal").style.display = "none";
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
