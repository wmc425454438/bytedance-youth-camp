<template>
  <div id="container">
    <div id="sidebar">
      <span>Row</span>
      <span>Col</span>
      <span>Button</span>
    </div>
    
    <div id="editpanel">
      <div class="row"></div>
      <div class="col"></div>
      <div class="button"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
}
#container {
  display: flex;
  width: 100%;
  height: 100%;
}
#sidebar {
  width: 160px;
  background-color: #eee;
}
#sidebar > * {
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 10px;
  box-sizing: border-box;
  border: solid 1px #000;
  user-select: none;
}
#editpanel {
  flex: 1;
}

.row {
  width: 100%;
  min-height: 300px;
  background-color: blue;
}
</style>
