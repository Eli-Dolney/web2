<template>
    <header>
        <CenterpieceComponent />
      <!-- Your header content goes here -->
    </header>
  </template>
  
  <script>
import CenterpieceComponent from './CenterpieceComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    CenterpieceComponent,
  },
};
  </script>
  
  <style scoped>
  header {
    background-image: linear-gradient(
        rgba(82, 92, 101, 0.7),
        rgba(90, 81, 81, 0.7),
        rgba(0, 0, 0, 0.7)
      ),
      url(~@/assets/background_ev_eli.JPG);
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
  }
</style>