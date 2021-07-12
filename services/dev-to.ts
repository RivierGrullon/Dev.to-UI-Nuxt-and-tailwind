import axios from "axios";
import { NuxtApp } from '@nuxt/types/app';
import { IDevTagJSON, IDevListingJSON } from "~/utils/types";

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
        
        let response = await nuxt.$axios.get("https://dev.to/api/listings")
        let data = await response.data;
        listing = data.map((item : any ) =>{
            return {
                title: item.title,
                category: item.category,
            }
        });
    } catch (error) {
        // nuxt.$fetchState.error = error;
        throw new Error(error);
    }
    return listing;
}