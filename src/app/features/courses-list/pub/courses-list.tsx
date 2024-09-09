import React from "react";
import { courses } from "../courses.repository";
import { CourseItem } from "../ui/course-item";
import { revalidatePath } from "next/cache";

type Props = {
  pathToRevalidate: string;
};

const CourseList = async ({ pathToRevalidate }: Props) => {
  const coursesList = await courses.getCourseList();

  const handleDeleteAction = async (id: string) => {
    "use server";

    await courses.deleteCourse({ id });
    revalidatePath(pathToRevalidate);
  };

  return (
    <div>
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
};

export { CourseList };
