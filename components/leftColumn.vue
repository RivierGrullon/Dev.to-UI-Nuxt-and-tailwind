<template>
    <div class="space-y-4 ml-20">
        <div>
            <ul>
                <li v-for="(item, i) in items" :key="i">
                    <div
                        class="
                            group
                            flex
                            items-center
                            space-x-4
                            px-1
                            py-2
                            rounded-md
                            hover:bg-gray-200
                        "
                    >
                        <span class="text-2xl">{{ item.icon }}</span>
                        <span class="text-white group-hover:text-gray-700">{{
                            item.title
                        }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <div class="flex items-center justify-between mb-4">
                <p class="text-xl font-sembold text-white">My Tags</p>
                <button class="rounded hover:bg-gray-500 p-2">
                    <img
                        src="https://s.svgbox.net/hero-outline.svg?ic=cog&fill=white"
                        class="h-6 w-6"
                    />
                </button>
            </div>
            <ul class="h-64 overflow-y-scroll">
                <li
                    v-for="(tag, t) in tags"
                    :key="t"
                    class="px-1 group py-2 rounded-md hover:bg-gray-200"
                >
                    <p class="text-white group-hover:text-gray-700">
                        #{{ tag.name }}
                    </p>
                </li>
            </ul>
        </div>
        <div>
            <img
                class="rounded-md mb-4"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--pVCMYZWJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://scontent-lga3-1.cdninstagram.com/vp/7c898e2c9e9fa71f72dd5d422d444549/5DFE1BFA/t51.2885-15/fr/e15/s1080x1080/57390242_386431405416711_440644832181536446_n.jpg%3F_nc_ht%3Dscontent-lga3-1.cdninstagram.com"
                alt="Shop Banner"
            />
            <p class="text-center text-blue-700 font-semibold text-xl">
                Do you have your sticker pack yet?
            </p>
        </div>
    </div>
</template>

<script>
import { getTags } from "../services/dev-to";

export default {
    data() {
        return {
            items: [
                {
                    title: "Home",
                    icon: "🏡",
                },
                {
                    title: "Reading List",
                    icon: "📚",
                },
                {
                    title: "Listings",
                    icon: "📜",
                },
                {
                    title: "Podcasts",
                    icon: "🎙",
                },
                {
                    title: "Tags",
                    icon: "🔖",
                },
            ],
            tags: [],
        };
    },
    async created() {
        const tags = await getTags();
        this.tags = tags;
    },
};
</script>
