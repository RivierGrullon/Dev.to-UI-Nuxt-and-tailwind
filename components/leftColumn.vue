<template></template>

<script>
import { getTags } from "../services/dev-to"
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: '🏡',
        },
        {
          title: 'Reading List',
          icon: '📚',
        },
        {
          title: 'Listings',
          icon: '📜',
        },
        {
          title: 'Podcasts',
          icon: '🎙',
        },
        {
          title: 'Tags',
          icon: '🔖',
        },
      ],
      tags: [],
    }
  },
    async created() {
        const tags = await getTags()
        this.tags = tags
    }
  
}
</script>
