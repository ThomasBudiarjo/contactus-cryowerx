import React, { createContext, useContext, useCallback, useState } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  isVisible: boolean;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, isVisible: true }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, isVisible: false } : toast
        )
      );
    }, 3000);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3500); 
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 transform z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`min-w-[250px] max-w-[400px] bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-slate-700 dark:border-slate-600 
            ${
              toast.isVisible
                ? "animate-toast-in animate-blur"
                : "animate-toast-out opacity-0"
            }
            hover:scale-105 transition-all duration-300 ease-in-out`}
          >
            <div className="flex p-4 items-center">
              <div>
                <img src={`/assets/${toast.type}.svg`} alt="" />
              </div>
              <div className="ms-3">
                <p className="text-sm text-gray-700 dark:text-neutral-300">
                  {toast.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
