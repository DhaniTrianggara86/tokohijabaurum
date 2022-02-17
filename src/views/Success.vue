<template>
    
    <div class="succsess">
        <div class="d-flex success-checout align-items-center justify-content-center">
            <div class="col col-lg-4 text-center">
                <img src="img/success-buy.png" alt width="294"/>
                <h3 class="my-4">Sukses Terbayar !</h3>
                <p
                    class="mt-2">Silakan Untuk menenunggu dari kami via email yang sudah di daftakan sebelumnya</p>
                    <router-link to="/"><a href="#" class ="primary-btn pd-cart mt-3">Kembali Ke Home</a></router-link>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Success"
}
</script>