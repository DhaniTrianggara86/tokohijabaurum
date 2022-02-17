<template>
  <div class="container-fluid m-0 p-0">

    <div id="home-page" class="full-height p-4">
      <div class="container pt-3">

        <div class="row pb-5">
          <div class="col-lg-6 pt-4 my-auto">
            <div class="text-center mb-3 text-light">
              
              <div class="tulisan_1">Hijab Berkualiatas</div>
            </div>
            <img id="iphone-img" src="../assets/Katalog2.png" class="img-fluig">
          </div>

          <div class="col-lg-6 my-auto pt-4">
            <div class="text-center mb-3 text-light">
              <div class="tulisan_2">Menjadi Reseller </div>
            </div>

            <div class="border p-3 p-md-5 bg-white rounded shadow">
              <h2>Coming Soon</h2>
              <form @submit.prevent="addEmail(email)">
                <div class="form-group">
                  <label for="emailSignup">Reserve your account now, we'll contact you when it's live</label>
                  <input v-model="email"
                         type="email"
                         id="emailSignup"
                         placeholder="Enter Email"
                         class="form-control"
                  >
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email address</small>
                  <button type="submit" class="btn btn-success mt-3">Join Waiting List</button>
                  <div class="mt-4">
                    <p class="m-0">{{ message }}</p>
                  </div>
                </div>
              </form>
            </div>

            <div id="available" class="p-2">
              <h4 class="text-right mb-2 mt-3 text-light">
                Available On
              </h4>
              <div class="row">
                <div class="col my-auto">
         
                </div>
                <div class="col my-auto">
                  <img src="../assets/Photo_1.png" class="float-left img-fluid app_store_img">
                
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div id="about" class="bg-light p-3 p-md-5">
      <div class="row">
        <div class="col-lg">
       
          <h5 class="ml-md-4 mr-md-4">
       
          </h5>
        </div>
        <div class="col-lg">
          
          <h5 class="ml-md-4 mr-md-4">
          &nbsp;  Kami adalah Produsen Baju Anak Berkualitas, Hingga Dapat Bersaing dengan Produk Lokal Lainnya Harga Sangat Terjangkau, Anda Juga Bisa Menjadni Reseller Terbaik Kami!!!
          </h5>
        </div>
        <div class="col-lg">
          
          <h5 class="ml-md-4 mr-md-4">
         
          </h5>
        </div>
      </div>
    </div>

    <div id="contact" class="p-4">
      <div class="row justify-content-center mt-3 mb-3">

        <div v-if="show_contact == true" class="col-lg-4">
          <h2>Apakah Ada Pertanyaan?</h2>
          <p>Contact us by filling out the information below</p>

          <div v-if="contact_notice != ''" class="alert alert-warning">
            There was a problem submitting your message. {{contact_notice}}
          </div>

          <form @submit.prevent="sendContactMessage()">
            <div class="form-group text-left ">
              <input v-model="contact_email"
                     type="email"
                     class="form-control"
                     placeholder="Enter Your Email"
                     >
              <textarea v-model="contact_message"
                        class="form-control mt-3"
                        placeholder="Enter Your Message"
                        rows="5"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div v-else>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for contacting us, we'll get back to you as soon as we can.</p>
        </div>
      </div>

    </div>

    <div id="footer" class=" p-4">
      <footer class="text-light p-4">
        <a href="#" target="_blank" class="text-warning">Home</a> 
        
     <li><a href="./index.html">Home Aurum</a></li>
        <br>
         <li><router-link to= "/Agen">Daftar Menjadi Agen</router-link></li>
        <small>&copy; 2020, AurumHijab.com</small>
      </footer>
    </div>


  </div>

</template>

<script>

export default {
  data () {
    return {
      title: 'Travel Treasury',
      email: '',
      message: '',
      show_contact: true,
      contact_email: '',
      contact_message: '',
      contact_notice: '',
    }
  },
  
    randomPassword(length) {
      var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
      var password = "";
      for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        password += chars.charAt(i);
      }
      return password;
    },
    sendContactMessage() {
      if (!this.validEmail(this.contact_email)) {
        this.contact_notice = 'The email address is badly formatted.';
      } else if (this.contact_message.length < 10) {
        this.contact_notice = "Your message is too short";
      } else {
        const url = `https://us-central1-travel-budget-eefcd.cloudfunctions.net/sendEmail?email_from=${this.contact_email}&message=${this.contact_message}`
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };
        fetch(url, requestOptions);
        this.show_contact = false;
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home-page {
    background-color: #92D2F2;
    background: url('../assets/KATALOG1.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #about {
    min-height: 40vh;
  }
  #iphone-img {
    max-height: 80vh;
  }
  #contact {
    background-color: #57AEAF;
  }
  #footer {
    background-color: #252223;
  }
  .app_store_img{
    max-height: 80px;
  }
  .tulisan_1{
    font-color: white;
    
    font-size: 35pt;
  }
  .tulisan_2{
    font-color:white;
    font-size:35pt;
    
  }
  .ml-md-4{
    font-color:black ;
    font-family:Tahoma;
    font-style: italic;
    font-size:16pt;
  }
</style>