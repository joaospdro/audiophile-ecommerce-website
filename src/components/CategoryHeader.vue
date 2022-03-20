<template>
  <div class="category-header">
    <h2 class="category-header-title container">{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'CategoryHeader',
  props: ['title']
}
</script>