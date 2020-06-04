import request from "@/utils/request";

export async function getdata(): Promise<any> {
  return request('http://localhost:8080/test/joke',{
    method: 'GET'
  });
}
export async function submitdata(data) {
  return request('/api/login/account', {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    data: {...data}
  });
}
export async function submitJoke(data) {
    return request('http://localhost:8080/test/add',{
      headers:{
        'Content-Type': 'application/json'
      },
      method: 'POST',
      data:{...data}
    });

}
