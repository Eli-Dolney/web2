<template>
  <section id="contact">
    <div class="section-wrapper">
      <div class="container">
        <h1>Contact Me</h1>
        <div class="cards-container">
          <!-- LinkedIn Card -->
          <card-component :data-image="require('../assets/linked.png')">
            <template v-slot:header>
              <a href="https://bit.ly/Linkedin-Elie" target="_blank">
                <h2>LinkedIn</h2>
              </a>
            </template>
            <template v-slot:content>
              <div class="social-icons"></div>
            </template>
          </card-component>
          <!-- GitHub Card -->
          <card-component :data-image="require('../assets/GitHub-Mark.png')">
            <template v-slot:header>
              <a href="https://bit.ly/Github-Eli" target="_blank">
                <h2>GitHub</h2>
              </a>
            </template>
            <template v-slot:content>
              <div class="social-icons"></div>
            </template>
          </card-component>
          <!-- Instagram Card -->
          <card-component :data-image="require('../assets/Instagram.png')">
            <template v-slot:header>
              <a href="https://bit.ly/Insta-Eli" target="_blank">
                <h2>Instagram</h2>
              </a>
            </template>
            <template v-slot:content>
              <div class="social-icons"></div>
            </template>
          </card-component>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "ContactComponent",
  components: {
    CardComponent,
  },
};
</script>

<style scoped>
.section-wrapper {
  width: 80%;
  margin: 0 auto;
  background-color: darkgrey;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>