<template>
    <li v-if="!edit" class="contact-item">
        <div class="contact-index">
            {{ index + 1 }}
        </div>
        <div class="contact-name">
            {{ item.name }}
        </div>
        <div class="contact-email">
            {{ item.email }}
        </div>
        <div class="btn-group">
            <input type="button" value="Редактировать" @click="editContact"/>
            <input type="button" value="Удалить" @click="removeContact"/>
        </div>
    </li>
    <li v-else class="contact-item">
        <div class="contact-index">
            {{ index + 1 }}
        </div>
        <input v-model="item.name" type="text" class="contact-name"/>
        <input v-model="item.email" type="text" class="contact-email"/>
        <div class="btn-group">
            <input type="button" value="Сохранить" @click="saveEditContact"/>
            <input type="button" value="Отменить" @click="cancelEdit"/>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        item: Object,
        index: Number
    },
    data(){
        return{
            edit: false
        }
    },
    methods: {
        editContact(){
            this.edit = true;
        },
        saveEditContact(){
            this.$emit('edit-contact', this.item);
            this.edit = false;
        },
        cancelEdit(){
            this.edit = false;
        },
        removeContact(){
            this.$emit('remove-contact', this.item.id)
        }
    }
}
</script>
<style lang="scss">
.contact-item{
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: .3rem;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 400px){
        flex-direction: column;
    }
}
.contact-item:nth-child(even){
    background-color: #e8e8e8;
}
.contact-index{
    min-width: 3%;
    text-align: center;
    @media(max-width: 400px){
        text-align: left;
        min-width: 100%;
        border-bottom:1px solid #000;
        padding: 0.3rem;
        &::before{
            content: '№ ';
            font-weight: 700;
        }
    }
}
.contact-name{
    min-width: 40%;
    margin-left: .5rem;
    text-align: left;
    @media(max-width: 400px){
        margin: 0;
        min-width: 100%;
        border-bottom:1px solid #000;
        padding: 0.3rem;
        &::before{
            content: 'Ф.И.О: ';
            font-weight: 700;
        }
    }
}
.contact-email{
    text-align: left;
    @media(max-width: 400px){
    margin: 0;
    min-width: 100%;
    border-bottom:1px solid #000;
    padding: 0.3rem;
    &::before{
        content: 'e-mail: ';
        font-weight: 700;
    }
}
}
.btn-group{
    max-width: 100%;
    margin-left: auto;
    @media(max-width: 400px){
        width: 100%;
    }
}
.btn-group input{
    @media(max-width: 400px){
        width: 100%;
        margin-top: .5rem;
    }
}
</style>