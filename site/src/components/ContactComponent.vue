<template>
  <section id="contact">
    <div class="section-wrapper">
      <div class="container">
        <h1>Contact Me</h1>
        <div class="cards-container">
          <!-- LinkedIn Card -->
          <card-component :data-image="require('../assets/linked.png')" :data-link="'https://bit.ly/Linkedin-Eli'">
            <template v-slot:content>
              <div class="social-icons"></div>
            </template>
          </card-component>
          <!-- GitHub Card -->
          <card-component :data-image="require('../assets/GitHub-Mark.png')" :data-link="'https://bit.ly/Github-Eli'">
            <template v-slot:content>
              <div class="social-icons"></div>
            </template>
          </card-component>
          <!-- Instagram Card -->
          <card-component :data-image="require('../assets/Instagram.png')" :data-link="'https://bit.ly/Insta-Eli'">
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

#contact{
  padding: 50px 0;
  background-color: #283040;
  color: #ffffff;
  border: 2px solid greenyellow;
}
.section-wrapper {
  width: 85%;
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
  width: 100%; 
  gap: 30px; 
}

/* Add a flex-wrap style for smaller screens */
@media (max-width: 768px) {
  .cards-container {
    flex-wrap: wrap;
  }
}

</style>