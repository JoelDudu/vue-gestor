<template>
    
</template>

<script>
    export default {
        data: () => ({
            user: null
        }),
        async mounted()
        {
          await this.VerificarHost();  
        },
        methods:{
           async VerificarHost(){
               while (this.$store.state.user === null){
                this.user = await this.$store.state.user
                if(this.user)
                    break;
                    this.$router.push('/dashboard')   
               }  
                console.log(this.user)
            }
        }
    }
</script>

<style scoped>

</style>