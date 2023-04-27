<template>
  <header>
    <div class="centerpiece-wrapper"> <!-- Add this wrapper div -->
      <CenterpieceComponent />
    </div>
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
  width: 100vw; /* Set the width to 100% of the viewport width */
  height: 100vh; /* Set the height to 100% of the viewport height */
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.centerpiece-wrapper {
  transform: translateY(-20%);
}
</style>
