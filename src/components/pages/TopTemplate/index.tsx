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
            position: {
                lat: 36.6661086,
                lng: 138.2004124,
            },
            label: {
                text: "長野県立大学",
                color: "#333",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                fontSize: "1em",
            },
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
