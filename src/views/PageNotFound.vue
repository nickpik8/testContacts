<template>
    <div class="page-not-found">
        <p>Ошибка 404!</p>
        <p>Страница не найдена!</p>
        <p>Нажмите: <router-link to="/">перейти на главную</router-link></p>
    </div>
</template>
<style lang="scss" scoped>
.page-not-found{
    font-size: 1.3em;
    font-weight: 700;
    width: 450px;
    margin: 3rem auto;
    @media(max-width: 450px){
        width: 100%;
    }
}
</style>