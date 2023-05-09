<template>
  <section id="contact">
    <div class="section-wrapper">
      <div class="container">
        <h1>Contact Me</h1>
        <div class="accordion">
          <div class="accordion-panel" @click="toggleAccordion">
            <div class="accordion-panel-header">
              <h2 class="accordion-title">LinkedIn</h2>
              <img class="panel-image" src="../assets/linked.png" />
              <a
                class="accordion-link-button"
                href="https://bit.ly/Linkedin-Eli"
                target="_blank"
                rel="noopener noreferrer"
              >View Profile</a>
            </div>
          </div>

          <div class="accordion-panel" @click="toggleAccordion">
            <div class="accordion-panel-header">
              <h2 class="accordion-title">GitHub</h2>
              <img class="panel-image" src="../assets/GitHub-Mark.png" />
              <a
                class="accordion-link-button"
                href="https://bit.ly/Github-Eli"
                target="_blank"
                rel="noopener noreferrer"
              >View Profile</a>
            </div>
          </div>

          <div class="accordion-panel" @click="toggleAccordion">
            <div class="accordion-panel-header">
              <h2 class="accordion-title">Instagram</h2>
              <img class="panel-image" src="../assets/Instagram.png" />
              <a
                class="accordion-link-button"
                href="https://bit.ly/Insta-Eli"
                target="_blank"
                rel="noopener noreferrer"
              >View Profile</a>
            </div>
          </div>

          <div class="accordion-panel" @click="toggleAccordion">
            <div class="accordion-panel-header">
              <h2 class="accordion-title">Email</h2>
              <img class="panel-image" src="../assets/Gmail.png" />
              <a
                class="accordion-link-button"
                href="mailto:elid3dev@gmail.com"
              >Send Email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "ContactComponent",
  methods: {
    toggleAccordion(event) {
      const activePanel = event.target.closest(".accordion-panel");
      if (!activePanel) return;

      const panels = activePanel.parentElement.querySelectorAll(".accordion-panel");

      panels.forEach((panel) => {
        panel.classList.remove("expanded");
      });

      activePanel.classList.add("expanded");
    },
  },
};
</script>




<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  color-scheme: dark;
 

}

#contact {
  padding: 50px 0;
  
  background-color: #1A1E26;
}


h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  color: aliceblue;
  border: solid 2px blue;
}


img {
  max-width: 100%;
  display: block;
}

.wrapper {
  max-width: 50rem;
  margin-inline: auto;
  padding-inline: 1rem;
  
}

.container {
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;
  border: solid 2px red;
  background-color: #1A1E26;
}

.accordion {
  --_button-size: 3rem;
  --_panel-padding: 0.75rem;
  --_panel-gap: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  contain: content;
  padding: 0.5rem;

  margin-top: 4rem;
  border: solid 2px #3C308C;
  background-color: #283040
}

@media (min-width: 45em) {
  .accordion {
    flex-direction: row;
    height: 20rem;
  }
}

.accordion * {
  margin: 0;
}

.accordion-link-button-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.accordion-link-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--_panel-color);
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s;
}

.accordion-link-button:hover {
  background-color: hsl(0 0% 20%);
}

.accordion-panel {
  position: relative;
  isolation: isolate;
  flex-basis: calc((var(--_panel-padding) * 1.5) + var(--_button-size));
  overflow: hidden;
  padding: var(--_panel-padding);
  padding-right: calc(var(--_panel-padding) * 4);
  border-radius: calc(((var(--_panel-padding) * 1.5) + var(--_button-size)) / 2);
  border: solid 2px #3C308C;
  background-color: #283040;
}

@media (prefers-reduced-motion: no-preference) {
  .accordion-panel {
    transition: flex-basis 500ms, flex-grow 500ms;
  }
}

.accordion-panel:nth-of-type(1) {
  --_panel-color: hsl(160, 70%, 50%);
}
.accordion-panel:nth-of-type(2) {
  --_panel-color: hsl(184, 70%, 50%);
}
.accordion-panel:nth-of-type(3) {
  --_panel-color: hsl(220, 70%, 50%);
}
.accordion-panel:nth-of-type(4) {
  --_panel-color: hsl(350, 70%, 50%);
}
.accordion-panel:nth-of-type(5) {
  --_panel-color: hsl(20, 70%, 50%);
}

.accordion-panel:has([aria-expanded="true"]) {
  flex-basis: clamp(12rem, 30vh, 15rem);
  flex-grow: 1;
}

.accordion-trigger {
  outline: 0;
}

.accordion-panel:focus-within {
  outline: 3px solid var(--_panel-color);
  outline-offset: 4px;
}

.accordion-content > p {
  transform: translateY(2rem);
  opacity: 0;

  margin-left: calc(var(--_button-size) + var(--_panel-gap));
}

@media (prefers-reduced-motion: no-preference) {
  .accordion-panel.expanded {
  flex-basis: clamp(12rem, 30vh, 15rem);
  flex-grow: 1;
}

@media (prefers-reduced-motion: no-preference) {
  .accordion-panel.expanded p {
    transition: transform 500ms 500ms, opacity 500ms 500ms;
  }
}

  .accordion-panel.expanded p {
    transform: translateY(0);
    opacity: 1;
  }
}



.accordion-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: aliceblue;
  position: relative;
  isolation: isolate;
  border: solid 2px green;
  display: grid;
  align-items: center;
  writing-mode: vertical-lr;
}

@media (max-width: 44.999em) {
  .accordion-title::after {
    content: "";
    position: absolute;
    left: calc((var(--_panel-gap) + var(--_button-size)) * -1);
    width: calc(100% + (var(--_button-size) * 2));
    height: var(--_button-size);
    background: hsl(0 0% 0% / 0.5);
    z-index: -1;
    border-radius: 100vw;
  }
}

.accordion-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  transition: filter 500ms;
}

.accordion-panel:has([aria-expanded="true"]) .accordion-image {
  filter: brightness(0.5);
}

.accordion-trigger {
  display: flex;
  align-items: center;
  gap: var(--_panel-gap);
  flex-direction: row-reverse;
  background: transparent;
  border: 0;
  padding: 0;
  border: solid 2px purple;
  width: 20px; /* Adjust this value according to your desired icon size */
  height: 25px;
}

.accordion-icon {
  fill: var(--_panel-color);
  background: hsl(0 0% 0% / 0.55);
  width: var(--_button-size);
  aspect-ratio: 1 / 1;
  padding: 0.75rem;
  border-radius: 50%;
  z-index: 10;

}

.trigger-icon {
  width: 150px; /* Adjust this value according to your desired icon size */
  height: 150px;
  object-fit: contain;
}

@media (max-width: 600px) {
  .trigger-icon {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 400px) {
  .trigger-icon {
    width: 25px;
    height: 25px;
  }
}

.accordion-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.panel-image {
  width: 200px;
  height: 200px;
  margin: 0 15px;
  
  
}

.accordion-link-button {
  text-decoration: none;
  background-color: #3C308C;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
}
</style>
