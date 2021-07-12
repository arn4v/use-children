declare module "use-children" {
  type FilteredChildren = React.ReactElement<any, any>[];
  type UseChildren = (
    children: React.ReactNode | undefined,
    target: React.ElementType
  ) => [FilteredChildren, FilteredChildren];
  declare const useChildren: UseChildren;

  export { useChildren };
  export default useChildren;
}
