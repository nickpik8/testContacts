<template>
    <ul class="contacts-list">
        <li class="contact-item contact-title">
            <div class="contact-index">
                №
            </div>
            <div class="contact-name">
                Ф.И.О.
            </div>
            <div class="contact-email">
                e-mail
            </div>
            <div class="btn-group">
                Действия
            </div>
        </li>
        <ContactItem
        v-for="(item, i) in contacts" :key="i"
        :item="item"
        :index="i"
        @edit-contact="editContact"
        @remove-contact="removeContact"
        />
    </ul>
</template>
<script>
import ContactItem from '@/components/contacts/ContactItem'
export default {
    props: {
        contacts : Array
    },
    methods: {
        editContact(editItem){
            this.$emit('edit-contact', editItem);
        },
        removeContact(id){
            this.$emit("remove-contact", id);
        }
    },
    components: {
        ContactItem
    }
}
</script>
<style lang="scss" scoped>
.contacts-list{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.contact-title{
    font-weight: 700;
    @media(max-width: 400px){
        display: none;
    }
}
</style>