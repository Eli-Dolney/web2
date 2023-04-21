<template>
  <div class="screen-container">
    <div class="screen screen-1">
      <div class="screen-image"></div>
      <div class="screen-overlay"></div>
      <div class="screen-content">
        <i class="screen-icon fa-brands fa-codepen"></i>
        <div class="screen-user">
          <span class="name" data-value="Eli Dolney">Eli Dolney</span>
          <a class="link" href="https://bit.ly/Github-Eli" target="_blank">@VirtualCereal</a>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "CenterpieceComponent",
  mounted() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const screens = document.querySelectorAll(".screen");

    screens.forEach((screen) => {
      const name = screen.querySelector(".name");

      screen.onmouseenter = () => {
        let iteration = 0;
        let interval;

        clearInterval(interval);

        interval = setInterval(() => {
          name.innerText = name.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return name.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= name.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 5;
        }, 100);
      };
    });
  },
};
</script>



  
  <style scoped>
.screen-container {
    padding-top: calc(100vh / 3.5);
    display: flex;
    flex-wrap: wrap; /* This will make the screens wrap to the next row on smaller screens */
    justify-content: center; /* Centers the screens horizontally */
    gap: 20px; /* Add space between screens */
}

.screen {
    width: 250px;
    display: flex;
    border: 3px solid rgb(var(--primary-rgb) / 80%);
    aspect-ratio: 10 / 16;
    border-radius: 1rem;
    background-color: rgb(var(--primary-rgb) / 15%);
    overflow: hidden;
    position: relative;
    z-index: 10;
}

.screen:after,
.screen:before {
  content: "";
  height: 5px;
  position: absolute;
  z-index: 4;
  left: 50%;
  translate: -50% 0%;
  background-color: white;
}

.screen:before {
    width: 15%;
    top: 0rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  
  .screen:after {
    width: 25%;
    bottom: 0rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  
  @keyframes pan-overlay {
    from {
      background-position: 0% 0%;
    }
    
    to {
      background-position: 0% -100%;
    }
  }
  
  .screen-overlay {    
    background: linear-gradient(
      rgb(var(--primary-rgb) / 0.15),
      rgb(var(--primary-rgb) / 0.15) 3px,
      transparent 3px,
      transparent 9px
    );
    background-size: 100% 9px;
    height: 100%;
    width: 100%;
    animation: pan-overlay 22s infinite linear;
    position: absolute;
    z-index: 2;
    left: 0px;
    top: 0px;
  }

  @keyframes pan-image {
    0% {
      background-position: 36% 20%;
      background-size: 130%;
    }
  
    20% {
      background-position: 30% 15%;
      background-size: 130%;
    }
  
    20.0001% { /* -- View 2 -- */
      background-position: 45% 3%;
      background-size: 200%;
    }
  
    40% {
      background-position: 49% 55%;
      background-size: 200%;
    }
  
    40.0001% { /* -- View 3 -- */
      background-position: 80% 20%;
      background-size: 250%;
    }
  
    60% {
      background-position: 84% 15%;
      background-size: 250%;
    }
  
    60.0001% { /* -- View 4 -- */
      background-position: 0% 0%;
      background-size: 250%;
    }
  
    80% {
      background-position: 15% 4%;
      background-size: 250%;
    }
  
    80.0001% { /* -- View 5 -- */
      background-position: 80% 5%;
      background-size: 250%;
    }
  
    100% {
      background-position: 72% 10%;
      background-size: 250%;
    }
  }
  
  .screen-1 > .screen-image {
    background-image: url("../assets/evMoving.jpg");
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    left: 0px;
    top: 0px;
    background-size: 300%;
    background-position: 0% 0%;
    
    opacity: 0.6;
    animation: pan-image 15s linear infinite;
  }

  
  .screen > .screen-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    gap: 4rem;
    position: relative;
    z-index: 3;
    margin: 1rem;
    padding-bottom: 6rem;
    border: 1px solid rgb(var(--primary-rgb) / 50%);
    border-radius: 0.6rem;
  }
  
  .screen > .screen-content > .screen-icon {
    color: black;
    font-size: 4rem;
    text-shadow: 0px 0px 0.5rem white;
  }
  
  .screen > .screen-content > .screen-user{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
  }
  
  .screen > .screen-content > .screen-user:before,
  .screen > .screen-content > .screen-user:after {
    content: "";
    position: absolute;
    top: 0px;
    background-color: rgb(var(--primary-rgb));
    border-radius: 1rem;
    box-shadow: 0px 0px 8px 3px rgb(var(--primary-rgb) / 60%);
  }
  
  .screen > .screen-content > .screen-user:before {
    height: 2px;
    width: 50px;
    translate: -20px -1rem;
    opacity: 0.75;
  }
  
  .screen > .screen-content > .screen-user:after {
    height: 3px;
    width: 30px;
    translate: 26px calc(-1rem - 0.5px);
  }
  
  .screen > .screen-content > .screen-user > :is(.name, .link) {
    font-family: "Source Code Pro", monospace;
    color: black; 
    text-align: center;
    text-transform: uppercase; 
  }
  
  .screen > .screen-content > .screen-user > .name {
    position: relative;
    font-size: 2.5rem;
    font-weight: 400;
  }
  
  .screen > .screen-content > .screen-user > .name:before,
  .screen > .screen-content > .screen-user > .name:after {
    content: "";
    height: 4px;
    width: 4px;
    position: absolute;
    border: 2px solid black;
    border-radius: 2px;
  }
  
  .screen > .screen-content > .screen-user > .name:before {
    top: 55%;
    right: -1.5rem;
  }
  
  .screen > .screen-content > .screen-user > .name:after {
    top: 45%;
    left: -1.5rem;  
  }
  
  .screen > .screen-content > .screen-user > .link {  
    opacity: 0.8;
    font-size: 1rem;
    text-shadow: 0px 0px 0.5rem white;
    font-weight: 400;
    letter-spacing: 0.15rem;
    text-decoration: none;
  }
  
  .screen > .screen-content > .screen-user > .link:is(:hover, :focus) {  
    text-decoration: underline; 
  }
  
  @media(max-width: 700px) {
    .screen {
      scale: 0.6;
      margin-bottom: 0rem;
    }
  }
  
  </style>
  