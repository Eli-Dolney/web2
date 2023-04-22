<!-- PortfolioComponent.vue -->
<template>
  <!-- ... -->
  <div class="projects-container">
    <ProjectComponent v-for="(project, index) in projects" :key="index" :project="project" />
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
          image: require('@/assets/land.png'),
          codeLink: 'https://github.com/Eli-Dolney/myFirstDatabase',
        },
        {
          title: 'Job Tracker',
          description: 'jah',
          tools: 'Python & Google sheets Api',
          image: require('@/assets/jobtracker.png'),
          codeLink: 'https://github.com/Eli-Dolney/jobtracker',
        },
        // Add more projects here
      ],
    };
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

p {
    padding: 10px 0 75px 0;
    margin: 0 auto;
    max-width: 80%;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  #portfolio {
  text-align: center; /* Center the text */
}

#portfolio .row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects-container {
  display: flex;
  flex-wrap: wrap; /* Allow the container to wrap projects to the next row */
  justify-content: center; /* Center the projects */
  gap: 20px; /* Add some space between the projects */
  margin-top: 20px;
}

.portfolio-project {
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px); /* Set the width of each project to be 50% minus the gap */
  margin: 20px 0; /* Add some margin to the top and bottom */
  position: relative;
  align-items: center;
  border: 1px solid #ccc; /* Add border around the project */
  border-radius: 5px; /* Add rounded corners */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  overflow: hidden; /* Hide any overflowing content */
}

/* Add a media query to make the projects 100% width on smaller screens */
@media (max-width: 768px) {
  .portfolio-project {
    width: 100%;
  }
}

.portfolio-project-image-container {
  flex: 0 0 50%;
  margin: 25px 0;
  overflow: hidden;
  max-height: 330px;
  position: relative;
  width: 100%; /* Added to fix the image alignment */
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
  /* padding: 5px 10px; */
  width: auto;
}

.portfolio-project-image-container:hover .image-links {
  opacity: 1;
}

.image-links a:link,
.image-links a:visited {
  color: white;
}

.image-text h4,
#portfolio .image-text p:last-of-type {
  font-size: 1.2rem;
  padding: 0 0 0 20px;
  text-align: center; /* Added to center the text */
}
  </style>
  