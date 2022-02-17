<template>
  <!-- Related Products Section End -->
  <div class="related-products spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Related Products</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="img/katalog4.png" alt />
              <ul>
                <li class="w-icon active">
                  <a href="#">
                    <i class="icon_bag_alt"></i>
                  </a>
                </li>
                <li class="quick-view">
                  <router-link to="/product">+ Quick View</router-link>
                </li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Coat</div>
              <a href="#">
                <h5>Pure Pineapple</h5>
              </a>
              <div class="product-price">
                Rp14.00
                <span>Rp350,000.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="img/katalog2.png" alt />
              <ul>
                <li class="w-icon active">
                  <a href="#">
                    <i class="icon_bag_alt"></i>
                  </a>
                </li>
                <li class="quick-view"></li>
                 <router-link to="/product">+ Quick View</router-link>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Gamis Anak</div>
              <a href="#">
                <h5>Gamis Anak</h5>
              </a>
              <div class="product-price">Rp13.000</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="img/katalog3.png" alt />
              <ul>
                <li class="w-icon active">
                  <a href="#">
                    <i class="icon_bag_alt"></i>
                  </a>
                </li>
                <li class="quick-view">
               <router-link to="/product">+ Quick View</router-link>
                </li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Towel</div>
              <a href="#">
                <h5>Pure Pineapple</h5>
              </a>
              <div class="product-price">Rp34.00</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="img/katalog4.png" alt />
              <ul>
                <li class="w-icon active">
                  <a href="#">
                    <i class="icon_bag_alt"></i>
                  </a>
                </li>
                <li class="quick-view">
                 <router-link to="/product">+ Quick View</router-link>
                </li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Towel</div>
              <a href="#">
                <h5>Converse Shoes</h5>
              </a>
              <div class="product-price">Rp34.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Related Products Section End -->
</template>

<script>
export default {
    name: "RelatedProdukAurum"
}
</script>