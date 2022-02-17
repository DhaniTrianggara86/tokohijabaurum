<template>
  <div class="home">
    <HeaderAurum />
    <HeroAurum />
    <WomenAurum/> 
    <InstaAurum/>
    <LogoAurum/>
    <FooterAurum/>
  </div>
</template>

<script>

import HeaderAurum from "@/components/HeaderAurum.vue";
import HeroAurum from "@/components/HeroAurum.vue";
import WomenAurum from "@/components/WomenAurum.vue";
import InstaAurum from "@/components/InstaAurum";
import LogoAurum from "@/components/LogoAurum";
import FooterAurum from "@/components/FooterAurum";

export default {
  name: "home",
  components: {
    HeaderAurum,
    HeroAurum,
    WomenAurum,
    InstaAurum,
    LogoAurum,
    FooterAurum
    
  }
};
</script>
