<template>
  <div>
    <NavbarMarketplace class="" />
    <div class="">
      <Marketplace :titles="titles.data.value"/>          
    </div>
  </div>
</template>

<script setup>
const titles  = await useFetch("/api/v1/titulos")
</script>
