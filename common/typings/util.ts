export interface dateFuncType {
  (format: string, timestamp: Date): string;
}

export interface addParamsToUrlFuncType {
  (baseUrl: string, params: { [key: string]: any }): string;
}

export interface querystringToObjectFuncType {
  (querystring: string): { [key: string]: any };
}
