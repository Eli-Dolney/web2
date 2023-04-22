<!-- ProjectComponent.vue -->
<template>
    <div class="portfolio-project">
      <div class="portfolio-project-image-container">
        <img :src="project.image" :alt="project.title" />
        <div class="image-links">
          <a v-if="project.codeLink" :href="project.codeLink" class="btn btn-ghost" target="_blank">View the code!</a>
        </div>
      </div>
      <div class="image-text">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <h4>Languages and tools used</h4>
        <p>{{ project.tools }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectComponent',
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add the CSS styles for the .portfolio-project and related classes here */
  </style>
  