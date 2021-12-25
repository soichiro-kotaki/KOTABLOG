import { client } from "src/lib/client";

// データ型
import { PostDataType } from "src/types/Post/Post";

//投稿日順でソートした記事一覧を取得
export const getAllSortedPostsData = async (): Promise<PostDataType[]> => {
    const allSortedPostsdata = await client.get({
        endpoint: "posts",
        queries: { orders: "-date" },
    });

    return allSortedPostsdata;
};

//全ての記事と、記事数を取得
export const getAllPostsData = async () => {
    const allPostsdata = await client.get({
        endpoint: "posts",
        queries: { orders: "-date" },
    });
    const totalCount = allPostsdata.totalCount;

    return {
        allPostsdata,
        totalCount,
    };
};

//各投稿記事の詳細情報を取得
export const getPostDataDetail = async (id: string) => {
    const postData = await client.get({
        endpoint: `posts/${id}`,
    });

    return postData;
};

// 各カテゴリーに該当する投稿記事のみを取得
export const getPostsDataByCategory = async (categoryID: string) => {
    const postsData = await client.get({
        endpoint: `posts`,
        queries: { filters: `category[contains]${categoryID}` },
    });

    return postsData;
};

// 各月間アーカイブに該当する投稿記事のみを取得
export const getPostsDataByArchive = async (archiveDate: string) => {
    const postsData = await client.get({
        endpoint: `posts`,
        queries: { filters: `date[contains]${archiveDate}` },
    });

    return postsData;
};
