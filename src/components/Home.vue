<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/meetup/new" class="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
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

new Vue({
  el: '#app'
})
