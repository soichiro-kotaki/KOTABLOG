import React from "react";

// API
import { getAllSortedPostsData } from "src/apis/blog";
import { getAllCategories } from "src/apis/category";
import { getAllArchives } from "src/apis/archive";

// コンポーネント
import { TopTemplate } from "../components/pages/TopTemplate";

// データ型
import { GetStaticProps } from "next";
import { CategoriesType } from "../types/Categories";
import { PostDataType } from "src/types/Post/Post";

type Props = {
    allPostsData: {
        contents: PostDataType[];
    };
    allCategoriesList: CategoriesType[];
    allArchivesList: string[];
};

const Home: React.FC<Props> = (props: Props) => {
    const { allPostsData, allCategoriesList, allArchivesList } = props;

    return (
        <TopTemplate
            allPostsData={allPostsData}
            result={allCategoriesList}
            archivesList={allArchivesList}
        />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const sortedAllPostsData = await getAllSortedPostsData();
    const allCategoriesList = await getAllCategories();
    const allArchivesList = await getAllArchives();

    return {
        props: {
            allPostsData: sortedAllPostsData,
            allCategoriesList: allCategoriesList,
            allArchivesList: allArchivesList,
        },
    };
};

export default Home;
