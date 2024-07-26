import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//if the proxy is defined in configuration use baseUrl empty
const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
