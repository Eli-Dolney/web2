<template>
  <section id="about">
    <div class="section-wrapper">
      <div class="about-container">
        <div class="about-text">
          <h2>About Me</h2>
          <p>
            Cool things are all around us, from breathtaking natural wonders to
            cutting-edge technology. Exploring new and cool things can be a fun
            and rewarding experience that broadens our horizons. Some of the
            coolest things in the world can be found in unexpected places, so
            it's always worth keeping an open mind. Whether it's trying new
            foods, traveling to exotic locations, or discovering new hobbies,
            there's no shortage of cool things to explore in life.
          </p>
        </div>
        <div class="about-image">
          <img
            :src="require('@/assets/evMoving.jpg')"
            alt="Eli and Everly"
            class="profile-image"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-out-quad"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style scoped>
#about {
  padding: 50px 0;
  border: 2px solid red;
  background-color: #283040;
}

.section-wrapper {
  width: 85%;
  margin: 0 auto;
  background-color: #1A1E26;
  border: 2px solid pink
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
  width: 80%;
  
}

.about-text {
  flex: 1;
  padding-right: 50px;
  background-color: grey;
  border: 2px solid green
}

.about-image {
  flex: 1;
  text-align: center;
}

.about-image img {
  max-width: 100%;
  border-radius: 5px;
  
  
}

.profile-image {
  width: 350px; /* Adjust the width as needed */
  height: 350px; /* Adjust the height as needed */
  object-fit: cover; /* This will ensure that the image maintains its aspect ratio while filling the dimensions */
  border: 2px solid yellow
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
  }

  .about-text {
    padding-right: 0;
    margin-bottom: 30px;
    
  }

  .about-image {
    width: 100%;
  }
}
</style>