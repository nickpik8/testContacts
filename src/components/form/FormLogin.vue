<template>
    <div class="input-form">
        <form @submit.prevent="login" id="auth">
            <label for="login">Логин</label>
            <input 
                v-model="email" 
                id="login" name="login" type="text">
            <label for="password">Пароль</label>
            <input 
                v-model="password" 
                id="password" name="password" type="password">
            <input value="ВОЙТИ" type="submit"/>
        </form>
    </div>
</template>
<script>
export default {
    name: "FormLogin",
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        async login(){
            try{
                await this.$store.dispatch('login', {email: this.email, password: this.password })
                this.$router.push('/contacts')
            }
            catch(e){}
        }
    }
}
</script>
<style scoped>
.input-form{
    display: flex;
    justify-content: center;
}
#auth{
    display: flex;
    flex-direction: column;
    min-width: 300px;
    border: 1px solid #e8e8e8;
    border-radius: .5rem;
    padding: 3%;
    box-shadow: 0px 0px 8px 1px #ccc;
}
#auth input{
    margin-bottom: 1.5rem;
}
#auth input:last-child{
    margin-bottom: 0;
}
@media (max-width: 450px){
    .input-form{
        width: 95%;
    }
    #auth{
        min-width: 85%;
    }
}
</style>
