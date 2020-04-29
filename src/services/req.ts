import request from "@/utils/request";

export async function getdata(): Promise<any> {
  return request('http://localhost:8080/test/joke');
}
