<template>
  <div>
    <div class="bg-white">
      <div>
        <main class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div class="flex items-baseline border-b border-gray-200 pb-6 pt-2">
            <div class="flex items-center">
              <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar" type="button"
                class="m-2 mr-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden" aria-expanded="false">
                <Icon name="fa-solid:filter" class="text-sm" />
                <span class="pl-2">Filtros</span>
              </button>
            </div>
          </div>
          <section class="pb-24 pt-3">
            <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div id="default-sidebar"
                class="fixed lg:relative top-0 left-0 z-40 w-64 h-screen lg:h-auto transition-transform -translate-x-full lg:translate-x-0 bg-white pl-3"
                aria-label="Sidebar">
                <form class="lg:block">
                  <div class="border-b border-gray-200 py-5 space-y-3">
                    <h3 class="text-md font-medium text-gray-900 mb-2 tracking-wider">Títulos</h3>
                    <div class="flex items-center">
                      <input id="filter-category-0" type="checkbox" @change="handleFilterTitleType"
                        value="Nota Promissória"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                      <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Nota promissória</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-1" type="checkbox" @change="handleFilterTitleType"
                        value="Crédito Tributário"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                      <label for="filter-category-1" class="ml-3 text-sm text-gray-600">Crédito tributário</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-2" type="checkbox" @change="handleFilterTitleType" value="Cheque"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                      <label for="filter-category-2" class="ml-3 text-sm text-gray-600">Cheque</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-3" type="checkbox" @change="handleFilterTitleType" value="Debênture"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                      <label for="filter-category-3" class="ml-3 text-sm text-gray-600">Debenture</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-4" type="checkbox" @change="handleFilterTitleType" value="Factoring"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                      <label for="filter-category-4" class="ml-3 text-sm text-gray-600">Factoring</label>
                    </div>
                  </div>
                  <div class="border-b border-gray-200 py-5">
                    <h3 class="text-md font-medium text-gray-900 mb-2 tracking-wider">Data de vencimento</h3>
                    <div class="pt-6">
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <span class="text-gray-500">Entre:</span>
                            <div class="relative mx-1">
                              <input datepicke name="star" type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5">
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <span class="mx-2 text-gray-500">Até:</span>
                            <div class="relative mx-1">
                              <input datepicke name="star" type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b border-gray-200 py-6">
                    <h3 class="text-md font-medium text-gray-900 mb-2 tracking-wider">Preço</h3>
                    <div class="pt-6" id="filter-section-1">
                      <div class="space-x-1">
                        <div class="flex items-center space-x-2">
                          <input type="number" @input="handleFilterPriceMin"
                            class="bg-gray-50border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5"
                            placeholder="Min.">
                          <input type="number" @input="handleFilterPriceMax"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5"
                            placeholder="Max.">
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!-- PRODUTOS -->
              <div class="lg:col-span-3">
                <div>
                  <div class="bg-white p-5 flex">
                    <div class="mx-auto w-full py-6 px-6 rounded-xl shadow">
                      <div class="grid gap-y-5 gap-x-10 space-y-2">
                        <div v-for="(title, index) in filteredTitle" :key="title.cod_titulo">
                          <div class="group transition rounded-xl ease-in-out delay-10 duration-100
                              hover:-translate-y-1 hover:scale-100 shadow-md border-t-2 border-gray-50
                              grid md:grid-cols-3 space-y-4 sm:divide-x p-1 md:max-h-48 lg:max-h-44">
                            <div class="w-full overflow-hidden flex justify-center">
                              <button @click="openModal(index)" class="flex grid grid-flow-row">
                                <p class="justify-self-center opacity-35">{{ title.tipo_titulo }}</p>
                                <div>
                                  <img v-if="title.tipo_titulo == 'Nota Promissória'"
                                    src="~/assets/image/nota_promissoria.jpg"
                                    class="w-full object-contain object-center group-hover:opacity-70 h-24 sm:h-40 md:h-32">
                                  <img v-else-if="title.tipo_titulo == 'Cheque'" src="~/assets/image/cheque.jpg"
                                    class="w-full object-contain object-center group-hover:opacity-70 h-24 sm:h-40 md:h-32">
                                  <img v-else-if="title.tipo_titulo == 'Debênture'" src="~/assets/image/debenture.jpg"
                                    class="w-full object-contain object-center group-hover:opacity-70 h-24 sm:h-40 md:h-32">
                                  <img v-else-if="title.tipo_titulo == 'Crédito Tributário'"
                                    src="~/assets/image/credito_tributario.jpg"
                                    class="w-full object-contain object-center group-hover:opacity-70 h-24 sm:h-40 md:h-32">
                                  <img v-else="title.tipo_titulo" src="~/assets/image/factoring.jpg"
                                    class="w-full object-contain object-center group-hover:opacity-70 h-24 sm:h-40 md:h-32">
                                </div>
                              </button>
                            </div>
                            <div class="sm:space-y-5 text-gray-700 bg-gradient-to-r cursor-default p-1 pl-2">
                              <button @click="openModal(index)">
                                <span class="font-semibold">
                                  {{ title.descricao }}
                                </span>
                              </button>
                              <h3>Vencimento: {{ dateFormart(title.data_vencimento) }}</h3>
                            </div>
                            <div class="place-content-between sm:mr- text-gray-700 bg-gradient-to-r cursor-default 
                            grid sm:place-content-between sm:pb-3 p-1 pl-2">
                              <h3 class="">Emissor: {{ title.emissor }} </h3>
                              <div>
                                <p class="font-bold">Valor do título: R$ {{ title.valor_ofertado }}</p>
                                <p class="font-bold text-red-500">Lucro: R$ {{ (title.valor_titulo -
                        title.valor_ofertado) }}</p>
                              </div>
                            </div>
                          </div>
                          <div v-if="modalStates[index]"
                            class="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50 bg-gray-500/60">
                            <div @click="closeModal(index)" class="fixed inset-0 overflow-y-auto overflow-x-hidden">
                              <div class="flex items-center justify-center min-h-screen">
                                <div class="relative p-4 w-full max-w-2xl">
                                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div
                                      class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                      <h3 class="text-gray-900 dark:text-white">{{ filteredTitle[index].cod_titulo }}
                                      </h3>
                                    </div>
                                    <div class="p-4 md:p-5 space-y-4">
                                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">{{ title.tipo_titulo }}</p>
                                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">test</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue';


