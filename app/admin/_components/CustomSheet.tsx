import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type CustomSheetProps = {
  buttonText: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function CustomSheet({
  buttonText,
  title,
  description,
  children,
}: CustomSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-2 h-fit py-2 w-full text-sm font-normal text-primary"
        >
          {buttonText}
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
