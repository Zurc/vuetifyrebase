<template>
  <v-container>
    <!-- buttons -->
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/meetup/new" class="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <!-- carousel -->
    <v-layout row class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item 
            v-for="(meetup,i) in meetups" 
            :src="meetup.imageUrl" 
            :key="meetup.id">
            <div class="title">{{meetup.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <!-- string -->
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups!.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      meetups: [
        {'imageUrl': 'http://blog.thetrainline.com/wp-content/uploads/2015/08/london-blog-banner-skyline-days-out.png', 'id': 'jas;dlkfja;slkdfj', 'title': 'Meetup in London'},
        {'imageUrl': 'http://portugalaupair.com/images/paris-banner-new-0415.jpg', 'id': 'jas;dlkfja;slkdfj', 'title': 'Meetup in Paris'}
      ]
    }
  }
}
</script>

<style>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>

new Vue({
  el: '#app'
})
