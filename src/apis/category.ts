import { client } from "src/lib/client";

import { CategoriesType } from "src/types/Categories";

//全カテゴリーを取得
export const getAllCategories = async (): Promise<CategoriesType[]> => {
    const allCategoriesList = await client.get({
        endpoint: "categories",
        queries: { fields: "id,name" },
    });

    return allCategoriesList.contents;
};
