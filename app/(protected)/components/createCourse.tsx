import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateCourse } from "@/app/actions/courseActions";
import { createCourse } from "@/app/actions/createCourse";
export default async function CreateCourse() {
  async function update() {
    "use server";
    console.log("alo");
  }
  return (
    <Dialog>
                  <div>
                    <DialogTrigger className="bg-primary text-white flex flex-row items-center p-2.5 rounded-md">
                      Create your first course{" "}
                      <PlusCircledIcon></PlusCircledIcon>
                    </DialogTrigger>
                  </div>

                  <DialogContent className="">
                    <DialogHeader>
                      <DialogTitle>Create new course</DialogTitle>
                      <DialogDescription>
                        enter the name of the course and its category
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <form
                        action={await createCourse}
                        className="flex flex-col items-center space-y-5"
                      >
                        <Input
                          placeholder="Course name"
                          name="name"
                          required
                        ></Input>
                        <Input
                          placeholder="Course category"
                          name="course_type_id"
                        ></Input>
                        <Button className="w-full justify-center">
                          Create course
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
  );
}
