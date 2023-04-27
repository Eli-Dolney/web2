<template>
  <section id="about">
    <div class="section-wrapper">
      <div class="about-container">
        <div class="about-text">
          <h2 ref="title">{{ title }}</h2>
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
          <img :src="require('@/assets/evMoving.jpg')" alt="Eli and Everly" class="profile-image"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      title: '',
    };
  },
  mounted() {
    this.title = 'About Me';
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const rect = this.$refs.title.getBoundingClientRect();
      const inViewport =
        rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

      if (inViewport) {
        this.scrambleTitle();
      } else {
        this.title = 'About Me';
      }
    },
    scrambleTitle() {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const text = 'About Me';
      let iteration = 0;
      let interval;

      interval = setInterval(() => {
        this.title = text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3.5;
      }, 50);
    },
  },
};
</script>


<style scoped>
#about {
  padding: 50px 0;
  border: 2px solid red;
}

.section-wrapper {
  width: 80%;
  margin: 0 auto;
  border: 2px solid red;
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.about-text {
  flex: 1;
  padding-right: 50px;
  border: 2px solid red;
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
  width: 350px;
  height: 350px;
  object-fit: cover;
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
