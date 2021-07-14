import axios from "axios";
import { NuxtApp } from "@nuxt/types/app";
import { IDevTagJSON, IDevListingJSON, IDevArticleJSON } from "~/utils/types";

export async function getTags(): Promise<IDevTagJSON[]> {
    let tags: IDevTagJSON[] = null!;

    try {
        let response = await axios.get("https://dev.to/api/tags");
        let data = await response.data;
        tags = data;
    } catch (error) {
        throw new Error(error);
    }
    return tags;
}

export async function getListing(nuxt: NuxtApp): Promise<IDevListingJSON[]> {
    let listing: IDevListingJSON[] = null!;

    try {
        let response = await nuxt.$axios.get("https://dev.to/api/listings");
        let data = await response.data;
        listing = data.map((item: any) => {
            return {
                title: item.title,
                category: item.category,
            };
        });
    } catch (error) {
        // nuxt.$fetchState.error = error;
        throw new Error(error);
    }
    return listing;
}

// export async function getArticles(nuxt: NuxtApp) {
//     let articles:IDevArticleJSON[] = null!;
//     try {
//         let response = await nuxt.$axios.get("https://dev.to/api/articles");
//         let data = await response.data;
//         articles = data;
//     } catch (error) {
//         throw new Error(error);
//     }
//     return articles;
// }
// // function that push more articles to the store
export async function getArticles(nuxt: NuxtApp) {
    let articles: IDevArticleJSON[] = null!;
    try {
        let response = await nuxt.$axios.get(
            "https://dev.to/api/articles"
        );
        let data = await response.data;
        articles = data.map((item: any) => {
            return {
                title: item.title,
                author: item.author,
                image_url: item.cover_image
                    ? item.cover_image
                    : item.social_image,
                profile_image_url: item.user.profile_image,
                date: item.readable_publish_date,
                tags: item.tag_list,
                likes: item.public_reactions_count,
                comments: item.comments_count,
            };
        });
    } catch (error) {
        throw new Error(error);
    }
    return articles;
}
