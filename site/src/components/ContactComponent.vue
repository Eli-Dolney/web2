<template>
    <section id="contact">
      <div class="section-wrapper">
        <div class="container">
          <h1>Contact Me</h1>
          <!-- LinkedIn Card -->
          <card-component :data-image="require('../assets/evMoving.jpg')">
            <template v-slot:header>
              <h2>LinkedIn</h2>
            </template>
            <template v-slot:content>
              <div class="social-icons">
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </template>
          </card-component>
          <!-- GitHub Card -->
          <card-component :data-image="require('../assets/evMoving.jpg')">
            <template v-slot:header>
              <h2>GitHub</h2>
            </template>
            <template v-slot:content>
              <div class="social-icons">
                <a href="https://github.com/your-github-profile" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </template>
          </card-component>
          <!-- Twitter Card -->
          <card-component :data-image="require('../assets/evMoving.jpg')">
            <template v-slot:header>
              <h2>Instagram</h2>
            </template>
            <template v-slot:content>
              <div class="social-icons">
                <a href="https://twitter.com/your-twitter-profile" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </template>
          </card-component>
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
  border: 2px solid red;
  padding: 10px;
  width: 80%;
  margin: 0 auto;
}

  /* Add the provided styles here */
  p {
    line-height: 1.5em;
  }
  
  h1 + p, p + p {
    margin-top: 10px;
  }
  
  .container {
    padding: 40px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  /* Additional styles specific to the contact component */
  .social-icons {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
  
  .social-icons a {
    color: #fff;
    font-size: 24px;
    text-decoration: none;
  }
  
  .social-icons a:hover {
    color: #ccc;
  }
  
  /* Add any other required styles here */
  </style>
  