import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ABOUT } from "@/utils/constants/about.constant";
import CustomSVG from "../UI/CustomSvg/CustomSvg";

export const ResponsiveAbout = () => {
  return (
    <div className="hidden xs:block">
      <VerticalTimeline lineColor="#00d6d4">
        {ABOUT.map((item) => (
          <React.Fragment key={item.id}>
            <VerticalTimelineElement
              contentStyle={{
                background: "white",
                boxShadow: "rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              icon={
                <CustomSVG
                  paths={item.icon.paths}
                  width={item.icon.width}
                  height={item.icon.height}
                  className="fill-[#00D6D6]"
                />
              }
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <p className="text-black text-[14px]">{item.name}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
};
