import { db } from "@/shared/lib/db";
import {
  CourseListElement,
  CreateCourseListElementData,
  DeleteCourseListElementData,
} from "./model/types";
import { cache } from "react";

class Courses {
  createCourse(data: CreateCourseListElementData) {
    return db.course.create({
      data,
    });
  }

  getCourse = cache((id: string): Promise<CourseListElement | null> => {
    return db.course.findUnique({
      where: {
        id,
      },
    });
  });

  getCourseList = cache((): Promise<CourseListElement[]> => {
    return db.course.findMany();
  });

  deleteCourse({ id }: DeleteCourseListElementData) {
    return db.course.delete({
      where: {
        id,
      },
    });
  }
}

export const courses = new Courses();
