export class Response {
  success: boolean = true;
  message!: string;
}

export class ResponseData<T> extends Response {
  data: T = {} as T;
}
export class ResponseDataList<T> extends Response {
  data: T[] = [];
}