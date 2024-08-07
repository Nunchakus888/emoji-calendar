import { IoPrintOutline } from "react-icons/io5";

export const Print = () => {
  const print = () => {
    return typeof window !== undefined ? window.print() : 0;
  };

  return (
    <IoPrintOutline
      className="cursor-pointer size-7 print:hidden"
      onClick={print}
    />
  )
}