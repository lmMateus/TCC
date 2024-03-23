<template>
  <div ref="myElement">Elemento para manipular</div>
</template>

<script setup>
  import { ref } from 'vue';

  const myElement = ref(null);

  // Exemplo de manipulação, como adicionar uma classe
  setTimeout(() => {
    if (myElement.value) {
      myElement.value.classList.add('minha-classe');
    }
  }, 1000);

  // Expor myElement usando defineExpose
  import { defineExpose } from 'vue';
  defineExpose({ myElement });
</script>

<
