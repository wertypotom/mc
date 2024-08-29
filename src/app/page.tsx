import { db } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import { CreateCourseForm } from "./features/courses-list/pub/create-course-form";
import { CourseList } from "./features/courses-list/pub/courses-list";

async function main() {
  console.log("Hello world!");
  const allUsers = await db.course.findMany();
  console.log(allUsers);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <CreateCourseForm pathToRevalidate="/" className="w-[300px]" />
      <CourseList pathToRevalidate="/" />
    </main>
  );
}
