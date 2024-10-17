import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (text: string, length: number) => {
  if (!text) return;
  return text.slice(0, length) + "...";
};

/**** SAVE API data .xls file *******/
const fileExtension = ".xlsx";
const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

export const exportToCSV = <T>(apiData: T[], fileName: string) => {
  const worksheet = XLSX.utils.json_to_sheet(apiData);
  const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};
