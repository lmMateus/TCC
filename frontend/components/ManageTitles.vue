<template>
  <div>
    <div class="bg-white">
      <div>
        <main class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ">
          <div class="flex items-baseline border-b lg:border-none border-gray-200 py-2 lg:py-0">
            <div class="flex items-center">
              <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar" type="button"
                class="m-2 mr-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 " aria-expanded="false">
                <Icon name="fa-solid:filter" class="text-sm" />
                <span class="pl-2">Filtros</span>
              </button>
            </div>
          </div>
          <section class="">
            <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <!-- Filters -->
              <div id="default-sidebar"
                class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white pl-3"
                aria-label="Sidebar">
                <form class="lg:block">
                  <button type="button"
                    class="flex items-center w-full p-2 mt-4 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-titulos" data-collapse-toggle="dropdown-titulos">
                    <span
                      class="flex-1 text-left whitespace-nowrap text-md font-medium text-gray-900 tracking-wider">Títulos</span>
                    <Icon name="solar:alt-arrow-down-line-duotone" class="text-xl" />
                  </button>
                  <div id="dropdown-titulos" class="hidden py-2 space-y-2">
                    <ul>
                      <li>
                        <input id="filter-category-0" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                        <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Nota promissória</label>
                      </li>
                      <li>
                        <input id="filter-category-0" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                        <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Cheque</label>
                      </li>
                      <li>
                        <input id="filter-category-0" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                        <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Crédito tributário</label>
                      </li>
                      <li>
                        <input id="filter-category-0" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                        <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Debenture</label>
                      </li>
                      <li>
                        <input id="filter-category-0" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                        <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Factoring</label>
                      </li>
                    </ul>
                  </div>
                  <button type="button"
                    class="flex items-center w-full p-2 mt-4 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-data-vencimento" data-collapse-toggle="dropdown-data-vencimento">
                    <span class="flex-1 text-left whitespace-nowrap text-md font-medium text-gray-900 tracking-wider">
                      Data de vencimento</span>
                    <Icon name="solar:alt-arrow-down-line-duotone" class="text-xl" />
                  </button>
                  <div id="dropdown-data-vencimento" class="hidden py-2 space-y-2">
                    <ul class="space-y-2">
                      <li>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <span class="text-gray-500">Entre:</span>
                            <div class="relative mx-1">
                              <input datepicke name="star" type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5">
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <span class="mx-2 text-gray-500">Até:</span>
                            <div class="relative mx-1">
                              <input datepicke name="star" type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5">
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>  
                  <button type="button"
                    class="flex items-center w-full p-2 mt-4 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-preco" data-collapse-toggle="dropdown-preco">
                    <span class="flex-1 text-left whitespace-nowrap text-md font-medium text-gray-900 tracking-wider">
                      Preço</span>
                    <Icon name="solar:alt-arrow-down-line-duotone" class="text-xl" />
                  </button>
                  <div id="dropdown-preco" class="hidden py-2 space-y-2">
                    <div class="space-x-1">
                        <div class="flex items-center space-x-2">
                          <input type="number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5"
                            placeholder="Min.">
                          <input type="number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5"
                            placeholder="Max.">
                        </div>
                      </div>
                  </div> 
                  <button type="button"
                    class="flex items-center w-full p-2 mt-4 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-status" data-collapse-toggle="dropdown-status">
                    <span
                      class="flex-1 text-left whitespace-nowrap text-md font-medium text-gray-900 tracking-wider">Status</span>
                    <Icon name="solar:alt-arrow-down-line-duotone" class="text-xl" />
                  </button>
                  <div id="dropdown-status" class="hidden py-2 space-y-2">
                    <ul>
                      <li>
                        <input id="filter-category-0" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                        <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Meus Títulos</label>
                      </li>
                      <li>
                        <input id="filter-category-0" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                        <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Antecipados</label>
                      </li>
                      <li>
                        <input id="filter-category-0" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                        <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Ofertados</label>
                      </li>
                      <li>
                        <input id="filter-category-0" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                        <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Não Ofertados</label>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <div class="fixed bottom-0 right-0 mb-4 mr-4 md:mb-16 md:mr-16">
            <a href="cadastro-titulo" class="text-indigo-700 font-semibold rounded-xl                  
                  bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-4xl p-2 pt-0
                  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700 hover:text-white cursor-pointer">
              <Icon name="solar:add-square-linear" />
            </a>
          </div>
          <div>
            <div class="lg:col-span-3">
              <div>
                <div class="bg-white p-5 flex">
                  <div>
                  </div>
                  <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8      
                      md:max-w-3xl
                      lg:max-w-5xl lg:px-8 rounded-xl shadow w-screen">
                    <div class="grid gap-y-9 gap-x-10 ">

                      <div class="group rounded-lg ">
                        <div class="w-full overflow-hidden p-3 shadow-md border-t-2 border-gray-50 rounded-lg">
                          <div class="text-gray-700 rounded-b-lg grid grid-cols-1 mt-2 ml-2 gap-y-4 
                          md:gap-y-6 md:gap-x-2 md:grid-cols-3
                          ">
                            <p><b>Nota promissoria - </b>Associação Banco PAN e socios</p>
                            <p><b>Status:</b>
                              <span class="text-green-600">
                                Antecipado
                              </span>
                            </p>
                            <div class="grid grid-cols-2 h-14 flex justify-between order-1 md:order-none">
                              <button class="mx-3 w-auto h-14 font-semibold text-white rounded-xl
                              bg-gradient-to-r from-indigo-500 via-indigo-400/80 to-indigo-500
                              hover:from-violet-500 hover:via-violet-400/80 hover:to-violet-500">
                                Ofertar
                              </button>
                              <button data-modal-target="large-modal" data-modal-toggle="large-modal" class="mx-3 w-auto h-14 font-semibold text-white rounded-xl
                              bg-gradient-to-r from-indigo-500 via-indigo-400/80 to-indigo-500
                              hover:from-violet-500 hover:via-violet-400/80 hover:to-violet-500" type="button">
                                Visualizar
                              </button>
                            </div>
                            <div>
                              <p><b>Preço:</b> <span>R$ 543,54</span></p>
                              <p><b>Data de vencimento:</b> <span>14/02/2025</span></p>
                            </div>
                            <div>
                              <p><b>Antecipado por:</b></p>
                              <p>Daniel Froes de Abreu</p>
                            </div>
                            <div class="grid grid-cols-2 h-14 flex justify-between order-2 md:order-none ">
                              <button class="mx-3 font-semibold text-white rounded-xl
                              bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500
                              hover:from-sky-600 hover:via-sky-500 hover:to-sky-600">
                                <Icon class="text-xl" name="ic:outline-mode-edit-outline" />
                                <span>Editar</span>
                              </button>
                              <button class="mx-3 font-semibold text-white  rounded-xl
                              bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500
                              hover:from-rose-500 hover:via-rose-400 hover:to-rose-500">
                                <Icon class="text-xl" name="material-symbols:delete" />
                                <span>Remover</span>
                              </button>
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
          <div id="large-modal" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden 
          overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center">
            <div class="relative w-full max-w-4xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Nome Título
                  </h3>
                  <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-3xl ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="large-modal">
                    <Icon name="solar:close-square-line-duotone" />
                  </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    dados
                  </p>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>
