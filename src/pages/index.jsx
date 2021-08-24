import { getSortedPostsData } from "../lib/posts";

import { TopTemplate } from "../components/pages/TopTemplate";

export default function Home({ allPostsData }) {
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
