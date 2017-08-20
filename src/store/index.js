import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        'imageUrl': 'http://itsacitything.com/sites/default/files/london-banner_0_2.jpg',
        'id': 'jas;dlkfja;slkdfj',
        'title': 'Meetup in London',
        date: '2017-07-17'
      },
      {
        'imageUrl': 'http://portugalaupair.com/images/paris-banner-new-0415.jpg',
        'id': 'jasdlkfjaslkdfj',
        'title': 'Meetup in Paris',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'aasjkdfhksj',
      registeredMeetups: ['jasdlkfjaslkdfj']
    }
  },
  mutations: {},
  actions: {},
  // getters to use this meetups in other parts of the app
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