const modalStates = ref([]);

const openModal = (index) => {
  modalStates.value[index] = true;
  document.body.style.overflow = 'hidden'
};

const closeModal = (index) => {
  modalStates.value[index] = false;
  document.body.style.overflow = 'auto'
};

const typetitleFilter = ref([])
const priceMinFilter = ref()
const priceMaxFilter = ref()

const props = defineProps({
  titles: {
    required: true
  }
})

const filteredTitle = computed(() => {
  let titles = props.titles.filter(title => title.status_titulo == "ofertado")

  if (typetitleFilter.value.length > 0) {
    titles = titles.filter(title => typetitleFilter.value.includes(title.tipo_titulo))
  }

  if (priceMinFilter.value != null) {
    titles = titles.filter(title => parseFloat(priceMinFilter.value) <= parseFloat(title.valor_ofertado))
  }
  if (priceMaxFilter.value != null) {
    titles = titles.filter(title => parseFloat(priceMaxFilter.value) >= parseFloat(title.valor_ofertado))
  }
  return titles;
})

const handleFilterTitleType = (filter) => {
  if (typetitleFilter.value.includes(filter.target.value)) {
    return typetitleFilter.value.splice(typetitleFilter.value.indexOf(filter.target.value), 1)
  }
  return typetitleFilter.value.push(filter.target.value)
}

const handleFilterPriceMin = (price) => {
  if (price.target.value == "") {
    return priceMinFilter.value = null
  }
  return priceMinFilter.value = price.target.value
}

const handleFilterPriceMax = (price) => {
  if (price.target.value == "") {
    return priceMaxFilter.value = null
  }
  return priceMaxFilter.value = price.target.value
}
</script>