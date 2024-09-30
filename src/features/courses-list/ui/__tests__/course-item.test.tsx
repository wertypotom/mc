import { render } from "@testing-library/react";
import { CourseItem } from "../course-item";
import userEvent from "@testing-library/user-event";

describe("CourseItem", () => {
  it("should handle onDelete method", async () => {
    const onDelete = jest.fn();

    const screen = render(
      <CourseItem
        course={{ id: "1234567", title: "Title", description: "Description" }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Remove"));

    expect(onDelete).toHaveBeenCalled();
  });
});
