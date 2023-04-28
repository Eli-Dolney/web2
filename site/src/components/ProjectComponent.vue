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
  justify-content: space-between;
  align-items: center;
  align-items: stretch;
  padding: 40px;
  width: 100%;
  border: 5px solid green;
  box-sizing: border-box; /* Added box-sizing property */
}

.portfolio-project:nth-child(even) .project-content {
  flex-direction: row-reverse;
}

.portfolio-project-image-container {
  flex: 1; /* Change this to 1 to make the image container take up 1/3 of the project-content */
  padding: 20px;
  position: relative; /* Add this to position the image inside the container */
  overflow: hidden; /* Add this to ensure the image stays within the container */
  min-height: 300px; /* Adjust the value as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red
}

.portfolio-project-image-container img {
  
  position: absolute; /* Add this to position the image */
  top: 50%; /* Center the image vertically */
  left: 50%; /* Center the image horizontally */
  width: 100%; /* Add this to make the image fill the container width */
  height: 100%; /* Add this to make the image fill the container height */
  object-fit: cover; /* Add this to maintain the aspect ratio of the image */
  transform: translate(-50%, -50%); /* Add this to ensure the image is centered */
}
.image-text {
  flex: 2;
  padding: 20px;
  border: 2px solid blue; /* Added red border */
  display: flex; /* Add this to make sure the text container stretches to the same height as the image container */
  flex-direction: column;
}

@media (max-width: 768px) {
  .project-content {
    flex-direction: column;
  }
  .portfolio-project:nth-child(even) .project-content {
    flex-direction: column;
  }
}

.image-text h3 {
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.image-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 10px;
}

.image-text h4 {
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.btn {
  background-color: #333;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #555;
}

.btn.btn-ghost {
  background-color: transparent;
  border: 2px solid #333;
  color: #333;
}

.btn.btn-ghost:hover {
  background-color: #333;
  color: white;
}
</style>
