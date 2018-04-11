<template>
    <div id="app">
        <audio autoplay>
        <source src="../static/bk.mp3" type="audio/mpeg">
        </audio>
      	<router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
html, body {
    margin: 0;
    height: 100%;
    width: 100%;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    height: 100%;
    width: 100%;
}

.content-text {
    margin: auto;
    width: 80%;
}

.content-text h4 {
    padding-bottom: 8px;
    border-bottom: 1px solid #545C64;
}
</style>
