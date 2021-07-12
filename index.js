import React from "react";

const useChildren = (children, target) => {
  const withTarget = React.useMemo(
    () =>
      React.Children.map(children, (item) => {
        if (React.isValidElement(item) && item.type === target) {
          return item;
        }
        return null;
      }),
    [children, target]
  );
  const withoutTarget = React.useMemo(
    () =>
      React.Children.map(children, (item) => {
        if (!React.isValidElement(item) || item.type !== target) {
          return item;
        }

        return null;
      }),
    [children, target]
  );

  return [withTarget, withoutTarget];
};

export { useChildren };
export default useChildren;
