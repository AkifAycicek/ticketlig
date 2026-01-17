declare global {
   type InferReturn<T> = T extends (...args: any[]) => infer R ? R : never;

   type Primitive = string | number | boolean | bigint | symbol | null | undefined;

   type Path<T> = T extends Primitive
      ? never
      : T extends readonly (infer U)[]
        ? `${number}` | `${number}.${Path<U>}`
        : {
             [K in keyof T & string]: T[K] extends Primitive
                ? K
                : T[K] extends readonly any[]
                  ? K | `${K}.${number}` | `${K}.${number}.${Path<T[K][number]>}`
                  : K | `${K}.${Path<T[K]>}`;
          }[keyof T & string];
}

export {};
