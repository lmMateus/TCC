<template>
  <div class="p-4 md:p-5 space-y-4" v-bind="titleInf">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">      
      {{ titleInf.cod_titulo }}
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      info
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    required: true
  }
})



const titleM = async (cod_titulo) => {
  const response = await $fetch(`/api/v1/teste/${cod_titulo}`); 
}

const titleInf = ref('') 
titleInf.value = props.title

console.log(titleInf.value)
</script>