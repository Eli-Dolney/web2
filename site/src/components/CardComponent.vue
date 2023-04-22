<template>
    <div
      class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card"
    >
      <div class="card" :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardComponent",
    props: ["dataImage"],
    data: () => ({
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    }),
    mounted() {
      this.width = this.$refs.card.offsetWidth;
      this.height = this.$refs.card.offsetHeight;
    },
    computed: {
      mousePX() {
        return this.mouseX / this.width;
      },
      mousePY() {
        return this.mouseY / this.height;
      },
      cardStyle() {
        const rX = this.mousePX * 30;
        const rY = this.mousePY * -30;
        return {
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
        };
      },
      cardBgTransform() {
        const tX = this.mousePX * -40;
        const tY = this.mousePY * -40;
        return {
          transform: `translateX(${tX}px) translateY(${tY}px)`,
        };
      },
      cardBgImage() {
        return {
          backgroundImage: `url(${this.dataImage})`,
        };
      },
    },
    methods: {
      handleMouseMove(e) {
        this.mouseX =
          e.pageX - this.$refs.card.offsetLeft - this.width / 2;
        this.mouseY =
          e.pageY - this.$refs.card.offsetTop - this.height / 2;
      },
      handleMouseEnter() {
        clearTimeout(this.mouseLeaveDelay);
      },
      handleMouseLeave() {
        this.mouseLeaveDelay = setTimeout(() => {
          this.mouseX = 0;
          this.mouseY = 0;
        }, 1000);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add the provided styles here */
  p {
    line-height: 1.5em;
  }

  h1 + p, p + p {
    margin-top: 10px;
  }

  /* Card component styles */
  .card-wrap {
    position: relative;
    width: 320px;
    height: 480px;
    cursor: pointer;
    perspective: 1000px;
  }

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }

  .card-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform: translateZ(-10px);
  }

  .card-info {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateZ(10px);
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
