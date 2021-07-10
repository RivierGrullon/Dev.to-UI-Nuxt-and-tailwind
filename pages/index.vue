<template>
  <main class="min-h-screen bg-gray-700" style="margin-top: 65px">
    <section class="container mx-auto py-8">
      <div class="grid grid-cols-4 gap-4 bg-gray-800">
        <!-- <left-column /> -->
        <div>
          <ul class="space-y-4">
            <li class="h-8 rounded bg-red-400" v-for="n in 7" :key="n"></li>
          </ul>
        </div>
        <div class="col-span-2">
          <ul class="space-y-4">
            <li class="h-64 rounded bg-green-400" v-for="n in 20" :key="n"></li>
          </ul>
        </div>
        <div>
          <ul class="space-y-4">
            <li class="h-8 rounded bg-blue-400" v-for="n in 7" :key="n"></li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>