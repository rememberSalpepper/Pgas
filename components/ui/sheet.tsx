import React, { ReactElement, ReactNode } from "react";

interface SheetProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const Sheet: React.FC<SheetProps> = ({ children, open, onOpenChange }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-end transition-transform ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => onOpenChange(false)}
      />
      <div className="w-80 bg-gray-900 text-white shadow-lg p-6">{children}</div>
    </div>
  );
};

interface SheetContentProps {
  children: ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
}

export const SheetContent: React.FC<SheetContentProps> = ({
  children,
  side = "right",
  className = "",
}) => {
  const sideClasses = {
    left: "translate-x-[-100%] left-0",
    right: "translate-x-0 right-0",
    top: "translate-y-[-100%] top-0",
    bottom: "translate-y-0 bottom-0",
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center ${
        sideClasses[side]
      } bg-gray-900 shadow-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
};

interface SheetTriggerProps<T extends { className?: string }> {
  children: ReactElement<T>;
  asChild?: boolean;
  className?: string;
}

export const SheetTrigger = <T extends { className?: string }>({
  children,
  asChild = false,
  className = "",
}: SheetTriggerProps<T>): ReactElement => {
  if (asChild) {
    if (!React.isValidElement(children)) {
      throw new Error("`children` must be a valid React element when `asChild` is true.");
    }

    return React.cloneElement(children, {
      ...children.props,
      className: `${children.props.className || ""} ${className}`.trim(),
    });
  }

  return <button className={className}>{children}</button>;
};

interface SheetHeaderProps {
  children: ReactNode;
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({ children }) => {
  return <div className="text-lg font-bold mb-4">{children}</div>;
};

interface SheetTitleProps {
  children: ReactNode;
  className?: string;
}

export const SheetTitle: React.FC<SheetTitleProps> = ({ children, className = "" }) => {
  return <h2 className={`text-xl ${className}`}>{children}</h2>;
};
