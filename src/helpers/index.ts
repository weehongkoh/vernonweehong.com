import dayjs from "dayjs";

export const stripHtmlTags = (html: string): string =>
  html && html.replace(/<[^>]*>?/gm, "");

export const splitNewLine = (text: string): string[] => text.split("\n");

export const isEmptyOrWhitespace = (str: string | undefined): boolean => {
  if (str === undefined) {
    return true;
  }

  return str.trim() === "";
};

export const trimString = (text: string): string => {
  return text.replace(/\s/g, "");
};

export const clsx = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

export const formatDate = (date: string, format: string): string =>
  dayjs(date).format(format);
