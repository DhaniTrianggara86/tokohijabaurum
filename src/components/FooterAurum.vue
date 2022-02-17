<template>
    <!-- Footer Section Begin -->
    <footer class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="footer-left text-left">
                        <div class="footer-logo">
                            <a href="#"><img src="img/logo2.png" alt="" /></a>
                            
                        </div>
                        <ul>
                            <li>Address: Ciomas River View</li>
                            <li>Phone: +628 95424016568</li>
                            <li>Email: Aurumhijab@gmail.com</li>
                        </ul>
                        <div class="footer-social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1">
                    <div class="footer-widget text-left">
                        <h5>Information</h5>
                        <ul>
                            <li><router-link to="/About">Tentang Kami</router-link></li>
                          <li><router-link to="/Autocomplete">Pengirimian</router-link></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Serivius</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-widget text-right">
                        <h5>My Account</h5>
                        <ul>
                            <li><a href="#">Akun Saya </a></li>
                            <li><a href="#">Kontak</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-reserved">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-text">
                            Copyright &copy;
                           
                            
                            2020 All rights reserved | AurumHijab
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Section End -->
</template>

<script>
export default {
    

    name:"FooterAurum"
}
</script>