import { CategoriesType } from "../Categories";
import { ImageType } from "../Image";
import { AuthorType } from "../Author";

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
    author: AuthorType;
};
