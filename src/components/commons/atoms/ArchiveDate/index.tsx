import React from "react";

type Props = {
    archiveDate: string;
};

export const ArchiveDate: React.FC<Props> = ({ archiveDate }) => {
    return <time>{archiveDate.replace("-", "年")}月</time>;
};
