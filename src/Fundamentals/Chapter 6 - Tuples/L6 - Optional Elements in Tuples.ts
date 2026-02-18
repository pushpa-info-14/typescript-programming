type HttpResponse = [statusCode: number, data: string, error?: string];

// Both of these work!
const successResponse: HttpResponse = [200, "Success!"];
const errorResponse: HttpResponse = [404, "", "Resource not found"];

type HttpResponse2 = [statusCode: number, data?: string, error?: string];

type UserInfo = [name: string, age: number, address?: string];

function handleUserInfo(user: UserInfo) {
  const [name, age, address] = user;
  // name: string
  // age: number
  // address: string | undefined
}
