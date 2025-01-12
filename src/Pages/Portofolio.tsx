import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";
import PROJECTS from "@DATA/projects";
import CERTIFICATES from "@DATA/certificates";
import TECHNOLOGIES from "@DATA/technologies";
import { buildA11yTags, hasId } from "@utils/index";
import TabPanel from "@components/TabPanel";
import { T_CERTIFICATE, T_PROJECT } from "@types_def/index";
import SectionTitle from "@components/SectionTitle";
import TabContent from "@components/TabContent";

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState<number>(0);
  const handleChange = (_: any, newValue: number) => setValue(newValue);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portfolio">
      <SectionTitle title="Portfolio Showcase" subTitle="Explore my journey through projects, certifications, and technical expertise." />
      <Box sx={{ width: "100%" }}>
        {/* Tabs Section */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />} label="Projects" {...buildA11yTags(0)} />
            <Tab icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />} label="Certificates" {...buildA11yTags(1)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />} label="Tech Stack" {...buildA11yTags(2)} />
          </Tabs>
        </AppBar>

        {/* Swipeable Views */}
        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          <TabPanel value={0} index={0} dir={theme.direction}>
            <TabContent<T_PROJECT>
              items={PROJECTS}
              renderItem={(project: T_PROJECT) => (
                <CardProject
                  img={project.img}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  id={project.id}
                />
              )}
            />
          </TabPanel>

          <TabPanel value={1} index={1} dir={theme.direction}>
            <TabContent<T_CERTIFICATE>
              items={CERTIFICATES}
              renderItem={(certificate: T_CERTIFICATE) => <Certificate img={certificate.img} />}
            />
          </TabPanel>

          <TabPanel value={2} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {TECHNOLOGIES.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon techStackIcon={stack.icon} language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
