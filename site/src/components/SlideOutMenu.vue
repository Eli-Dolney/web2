<template>
  <div>
    <button class="hamburger" @click="isOpen = !isOpen">
      <font-awesome-icon icon="bars" />
    </button>
    <nav :class="{ open: isOpen }">
      <div class="social-navbar">
        <ul>
          <li>
            <a class="list-item" href="https://bit.ly/Github-Eli" v-tooltip="'Github'">
              <font-awesome-icon :icon="['fab', 'github-square']" />
            </a>
          </li>
          <li>
            <a class="list-item" href="https://bit.ly/Linkedin-Eli" v-tooltip="'LinkedIn'">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </li>
          <li>
            <a class="list-item" href="https://bit.ly/Insta-Eli" v-tooltip="'Instagram'">
              <font-awesome-icon :icon="['fab', 'instagram-square']" />
            </a>
          </li>
          <li>
            <a class="list-item" href="https://bit.ly/CodeCamp-Eli" v-tooltip="'CodeCamp'">
              <font-awesome-icon :icon="['fas', 'laptop-code']" />
            </a>
          </li>
          <li>
            <a class="list-item" href="https://bit.ly/Twitter-Eli" v-tooltip="'Twitter'">
              <font-awesome-icon :icon="['fab', 'twitter-square']" />
            </a>
          </li>
        </ul>
      </div>
      <ul class="main-menu">
        <li @click="closeMenu" class="nav-link">
          <font-awesome-icon icon="user" class="nav-icon" />
          <a href="#about">About Me</a>
        </li>
        <li @click="closeMenu" class="nav-link">
          <font-awesome-icon icon="briefcase" class="nav-icon" />
          <a href="#portfolio">Portfolio</a>
        </li>
        <li @click="closeMenu" class="nav-link">
          <font-awesome-icon icon="envelope" class="nav-icon" />
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 2px red;
}

body {
  font-family: "Arial", sans-serif;
  line-height: 1.6;
}

.hamburger {
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1000;
  color: purple;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 20px 0;
  transition: transform 0.3s ease;
  transform: translateY(-100%);
}

nav.open {
  height: 100vh;
  transform: translateY(0);
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

nav ul li {
  margin: 20px 0;
}

nav ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  padding: 5px 20px;
  border-radius: 5px;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

nav ul li a:hover {
  color: #000000;
  background-color: #ffffff;
}

.nav-link {
  display: inline;
}

.nav-icon {
  margin-right: 10px;
}

@media (max-width: 767px) {
  nav {
    height: 0;
    overflow: hidden;
  }

  nav ul li {
    margin: 10px 0;
  }

  .nav-link {
    display: block;
  }
}

nav ul li:active a {
  transform: scale(0.95);
}

.social-navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 0;
}

.social-navbar ul {
  display: flex;
  gap: 10px;
  list-style-type: none;
  justify-content: center; /* Added this line */
  flex-direction: row; /* Added this line */
}
.social-navbar ul li a {
  color: #ffffff;
  font-size: 24px;
  transition: color 0.2s ease;
}

.social-navbar ul li a:hover {
  color: #cccccc;
}

.main-menu {
  margin-top: 60px;
}
</style>
