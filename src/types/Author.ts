import { ImageType } from "./Image";

export type AuthorType = {
    id: string;
    name: string;
    englishName: string;
    img: ImageType;
    position: string;
    description: string;
};
