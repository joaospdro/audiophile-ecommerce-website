<template>
  <button @click="$router.go(-1)" class="btn-three">
    Go Back
  </button>
</template>

<script>
export default {
  name: 'GoBackBtn'
}
</script>