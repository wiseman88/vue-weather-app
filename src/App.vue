<template>
  <div id="app">
    <!-- <Navbar/> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
</script>
<style lang="scss">
@import "uikit/src/scss/variables-theme.scss";
@import "uikit/src/scss/mixins-theme.scss";
@import "uikit/src/scss/uikit-theme.scss";
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: inherit;
}

// classes

// .container {
//   max-width: 1440px;
//   padding: 0 15px;
//   margin: 0 auto;
//   height: 100%;
// }

</style>
