import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { AllPostDataType } from "../../../types/Post/AllPost";

type Props = {
    allPostsData: AllPostDataType[];
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
