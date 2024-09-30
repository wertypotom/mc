type CourseListElement = {
  id: string;
  title: string;
  description: string;
};

type CreateCourseListElementData = {
  title: string;
  description: string;
};

type DeleteCourseListElementData = {
  id: string;
};

export {
  type CourseListElement,
  type CreateCourseListElementData,
  type DeleteCourseListElementData,
};
