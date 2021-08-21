import { getSortedPostsData } from "../lib/posts";

import { TopTemplate } from "../components/pages/TopTemplate";

export default function Home({ allPostsData }) {
    // console.log(allPostsData[0].id);
    return <TopTemplate allPostsData={allPostsData} />;
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
