<template>
    <div class="add-form">
        <form class="add-contact-form">
            <label for="add-contact" class="add-contact-title">
                Добавить контакт
            </label>
            <input 
            v-model.trim="newName" 
            id="add-contact" name="add-contact" type="text"
            />
            <input 
            v-model.trim="newEmail" 
            id="add-contact" name="add-contact" type="text"
            />
            <input 
            @click.prevent="addContact" 
            class="add-contact-submit" value="Добавить" type="submit"
            />
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newName: '',
            newEmail: ''
        }
    },
    methods: {
        //Проверка введены ли данные
        validate(){
            if (this.newName && this.newEmail)
                {
                return true;
            }
            else{
                alert("Вы ввели не все данные!");
                return false;
            }
        },
        addContact(){
            if (this.validate()){
                const newContact = {
                    //id установит сервер
                    name: this.newName,
                    email: this.newEmail,
                    userId: Date.now()
                };
                this.$emit('add-contact', newContact);
            }
        }
    }
}
</script>
<style scoped>
.add-form{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem;
   /* max-width: 60%;*/
}
@media(max-width: 400px){
    .add-form{
        flex-direction: column;
    }
}
@media(max-width: 767px){
    input{
    width: 100%;
    margin-top: .5rem;
}
}
.add-contact-title{

}
.add-contact-submit{
    height: 2.2rem;
}
#add-contact{
    min-width: 250px;
}
</style>