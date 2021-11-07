import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    allPostsData: [
        {
            id: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            revisedAt: string;
            img: {
                url: string;
                height: string;
                width: string;
            };
            title: string;
            date: string;
            body: string;
            categories: [];
        }
    ];
    totalCount: number;
};

export const TopTemplate: React.FC<Props> = (props) => {
    const { allPostsData, totalCount } = props;

    const defaultLatLng = {
        lat: 36.6661086,
        lng: 138.2004124,
    };

    const handleApiLoaded = ({ map, maps }) => {
        new maps.Marker({
            map,
            position: defaultLatLng,
        });
    };

    return (
        <Presenter
            allPostsData={allPostsData}
            totalCount={totalCount}
            handleApiLoaded={handleApiLoaded}
            defaultLatLng={defaultLatLng}
        />
    );
};
