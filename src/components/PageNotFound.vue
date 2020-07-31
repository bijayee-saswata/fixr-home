<template>
  <section>  
    <div class="content">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <span>That's all we know.</span>
    </div>
    <div class="image">
        <img src="../assets/robot.png" alt="Page not found">
    </div>
  </section>
</template>

<script>
export default {
    name : 'PageNotFound'
}
</script>

<style>
section {
    height: 95vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    box-sizing: border-box;
}
@media (max-width: 570px) {
    section {
        display: block;
    }
}
</style>