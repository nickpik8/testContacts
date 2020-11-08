<template>
  <div class="home">
    <FormLogin />
  </div>
</template>

<script>
import FormLogin from '@/components/form/FormLogin'
export default {
  name: 'Home',
  components: {
    FormLogin
  }
}
</script>
<style scoped>
.home{
  margin-top: 20%;
}
</style>
