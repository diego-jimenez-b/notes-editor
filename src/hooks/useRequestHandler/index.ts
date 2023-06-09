import { useState } from "react";
import { UseRequestHandler } from "./types";
import { withType } from "../../types/utilityTypes";

const useRequestHandler = <Args extends any[]>(
  func: (...args: Args) => Promise<any>,
  config: boolean | ((err: any) => void) | { initiallyLoading?: boolean; onError?: (err: any) => void }
) => {
  const [loading, setLoading] = useState(typeof config === "boolean" ? config : false);
  const [error, setError] = useState<any>(null);

  const handleRequest = async (...args: Args) => {
    setLoading(true);
    setError(null);

    try {
      await func(...args);
    } catch (err) {
      if (typeof config === "object" && config.onError) config.onError(err);
      setError(err);
    }

    setLoading(false);
  };

  handleRequest.loading = loading;
  handleRequest.error = error;
  return handleRequest;
};

export default withType<UseRequestHandler>(useRequestHandler);
