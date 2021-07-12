<template>
    <div class="min-h-nav">
        <div class="rounded-md border overflow-hidden bg-gray-dev">
            <div class="flex items-center justify-between p-4 border-b">
                <p class="text-xl text-white font-semibold">Listings</p>
                <p class="text-blue-600">See All</p>
            </div>
            <listing-loader v-if="this.$fetchState.pending" />
            <p v-else-if="this.$fetchState.error" class="text-red-500">An Error Has ocurred</p>
            <ul v-else class="divide-y border-b">
                <li v-for="(listing, l) in listing.slice(0,5)" :key="l">
                    <div class="p-4 hover:bg-gray-800 group">
                        <p class="text-white group-hover:text-blue-600 mb-1">
                            {{ listing.title }}}
                        </p>
                        <p class="text-sm text-gray-400">{{ listing.category }}</p>
                    </div>
                </li>
            </ul>
            <button class="w-full py-4 text-sm text-white">Create a Listing</button>
        </div>

    </div>
</template>


<script>

import { getListing } from "../services/dev-to"
export default {
    data () {
        return {
            listing: []
        }}
    ,
    async fetch() {
        let result = await getListing(this.$nuxt)
        this.listing = result
    },
    fetchOnServer: false
}
</script>