import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
/*import "./naverApiMap.scss";*/


export const naverapimap = (props) => {
    return (
        <RenderAfterNavermapsLoaded clientId={"인증키"}>
            <NaverMap
                id={"map"}
                mapDivId={"react-naver-map"} // default name
                style={{ width: '100vh', height: '90vh' }}
                defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
            />
        </RenderAfterNavermapsLoaded>
    );
};

export default naverapimap;