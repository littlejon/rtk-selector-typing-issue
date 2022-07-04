import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSelector } from "@reduxjs/toolkit";

export interface AirQualityStation {
    station_id: string;
    station_name: string;
    region_id: string
    link: string;
    start_date: string;
    end_date: string;
    latitude: number;
    longitude: number;
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://airquality.des.qld.gov.au/v1",
    }),
    endpoints: () => ({})
});

export const airQualityApi = api.enhanceEndpoints({
    addTagTypes: ["airQualityStations"]
}).injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getStations: builder.query<AirQualityStation[], void>({
            query: () => ({
                url: "/stations?pagesize=10&pagenumber=1",
                method: "GET",
            }),
            providesTags: ["airQualityStations"]
        })
    })
})

export const { useGetStationsQuery } = airQualityApi;

export const selectAirQualityStationResults = airQualityApi.endpoints.getStations.select();

export const selectAirQualityStations = createSelector(
    selectAirQualityStationResults,
    (results) => results.data
);
