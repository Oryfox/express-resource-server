import {Jwt, JwtPayload} from "jsonwebtoken";
import {Request} from "express"

interface AuthenticatedRequest extends Request {
    token?: Jwt | JwtPayload | string
}