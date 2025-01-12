import PROJECTS from "@DATA/projects";
import { T_CERTIFICATE, T_PROJECT } from "@types_def/index";

const findProjectById = (id: string): T_PROJECT => {
  const project = PROJECTS.find((item) => item.id === id);
  if (project) return project;
  throw new Error(`Project with id ${id} not found`);
};

function buildA11yTags(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function hasId(item: T_CERTIFICATE | T_PROJECT): item is T_PROJECT {
  return (item as T_PROJECT).id !== undefined;
}
export { findProjectById, buildA11yTags, hasId };
