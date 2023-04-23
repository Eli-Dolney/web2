<!-- PortfolioComponent.vue -->
<template>
  <!-- ... -->
  <div class="projects-wrapper">
    <div class="projects-container">
      <ProjectComponent v-for="(project, index) in projects" :key="index" :project="project" :isEven="index % 2 === 0" />
    </div>
  </div>
  <!-- ... -->
</template>



<script>
import ProjectComponent from './ProjectComponent.vue';

export default {
  name: 'PortfolioComponent',
  components: {
    ProjectComponent,
  },
  data() {
    return {
      projects: [
        {
          title: 'PostgreSQL Database',
          description: 'First Database',
          tools: 'Python, AWS, PostgreSQL',
          image: require('@/assets/jobtracker.png'),
          codeLink: 'https://github.com/Eli-Dolney/myFirstDatabase',
        },
        {
          title: 'Job Tracker',
          description: 'jah',
          tools: 'Python & Google sheets Api',
          image: require('@/assets/jobtracker.png'),
          codeLink: 'https://github.com/Eli-Dolney/jobtracker',
        },
        {
          title: 'Cool Cards',
          description: 'jah',
          tools: 'Python & Google sheets Api',
          image: require('@/assets/jobtracker.png'),
          codeLink: 'https://github.com/Eli-Dolney/cool',
        },
        // Add more projects here
      ],
    };
  },
};
</script>


  
<style scoped>
.section-wrapper {
  padding: 10px;
  width: 100%;
  margin: 0 auto;
}
.projects-wrapper {
  max-width: 1400px; /* Or use 90% or any value that suits your preference */
  margin: 0 auto;
  padding: 30px 15px;
}

p {
  padding: 10px 0 75px 0;
  margin: 0 auto;
  max-width: 80%;
  width: 100vw;
  display: flex;
  justify-content: center;
}

#portfolio {
  text-align: center;
}

#portfolio .row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 20px;
  max-width: 1400px; /* Or use 90% or any value that suits your preference */
  margin: 0 auto;
  padding: 30px 15px;
}



.portfolio-project {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 100%;
}

@media (max-width: 768px) {
  .portfolio-project {
    flex-direction: column;
  }
}

.portfolio-project-image-container {
  flex: 1;
  text-align: center;
  margin: 25px 0;
}

.portfolio-project-image-container img {
  object-fit: contain;
  width: 100%;
  max-height: 330px;
  transform: scale(1);
  transition: transform 0.5s, opacity 0.2s, filter 0.2s;
}

.portfolio-project-image-container:hover img {
  transform: scale(1.05);
  filter: grayscale(100%);
  opacity: 0.2;
}

.image-links {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  opacity: 0;
}

.image-links .btn {
  margin: 5px 0;
  width: auto;
}

.portfolio-project-image-container:hover .image-links {
  opacity: 1;
}

.image-links a:link,
.image-links a:visited {
  color: white;
}

.image-text {
  flex: 1;
}

.image-text h4,
.image-text h4,
#portfolio .image-text p:last-of-type {
  font-size: 1.2rem;
  padding: 0 0 0 20px;
  text-align: center;
}

/* Add styles to handle the alternating layout of project images and text */
.portfolio-project:nth-child(even) .portfolio-project-image-container {
  order: 2;
}

.portfolio-project:nth-child(even) .image-text {
  order: 1;
  text-align: right;
}

.portfolio-project:nth-child(odd) .image-text {
  text-align: left;
}

@media (max-width: 768px) {
  .portfolio-project:nth-child(even) .portfolio-project-image-container,
  .portfolio-project:nth-child(odd) .portfolio-project-image-container {
    order: 1;
  }

  .portfolio-project:nth-child(even) .image-text,
  .portfolio-project:nth-child(odd) .image-text {
    order: 2;
    text-align: center;
  }
}
</style>