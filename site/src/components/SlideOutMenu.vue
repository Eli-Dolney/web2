<template>
  <div>
    <button class="hamburger" @click="isOpen = !isOpen">
      <font-awesome-icon icon="bars" />
    </button>
    <nav :class="{ open: isOpen }">
      <ul>
        <li @click="closeMenu" class="nav-link"><a href="#about">About Me</a></li>
        <li @click="closeMenu" class="nav-link"><a href="#portfolio">Portfolio</a></li>
        <li @click="closeMenu" class="nav-link"><a href="#contact">Contact Me</a></li>
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
  color: white;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: flex-end;
  z-index: 999;
  padding: 20px 0;
}

nav.open {
  height: 100vh;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
}

nav ul li {
  margin: 0 10px;
}

nav ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

nav ul li a:hover {
  color: #cccccc;
}

.nav-link {
  display: inline;
}

@media (max-width: 767px) {
  .nav-link {
    display: none;
  }

  nav {
    height: 0;
    overflow: hidden;
    transition: height 0.5s;
    justify-content: center;
  }

  nav.open {
    height: 100vh;
  }

  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin: 10px 0;
  }
}
</style>
