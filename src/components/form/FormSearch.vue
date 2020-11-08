<template>
    <div class="search">
        <form @submit.prevent="" class="search-form">
            <label for="search">Поиск</label>
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
    margin: 1rem;
    max-width: 40%;
    @media(max-width: 400px){
        flex-direction: column;
    }
}
#search{
    min-width: 250px;
}
</style>