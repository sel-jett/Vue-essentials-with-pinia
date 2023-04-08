<script setup>
import EventCard from '../components/EventCard.vue'
import { ref } from 'vue';
const events = ref(
 [{
  id: 5928101,
  category: 'animal welfar',
  title: 'Cat Luna',
  time: '12:00',
  date: 'Junuary 28, 2022'
},
 {
  id: 5101,
  category: 'animal welfar',
  title: ' Luna',
  time: '12:00',
  date: 'Junuary 28, 2022'
},
 {
  id: 5,
  category: 'animal welfar',
  title: 'Cat',
  time: '12:00',
  date: 'Junuary 28, 2022'
},
 {
  id: 5901,
  category: 'animal welfar',
  title: 'Cat Luna',
  time: '12:00',
  date: 'Junuary 28, 2022'
}]
)

</script>

<template>
 <div class="events">
  <EventCard v-for="event in events" :key="event.id" :event="event" />
 </div>
</template>

<style scoped>
  .events{
   display: flex;
   flex-direction: column;
   align-items: center;
  }
</style>
