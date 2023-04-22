<template>
  <div id="app">
    <loading-screen v-if="isLoading" />
    <HeaderComponent />
    <slide-out-menu></slide-out-menu>
    <SidebarComponent />
    <main>
      <AboutComponent />
      <PortfolioComponent />
      <ContactComponent />
    </main>
    <FooterComponent />
  </div>
</template>


<script>
import LoadingScreen from './components/LoadingScreen.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import PortfolioComponent from './components/PortfolioComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SlideOutMenu from './components/SlideOutMenu.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    SlideOutMenu,
    SidebarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LoadingScreen,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Hide the loading screen after 3 seconds
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
