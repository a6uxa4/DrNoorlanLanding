"use client";

import SwitchContact from "@/components/UI/SwitchContact/SwitchContact";
import { AboutService } from "@/screens/InnerPage/services/AboutService";
import { DetailService } from "@/screens/InnerPage/services/DetailService";
import { WorkService } from "@/screens/InnerPage/services/WorkService";
import { SERVICES_DATA } from "@/utils/constants/services.constant";
import { generateObject } from "@/utils/helpers";
import { NextPage } from "next";
import { useRouter } from "next/router";

const SubServicePage: NextPage = () => {
  const routes = useRouter();

  const serviceID = routes.query.serviceID
    ? parseInt(routes.query.serviceID as string)
    : null;

  return (
    <div>
      <DetailService
        serviceData={generateObject(SERVICES_DATA, serviceID, "subServices")}
      />
      <AboutService
        serviceData={generateObject(SERVICES_DATA, serviceID, "subServices")}
      />
      <WorkService />
      <SwitchContact />
    </div>
  );
};

export default SubServicePage;
