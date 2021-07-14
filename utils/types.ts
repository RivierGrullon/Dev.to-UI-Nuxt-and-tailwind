export interface IDevTagJSON {
    id: number;
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
}

export interface IDevListingJSON {
    title: string;
    category: string;
}

export interface IDevArticleJSON { 
    title: string;
    image_url: string;
    author: string;
    profile_image_url: string;
    date: Date;
    tags: string[];
    likes: number;
    comments: number;
}