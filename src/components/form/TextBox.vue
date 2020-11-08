<template>
    <div class="form-group">
        <label :for="nameID">
            {{ title }}
        </label>
        <input :id="nameID" :name="nameID" type="text">
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        nameID: String,
        model: String
    }
}
</script>
<style scoped>
.form-group{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}
</style>