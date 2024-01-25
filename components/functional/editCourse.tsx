import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateCourse } from "@/app/actions/courseActions";

export default async function EditCourse(id: any) {
  async function update(formData: FormData) {
    "use server";
    console.log("aaa")
    updateCourse(formData, id);
  }
  return (
    <Dialog>
      <div>
        <DialogTrigger className="bg-primary text-white justify-center flex flex-row items-center p-1.5 rounded-md space-x-2 px-5 w-full">
          Edit <PlusCircledIcon className="ml-2"></PlusCircledIcon>
        </DialogTrigger>
      </div>

      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Edit course</DialogTitle>
          <DialogDescription>
            change information of this course
          </DialogDescription>
        </DialogHeader>
        <div>
          <form
            action={await update}
            className="flex flex-col items-center space-y-5"
            encType="multipart/form-data"
          >
            <Input placeholder="Course name" name="name"></Input>
            <Input placeholder="Description" name="description"></Input>
            <Select name="category_id">
              <SelectTrigger className="">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Light</SelectItem>
                <SelectItem value="2">Dark</SelectItem>
                <SelectItem value="3">System</SelectItem>
              </SelectContent>
            </Select>
            <Input name="file" type="file"></Input>
            <Button className="w-full justify-center">Edit course</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
