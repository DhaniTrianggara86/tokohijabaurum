<template>
    <!-- Hero Section Begin -->
    <section class="hero-section">
      <carousel class="hero-items" :items="1" :nav="false" :autoplay="true">

        <div class="single-hero-items set-bg" style="background-image: url('/img/KATALOG1.jpg')">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Gamis Anak</span>
                <h1>Produsen Hijab Terpercaya</h1>
                <p>Produsen Hijab sangat Berkualitas Harga Bersaing dengan produk lokal lainnya</p>
                <a href="#" class="primary-btn">Belanja Sekarang Juga!</a>
              </div>
            </div>
          </div>
        </div>
        <div class="single-hero-items set-bg" style="background-image: url('/img/katalog5.png')">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Gamis Anak</span>
                <h1>Produsen Hijab</h1>
                <br>
               <h3 class="hijab_2">Produsen Hijab sangat Berkualitas Harga Bersaing dengan produk lokal lainnya&nbsp;</h3>
               <br>
               <br>
                <a href="#" class="primary-btn">Belanja Sekarang Juga!</a>
              </div>
            </div>
          </div>
        </div>
        <div class="single-hero-items set-bg" style="background-image: url('/img/katalog5.png')">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Gamis Anak</span>
                <h1>Produsen Hijab</h1>
                <p>Produsen Hijab sangat Berkualitas Harga Bersaing dengan produk lokal lainnya</p>
                <a href="#" class="primary-btn">Belanja Sekarang Juga</a>
              </div>
            </div>
          </div>
        </div>

      </carousel>
    </section>
    <!-- Hero Section End -->
</template>

<script>
    
import carousel from "vue-owl-carousel";
export default {
    name:"HeroAurum",
    components:{
        carousel
    }
        
    }
</script>

<style scopped>
.hijab_2{

  font-size: 14pt;
  font-color:rgb(255, 255, 255);
  font-family: sans-serif;
}

</style>