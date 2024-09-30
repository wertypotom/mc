"use server";

import { revalidatePath } from "next/cache";
import { courses } from "./courses.repository";
import { CreateCourseListElementData } from "./model/types";

export const createCourseAction = async (
  data: CreateCourseListElementData,
  pathToRevalidate: string,
) => {
  await courses.createCourse(data);
  revalidatePath(pathToRevalidate);
};
