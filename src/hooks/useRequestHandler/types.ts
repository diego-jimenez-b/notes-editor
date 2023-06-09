type Func<Args extends any[]> = ((...args: Args) => Promise<void>) & { loading: boolean; error: any };

export interface UseRequestHandler {
  <Args extends any[]>(func: (...args: Args) => Promise<any>): Func<Args>;
  <Args extends any[]>(func: (...args: Args) => Promise<any>, initiallyLoading: boolean): Func<Args>;
  <Args extends any[]>(func: (...args: Args) => Promise<any>, onError: (err: any) => void): Func<Args>;
  <Args extends any[]>(
    func: (...args: Args) => Promise<any>,
    config: { initiallyLoading?: boolean; onError?: (err: any) => void }
  ): Func<Args>;
}
