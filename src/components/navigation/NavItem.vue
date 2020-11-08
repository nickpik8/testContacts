<template>
    <router-link :to="item.href" class="nav-link">
        {{ item.title }}
    </router-link> 
</template>
<script>
export default{
    props: {
        item: Object
    }
}
</script>
<style scoped>
.nav-link{
    margin: 1rem;
}
</style>