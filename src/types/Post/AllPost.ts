import { CategoriesType } from "../Categories";
import { ImageType } from "../Image";

export type AllPostDataType = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    img: ImageType;
    title: string;
    date: string;
    body: string;
    categories: CategoriesType[];
};
