"use client";

import { withLayout } from "@/Layout";
import { AboutPage } from "@/screens/about";
import { AboutClinicPage } from "@/screens/aboutclinic";
import { AdvantagesPage } from "@/screens/advantages";
import AppointmentsPage from "@/screens/appointments";
import { BannerPage } from "@/screens/banner";
import { FeedbackPage } from "@/screens/feedback";
import { PersonalPage } from "@/screens/personal";
import { ServicesPage } from "@/screens/services";
import { WorkPage } from "@/screens/work";

function Home() {
  return (
    <>
      <BannerPage />
      <ServicesPage />
      <AdvantagesPage />
      {/* <AboutClinicPage />
      <PersonalPage />
      <AppointmentsPage />
      <WorkPage />
      <AboutPage />
      <FeedbackPage /> */}
    </>
  );
}

export default withLayout(Home);
