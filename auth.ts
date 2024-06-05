import jwksClient from "jwks-rsa";
import {NextFunction, Response} from "express";
import jwt, {GetPublicKeyOrSecret, Jwt, JwtHeader, JwtPayload, SigningKeyCallback, VerifyErrors} from "jsonwebtoken";
import {AuthenticatedRequest} from "./AuthenticatedRequest";

var uri: string

const getKey: GetPublicKeyOrSecret = (header: JwtHeader, callback: SigningKeyCallback) => {
    if (uri === undefined) {
      console.log("You have to init express resource server first");
    }
    jwksClient({
      jwksUri: uri
    }).getSigningKey(header.kid)
        .then((key: any) => {
            var signingKey = key.publicKey || key.rsaPublicKey;
            callback(null, signingKey);
        })
}

const auth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.header("Authorization")
    if (authHeader) {
        jwt.verify(authHeader.split(" ")[1], getKey, (errors: VerifyErrors, decoded: Jwt | JwtPayload | string) => {
            req.token = decoded
            next()
        })
    } else {
        next()
    }
}

export default (jwksUri: string) => {
  uri = jwksUri
  return auth
}