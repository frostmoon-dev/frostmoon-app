import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  modalSize?: "sm" | "lg";
};

export default function Modal({
  open,
  onOpenChange,
  children,
  modalSize = "lg",
}: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <div
          onClick={() => onOpenChange(false)}
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "180deg" }}
            animate={{
              scale: 1,
              rotate: "0deg",
              transition: {
                type: "spring",
                bounce: 0.25,
              },
            }}
            exit={{ scale: 0, rotate: "180deg" }}
            onClick={(e) => e.stopPropagation()}
          
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
