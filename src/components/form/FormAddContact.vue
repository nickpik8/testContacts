<template>
    <div class="add-form">
        <div class="big-title add-title">
            Добавить контакт
        </div>
        <form class="add-contact-form">
            <label for="add-name">
                ФИО
            </label>
            <input 
                v-model.trim="newName" 
                class="add-contact" name="add-name" type="text"
            />
            <label for="add-name">
                E-mail
            </label>
            <input 
                v-model.trim="newEmail" 
                class="add-contact" name="add-email" type="text"
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
<style lang="scss" scoped>
.add-form{
    display: flex;
    flex-direction: column;
    margin: 1rem;
}
.add-title{
    margin-bottom: 1rem;
    margin-top: .5rem;
}
.add-contact-submit{
    height: 2.2rem;
    @media(max-width: 767px){
        width: 100%;
        margin-top: 1rem;
    }
}
.add-contact{
    min-width: 250px;
    @media(max-width: 767px){
        margin: 0;
        padding: 0;
        width: 100%;
    }
}
</style>