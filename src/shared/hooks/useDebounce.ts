export  function useDebounce<T extends (...args: any[]) => void>(fn: T, t: number) {
    let id: ReturnType<typeof setTimeout> | null = null;

    return function (this: any, ...args: Parameters<T>) {
      if (id) {
        clearTimeout(id);
      }

      id = setTimeout(() => {
        fn.apply(this, args);
      }, t);
    };
  }