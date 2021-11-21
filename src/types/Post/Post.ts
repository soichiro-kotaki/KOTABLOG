import { AuthorType } from "../Author";
import { CategoriesType } from "../Categories";
import { ImageType } from "../Image";

export type PostDataType = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    img: ImageType;
    title: string;
    date: string;
    body: string;
    category: CategoriesType;
    author: AuthorType;
};
