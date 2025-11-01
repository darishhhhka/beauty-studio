import { useCallback, useEffect, useRef, useState } from "react";
import { fetchData } from "./mockServer.ts";
import { useDebounce } from "../../hooks/useDebounce.ts";

export type Product = { id: number; name: string };
export const Test = () => {
  const [filter, setFilter] = useState("");
  const [prod, setProd] = useState<Product[]>([]);
  const lastfilter = useRef("");

  const debounced = useCallback(
    useDebounce(async (filter: string) => {
      if (!filter) {
        return;
      }
      const data = await fetchData(filter);
      if (lastfilter.current === filter) {
        setProd(data);
      }
    }, 500),
    []
  );

  useEffect(() => {
    lastfilter.current = filter;
    if (!filter) {
      setProd([]);
    } else {
      debounced(filter);
    }
  }, [filter, debounced]);

  return (
    <div>
      <input
        style={{ color: "black" }}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* <input /> */}
      {prod.map((p) => (
        <div style={{ color: "black" }} key={p.id}>
          {p.name}
        </div>
      ))}
    </div>
  );
};
