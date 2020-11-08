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
            <input 
                @click="editContact" 
                value="Редактировать" type="button"
            />
            <input 
                @click="removeContact" 
                value="Удалить" type="button"
            />
        </div>
    </li>
    <li v-else class="contact-item">
        <div class="contact-index">
            {{ index + 1 }}
        </div>
        <input 
            v-model="item.name" 
            class="contact-name" type="text"
        />
        <input 
            v-model="item.email" 
            class="contact-email" type="text"
        />
        <div class="btn-group">
            <input 
                @click="saveEditContact" 
                value="Сохранить" type="button"
            />
            <input 
                @click="cancelEdit" 
                value="Отменить" type="button"
            />
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
            edit: false,
            copyName: null,
            copyEmail: null
        }
    },
    methods: {
        editContact(){
            this.edit = true;
            this.copyName = this.item.name;
            this.copyEmail = this.item.email;
        },
        saveEditContact(){
            this.$emit('edit-contact', this.item);
            this.edit = false;
        },
        cancelEdit(){
            this.edit = false;
            this.item.name = this.copyName;
            this.item.email = this.copyEmail;
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
    @media(max-width: 450px){
        flex-direction: column;
        & div{
            margin: 0;
            min-width: 100%;
            border-bottom:1px solid #000;
        }
        & input{
            min-width: 90%;
            margin: 0;
            margin-top: .5rem;
        }
    }
    @media(max-width: 767px){
        & div{
            padding: .3rem 0rem .3rem 0rem;
            justify-content: stretch;
        }
    }
}
.contact-item:nth-child(even){
    background-color: #e8e8e8;
}
.contact-index{
    min-width: 3%;
    text-align: center;
    @media(max-width: 450px){
        text-align: left;
        min-width: 100%;
        border-bottom:1px solid #000;
        &::before{
            content: '№ ';
            font-weight: 700;
            margin-left:.3rem;
        }
    }
}
.contact-name{
    min-width: 40%;
    margin-left: .5rem;
    text-align: left;
    @media(max-width: 450px){
        &::before{
            content: 'Ф.И.О: ';
            font-weight: 700;
            margin-left:.3rem;
            font-size: 0.8em;
        }
    }
    @media(min-width: 451px) and (max-width: 767px){
    }
}
.contact-email{
    text-align: left;
    @media(max-width: 450px){
        &::before{
            content: 'e-mail: ';
            font-weight: 700;
            margin-left:.3rem;  
            font-size: 0.8em;          
        }
    }
}
.btn-group{
    max-width: 100%;
    margin-left: auto;
    @media(max-width: 767px){
        width: 100%; 
        &-title__visible{
            display: none;
        }
    }
}
.btn-group input{
    @media(min-width: 450px) and (max-width: 767px){
        width: 40%;
    }
}
</style>