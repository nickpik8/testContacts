<template>
    <div class="search">
        <form @submit.prevent="" class="search-form">
            <label for="search" class="big-title">
                Поиск
            </label>
            <input 
                v-model="text" 
                @input="searchContact"
                id="search" name="search" type="text"
            />
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
}
.search-form{
    @media(max-width: 450px){
        display:flex;
        flex-direction: column;
        width: 100%;
    }
}
#search{
    min-width: 250px;

}
</style>