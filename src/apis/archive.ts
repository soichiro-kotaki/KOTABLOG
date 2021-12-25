import { client } from "src/lib/client";

// データ型
import { ArchivesType } from "src/types/Archives";

//全月間アーカイブの日時を取得
export const getAllArchives = async (): Promise<string[]> => {
    const allPostsDateList = await client.get({
        endpoint: "posts",
        queries: { fields: `date` },
    });
    const archivesList = allPostsDateList.contents.map(
        (content: any): ArchivesType[] => {
            const extractedDateList = content.date.substr(0, 7);

            return extractedDateList;
        }
    );
    const sortedArchivesList = Array.from(new Set(archivesList)) as string[];

    return sortedArchivesList;
};
