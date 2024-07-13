import { clsx } from "@/helpers";

export default function Badge({
  classes,
  items,
  activeItems,
}: {
  classes?: string;
  items: string[];
  activeItems?: string[];
}) {
  return (
    <div className={clsx(classes ? classes : "", "badge-container")}>
      {items.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className={clsx(
            activeItems &&
              activeItems.length > 0 &&
              activeItems.find((i) => i == item)
              ? "badge-active"
              : "",
            "badge",
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
