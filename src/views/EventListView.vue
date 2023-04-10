<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventService'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(3, this.page)
        .then(response => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch(error => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage(){
      let totalPages = Math.ceil(this.totalEvents/2)

      return this.page < totalPages
    }
  }
}
</script>

<template>
 <div class="events">
  <EventCard v-for="event in events" :key="event.id" :event="event" />
  <div class="pagination">
    <RouterLink
    id="page-prev"
    :to="{ name: 'event-list', query: { page: page - 1 } }"
    rel="prev"
    v-if="page != 1"
    >&#60; Previous</RouterLink>
    <router-link
    id="page-next"
    :to="{ name: 'event-list', query: { page: page + 1 } }"
    rel="next"
    v-if="hasNextPage"
    > Next &#62;</router-link
    >
  </div>
 </div>
</template>

<style scoped>
  .events{
   display: flex;
   flex-direction: column;
   align-items: center;
  }
  .pagination{
    display: flex;
    width: 290px;
  }
  .pagination a {
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
  }
  #page-prev{
    text-align: left;
  }
  #page-next{
    text-align: right;
  }
</style>
