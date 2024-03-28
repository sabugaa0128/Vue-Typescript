export interface loginFormData {
  username: string;
  password: string;
}

interface DateType{
  token:string
}
export interface loginResponseData {
  code: number;
  data:DateType
}

interface userInfo {
  userId:number
  avatar:string
  username:string
  password:string
  desc:string
  roles:string[]
  buttons:string[]
  routes:string[]
  token:string
}
interface user {
  checkUse:userInfo
}
export interface userInfoReponseData {
  code:number;
  data:user
}