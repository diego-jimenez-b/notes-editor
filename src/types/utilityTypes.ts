export type SetState<T = any> = React.Dispatch<React.SetStateAction<T>>;

// utility for overwriting generic overloads typing
export const withType = <T extends Function>(func: Function) => ((...args: any) => func(...args)) as unknown as T;
