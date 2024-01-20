import { FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.SERVER_URL,
});


export const baseQueryWithReauth = async (
  args: FetchArgs | string,
  api: any,
  extraOptions: any
) => {
  const result: any = await baseQuery(args, api, extraOptions);
  return result;
};
