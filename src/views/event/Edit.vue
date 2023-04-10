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
            console.log(error)
        })
    }
}
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div id="nav">
            <RouterLink :to="{name: 'event-details', params: {id} }">Details</RouterLink> |
            <RouterLink :to="{name: 'event-edit', params: {id} }">Edit</RouterLink> |
            <RouterLink :to="{name: 'event-register', params: {id} }">Register</RouterLink>
        </div>
        <p>Edit the event here</p>
    </div>
</template>