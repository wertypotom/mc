"use client";

import React, { useTransition } from "react";
import { CourseListElement } from "../model/types";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

type Props = {
  course: CourseListElement;
  onDelete: () => Promise<void>;
};

const CourseItem = ({ course, onDelete }: Props) => {
  const [isDeletePending, startDeleteTransition] = useTransition();

  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button disabled={isDeletePending} onClick={handleDelete}>
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export { CourseItem };
