export const stripHtmlTags = (html: string) =>
  html && html.replace(/<[^>]*>?/gm, "");

export const splitNewLine = (text: string) => text.split("\n");

export const clsx = (...classes: string[]) => classes.filter(Boolean).join(" ");
