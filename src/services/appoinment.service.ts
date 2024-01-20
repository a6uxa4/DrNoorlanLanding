import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../api/api.base-query";
import { appointmentsProps } from "@/common/appointments.common";

const appointmentService = createApi({
  reducerPath: "appointmentApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    postAppointment: builder.mutation<{ message: string }, appointmentsProps>({
      query: (body) => {
        return {
          url: "/calendars/onlineRecord",
          method: "POST",
          body: body,
        };
      },
    }),
    getFreeTimeAppoinment: builder.query<any, any>({
      query: ({ userID, dataOfAppointment }) =>
        `schedules/freeTime/${userID}/mobile?dataOfAppointment=${dataOfAppointment}&minute=30`,
    }),
  }),
});

export default appointmentService;

export const { usePostAppointmentMutation, useGetFreeTimeAppoinmentQuery } =
  appointmentService;
