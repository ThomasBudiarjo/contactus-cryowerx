import { Request, Response, NextFunction } from 'express';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const domPurify = DOMPurify(window);

const sanitizeInput = (req: Request, res: Response, next: NextFunction): void => {
  const sanitize = (input: string): string => domPurify.sanitize(input);

  if (req.body) {
    for (const key in req.body) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = sanitize(req.body[key]);
      }
    }
  }

  next();
};

export default sanitizeInput;
