export interface IFormSignUp {
    fullname?: string;
    email: string;
    password: string;
}

export const defaultValues: IFormSignUp = {
    fullname: '',
    email: '',
    password: '',
}