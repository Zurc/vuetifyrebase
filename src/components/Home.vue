<template>
  <div>
    <p>This is {{title}} component</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'hoome'
    }
  }
}
</script>

new Vue({
  el: '#app'
})
