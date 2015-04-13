///<reference path="credentials.ts"/>
///<reference path="signature.ts"/>
interface IAuthHeaders {
    "MBX-Auth": string;
    "X-Date": string;
    "Content-Type": string;
}

interface IHeader {
    forRequest(req: IRequestConfig): IAuthHeaders;
}

class Header implements IHeader{
    credentials: ICredentials;
    signature: ISignature;

    constructor(credentials:ICredentials, signature:ISignature) {
        this.credentials = credentials;
        this.signature = signature;
    }

    forRequest(req: IRequestConfig): IAuthHeaders {
        var date: string = new Date().toISOString();
        var signature = this.signature.forRequest(req, date);
        return {
            "MBX-Auth": `${this.credentials.token}:${signature}`,
            "Content-Type": "application/json",
            "X-Date": date
        }
    }
}