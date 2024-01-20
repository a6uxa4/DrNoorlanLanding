import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../api/api.base-query";

const personalService = createApi({
  reducerPath: "personalApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getPersonal: builder.query<any, any>({
      query: (clinicId) => `/calendars/${clinicId}/doctors`,
    }),
  }),
});

export default personalService;

export const { useGetPersonalQuery } = personalService;
