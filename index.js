import React from "react";

const useChildren = (children, target) => {
  return React.useMemo(() => {
    const withTarget = [];
    const withoutTarget = React.Children.map(children, (item) => {
      if (React.isValidElement(item) && item.type === target) {
        withTarget.push(item);
        return null;
      }

      return item;
    });

    return [withTarget, withoutTarget];
  }, [children, target]);
};

export { useChildren };
export default useChildren;
