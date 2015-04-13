interface ICredentials {
    token: string;
    secret: string;
}
declare class Credentials implements ICredentials {
    token: string;
    secret: string;
    constructor(token: string, secret: string);
}

interface IRequestConfig {
    method: string;
    url: string;
    body: string;
}

/// <reference path="./typings/cryptojs/cryptojs.d.ts" />
interface ISignature {
    forRequest(req: IRequestConfig, date: string): string;
}
declare class Signature implements ISignature {
    credentials: ICredentials;
    crypto: CryptoJS.CryptoJSStatic;
    constructor(credentials: ICredentials, crypto: CryptoJS.CryptoJSStatic);
    forRequest(req: IRequestConfig, date: string): string;
}

interface IAuthHeaders {
    "MBX-Auth": string;
    "X-Date": string;
    "Content-Type": string;
}
interface IHeader {
    forRequest(req: IRequestConfig): IAuthHeaders;
}
declare class Header implements IHeader {
    credentials: ICredentials;
    signature: ISignature;
    constructor(credentials: ICredentials, signature: ISignature);
    forRequest(req: IRequestConfig): IAuthHeaders;
}
