export interface IError {
  message: string;
  response: {
    data: {
      code: number;
      message: string;
    };
    status: number;
    statusText: string;
    headers: any;
    config: any;
  };
}
