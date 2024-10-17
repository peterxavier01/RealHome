import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";

type ModalProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({
  title,
  description,
  isOpen,
  onChange,
  children,
  className,
}: ModalProps) {
  return (
    <Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <DialogContent
        className={cn("overflow-y-auto max-h-[90vh] my-auto h-full", className)}
      >
        <DialogHeader>
          <DialogTitle className="text-xl md:text-3xl font-inter font-bold capitalize">
            {title}
          </DialogTitle>
          <DialogDescription className="font-inter font-medium">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
