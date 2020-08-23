declare type RequestPayload<T> =
  | { [key: string]: string | number | T | RequestPayload<any> }
  | T;
