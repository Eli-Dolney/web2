<!-- ProjectComponent.vue -->
<template>
  <div class="portfolio-project">
    <div class="project-content">
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
    .project-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.portfolio-project:nth-child(even) .project-content {
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .project-content {
    flex-direction: column;
  }
  .portfolio-project:nth-child(even) .project-content {
    flex-direction: column;
  }
}
  </style>
  