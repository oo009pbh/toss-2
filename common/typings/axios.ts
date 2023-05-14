export interface AxiosConfig {
  headers?: {
    [key: string]: string;
  };
  withCredentials?: boolean;
}

export interface AxiosData {
  [key: string]: any;
}

export interface AxiosResult {
  data: any;
  status: number;
  statusText: string;
}

export const isAxiosData = (data: any): data is AxiosData => {
  if (data !== null) return false;
  if (data instanceof FormData) return false;
  return typeof data === 'object';
};

export interface Axios {
  defaults: {
    baseUrl: string;
    headers: {
      [key: string]: string;
    };
  };
  get(url: string, config?: AxiosConfig): Promise<AxiosResult>;

  post(url: string, data?: string | AxiosData | FormData, config?: AxiosConfig): Promise<AxiosResult>;
}
