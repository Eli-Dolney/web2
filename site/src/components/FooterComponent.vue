<template>
    <footer>
      <div class="footer-container">
        <p>&copy; 2023 Eli Dolney. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #1A1E26;;
    color: #fff;
    padding: 1rem;
    font-family: Arial, sans-serif;
  }
  
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  }
  </style>
  