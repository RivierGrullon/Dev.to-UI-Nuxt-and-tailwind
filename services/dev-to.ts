import axios from "axios";
import { IDevTagJSON } from "~/utils/types";

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
