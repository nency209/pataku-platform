export interface Register
{
  name:string,
  email:string,
  password:string
}

export interface Login
{
   email:string,
   password:string
}

export interface ContactFormValues
{
  name: string;
  email: string;
  subject: string;
  message: string;
}