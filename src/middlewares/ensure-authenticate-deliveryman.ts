import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Missing token',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const jwtSecret = String(process.env.JWT_SECRET);
    const { sub } = verify(token, jwtSecret);

    request.userId = sub as string;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid token.',
    });
  }
}
