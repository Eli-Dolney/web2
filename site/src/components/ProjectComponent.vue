<!-- ProjectComponent.vue -->
<template>
  <div class="portfolio-project">
    <div class="project-content">
      <div class="portfolio-project-image-container">
        <a v-if="project.codeLink" :href="project.codeLink" class="btn btn-ghost" target="_blank">
            <img :src="project.image" :alt="project.title" />
            <div class="overlay">
                <div class="text">View Code</div>
            </div>
        </a>
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
  padding: px;
  width: 100%;
  
  box-sizing: border-box; /* Added box-sizing property */
  background-color: #0D0D0D;
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
  box-shadow: inset 0 0 10px #DB2EF2; /* Added red border */
  display: flex; /* Add this to make sure the text container stretches to the same height as the image container */
  flex-direction: column;
  background-color: #1A1E26;
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
  color: aliceblue;
}

.image-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 10px;
  color: aliceblue;
}

.image-text h4 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: aliceblue;
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
/* CSS */

.portfolio-project-image-container {
  position: relative;
  /* Other styles... */
}

.portfolio-project-image-container img {
  /* Other styles... */
  transition: 0.5s ease;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #DB2EF2;
}

.portfolio-project-image-container:hover .overlay {
  opacity: 0.7;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

</style>
