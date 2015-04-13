/// <reference path="../typings/cryptojs/cryptojs.d.ts" />
/// <reference path="credentials.ts"/>
///<reference path="request.ts"/>

interface ISignature {
    forRequest(req: IRequestConfig, date: string): string;
}

class Signature implements ISignature {
    credentials: ICredentials;
    crypto: CryptoJS.CryptoJSStatic;

    constructor(credentials: ICredentials, crypto: CryptoJS.CryptoJSStatic) {
        this.credentials = credentials;
        this.crypto = crypto;
    }

    forRequest(req: IRequestConfig, date: string): string {
        var bodyHash: string = this.crypto.MD5(req.body).toString();
        var preHmac: string = `${req.method}\n${bodyHash}\n${date}\n${req.url}`;
        var words = this.crypto.HmacSHA1(preHmac, this.credentials.secret);
        return this.crypto.enc.Base64.stringify(words);
    }
}