import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://airquality.des.qld.gov.au/v1",
    }),
    endpoints: () => ({})
});

