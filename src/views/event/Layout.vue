<script>
import EventService from '../../services/EventService.js'
export default{
    props: ['id'],
    data(){
        return {
            event: null
        }
    },
    
    created() {
        EventService.getEvent(this.id).then((response)=>{this.event=response.data}).catch((error)=>{
            if(error.response && error.response.status == 404){
                
            }

            this.$router.push({
                name: 'networkerror'
            })
        })
    }
}
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div id="nav">
            <RouterLink :to="{name: 'event-details'}">Details</RouterLink> |
            <RouterLink :to="{name: 'event-edit'}">Edit</RouterLink> |
            <RouterLink :to="{name: 'event-register' }">Register</RouterLink>
        </div>
        <RouterView :event="event" />
    </div>
</template>

<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}</style>