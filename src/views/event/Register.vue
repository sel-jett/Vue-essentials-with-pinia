<script>
export default{
    props: ['event'],
    inject: ['GStore'],
    methods: {
        register(){

            this.GStore.flashMessage = 'Youre successfuly registred for '+this.event.title

            setTimeout(()=>{
                this.GStore.flashMessage = ''
            },3000)
            
            this.$router.push({
                name: 'event-details'
            })
        }
    }
}
</script>

<template>
        <p>Register for the event here</p>
        <button @click="register">Register</button>
</template>
 
<style>
</style>