<template>
    <section id="skills-section" class="skills-section">
      <h2>Skills</h2>
      <div class="skills-wrapper">
        <div class="skills-container">
          <div class="languages">
            <h3>Languages</h3>
            <div class="language-items">
              <div v-for="language in languages" :key="language.id" class="language-item">
                <img :src="language.image" :alt="language.name" />
                <p>{{ language.name }}</p>
              </div>
            </div>
          </div>
          <!-- 
          <div class="certifications">
            <h3>Certifications</h3>
            <div class="certification-items">
              <div v-for="cert in certifications" :key="cert.id" class="certification-item">
                <img :src="cert.image" :alt="cert.name" />
                <p>{{ cert.name }}</p>
              </div>
            </div>
          </div>
          <div class="other">
            <h3>Other</h3>
            <div class="other-items">
              <div v-for="otherSkill in otherSkills" :key="otherSkill.id" class="other-item">
                <img :src="otherSkill.image" :alt="otherSkill.name" />
                <p>{{ otherSkill.name }}</p>
              </div>
            </div>
          </div>
        -->
        </div>
      </div>
    </section>
  </template>

<script>


export default {
  name: 'SkillsComponent',
  directives: {
},
  data() {
    return {
      languages: [
        { id: 1, name: 'HTML', image: require('@/assets/html.png'), show: false },
        { id: 2, name: 'Vue.js', image: require('@/assets/vue.png'), show: false },
        { id: 3, name: 'Python', image: require('@/assets/python.png'), show: false },
        { id: 4, name: 'JavaScript', image: require('@/assets/JavaScript.png'), show: false },
        { id: 5, name: 'CSS', image: require('@/assets/css.png'), show: false },
      ],
      /*
      certifications: [
        { id: 1, name: 'Certification 1', image: require('@/assets/html.png'), show: false },
        { id: 2, name: 'Certification 2', image: require('@/assets/vue.png'), show: false },
        { id: 3, name: 'Certification 3', image: require('@/assets/python.png'), show: false },
        { id: 4, name: 'Certification 4', image: require('@/assets/JavaScript.png'), show: false },
        { id: 5, name: 'Certification 5', image: require('@/assets/css.png'), show: false },
      ],
      otherSkills: [
        { id: 1, name: 'Other Skill 1', image: require('@/assets/html.png'), show: false },
        { id: 2, name: 'Other Skill 2', image: require('@/assets/vue.png'), show: false },
        { id: 3, name: 'Other Skill 3', image: require('@/assets/python.png'), show: false },
        { id: 4, name: 'Other Skill 4', image: require('@/assets/JavaScript.png'), show: false },
        { id: 5, name: 'Other Skill 5', image: require('@/assets/css.png'), show: false },
      ],
      */
    };
  },
  methods: {
    showImages() {
      setTimeout(() => {
        this.languages.forEach((language, index) => {
          setTimeout(() => {
            language.show = true;
          }, index * 200);
        });
        this.certifications.forEach((cert, index) => {
          setTimeout(() => {
            cert.show = true;
          }, index * 200);
        });
        this.otherSkills.forEach((otherSkill, index) => {
          setTimeout(() => {
            otherSkill.show = true;
          }, index * 200);
        });
      }, 200);
    },
  },
};
</script>
  
<style scoped>
.skills-section {
  text-align: left;
  padding: 20px;
  background-color: #1A1E26;
  background-color: #0D0D0D;
  
}
h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  color: aliceblue;
}
h3{
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  color: aliceblue;
}
.skills-wrapper {
  display: flex;
  justify-content: center;
  
}

.skills-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.languages,
.certifications,
.other {
  width: 100%;
  margin-bottom: 20px;
  
}

.language-items,
.certification-items,
.other-items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  
  background-color: #1A1E26;
  box-shadow: inset 0 0 10px #DB2EF2; 
}

.language-item,
.certification-item,
.other-item {
  width: calc(20% - 10px);
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
}

.languages:hover .language-item:nth-child(1),
.certifications:hover .certification-item:nth-child(1),
.other:hover .other-item:nth-child(1) {
  opacity: 1;
  transition-delay: 0s;
}

.languages:hover .language-item:nth-child(2),
.certifications:hover .certification-item:nth-child(2),
.other:hover .other-item:nth-child(2) {
  opacity: 1;
  transition-delay: 0.2s;
}

.languages:hover .language-item:nth-child(3),
.certifications:hover .certification-item:nth-child(3),
.other:hover .other-item:nth-child(3) {
  opacity: 1;
  transition-delay: 0.4s;
}

.languages:hover .language-item:nth-child(4),
.certifications:hover .certification-item:nth-child(4),
.other:hover .other-item:nth-child(4) {
  opacity: 1;
  transition-delay: 0.6s;
}

.languages:hover .language-item:nth-child(5),
.certifications:hover .certification-item:nth-child(5),
.other:hover .other-item:nth-child(5) {
  opacity: 1;
  transition-delay: 0.8s;
}

.language-item img,
.certification-item img,
.other-item img {
  width: 50%;
  height: 50%;
  object-fit: cover;
  
}
@media screen and (max-width: 1200px) {
  .language-item,
  .certification-item,
  .other-item {
    width: calc(33.33% - 10px);
  }
}

@media screen and (max-width: 768px) {
  .language-item,
  .certification-item,
  .other-item {
    width: calc(50% - 10px);
  }
}

@media screen and (max-width: 480px) {
  .language-item,
  .certification-item,
  .other-item {
    width: 100%;
  }
}
</style>

