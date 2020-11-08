<template>
    <div class="search">
        <form @submit.prevent="" class="search-form">
            <label for="search" class="big-title">Поиск</label>
            <input @input="searchContact" v-model="text" id="search" name="search" type="text"/>
        </form>
    </div>
</template>
<script>
export default {
    props: {
        contacts: Array
    },
    data(){
        return{
            text: ''
        }
    },
    methods: {
        searchContact(){
            this.$emit('search-contact', this.text.toLowerCase())
        }
    }
}
</script>
<style lang="scss" scoped>
.search{
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    @media(max-width: 400px){
        width: 100%;
    }
}
#search{
    min-width: 250px;
}
</style>