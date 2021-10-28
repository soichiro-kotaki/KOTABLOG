import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    allPostsData: [
        {
            id: string;
            title: string;
            date: string;
        }
    ];
};

export const TopTemplate: React.FC<Props> = (props) => {
    const { allPostsData } = props;

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
            handleApiLoaded={handleApiLoaded}
            defaultLatLng={defaultLatLng}
        />
    );
};
