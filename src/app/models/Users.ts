export class Users {
    UserId: number = 0;
    UserName: string = '';
    UserPass: string = '';
    Email: string = '';
}

export class LoginUser {
    UserPass: string = '';
    UserName: string = '';
    constructor (pass: string, user: string) {
        this.UserPass = pass;
        this.UserName = user;
    }
}

export class LoginEmail {
    UserPass: string = '';
    Email: string = '';

    constructor (pass: string, email: string) {
        this.UserPass = pass;
        this.Email = email;
    }
}

export class User {
    UserName: string = '';
    Email: string = '';
    UserIcon: string = '';
    iat: number = 0;
    exp: number = 0;
}


export class Cart {
    CartId: number = 0;
	UserName: string = '';
	StructureId: string = '';
	CountProduct: number = 0
}

export class CartBase {
    CartId: number = 0;
	StructureId: string = '';
	CountProduct: number = 0
}