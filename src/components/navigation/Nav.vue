<template>
    <div id="nav">
      <NavItem 
      v-for="item in nav" :key="item.id"
      :item="item"
      />
    </div>
</template>
<script>
import NavItem from '@/components/navigation/NavItem'
export default {
  props: {
    nav: Array
  },
  components: {
    NavItem
  }
}
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a:hover{
  color: #888;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>