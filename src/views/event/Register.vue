<script>
export default{
    props: ['event'],
    methods: {
        register(){
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