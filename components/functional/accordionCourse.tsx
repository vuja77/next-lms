import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { Card } from "../ui/card";
export function AccordionCourse({ data, mat }: { data: any; mat: any }) {
  return (
    <Card className="p-3 block">
      <Accordion type="single" collapsible className="w-full max-h-auto">
        {data
          ? data.map((e: { name: string; id: number }, index: number) => {
              return (
                <AccordionItem className="border-border" key={index} value={"item" + index}>
                  <AccordionTrigger>{e.name}</AccordionTrigger>
                  {mat ? mat.map(
                    (
                      ee: { post_content: string; lesson_id: number },
                      index: number
                    ) => {
                      if (ee.lesson_id === e.id) {
                        return (
                          <AccordionContent key={index}>{ee.post_content}</AccordionContent>
                        );
                      }
                    }
                  ): null}
                </AccordionItem>
              );
            })
          : null}
      </Accordion>
    </Card>
  );
}
type Params = {
  id: number;
};
