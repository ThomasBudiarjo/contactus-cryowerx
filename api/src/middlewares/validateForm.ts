import { Request, Response, NextFunction } from 'express';
import { FormData } from '../types/ContactUs';

const validateForm = (req: Request, res: Response, next: NextFunction): void => {
  const formData = req.body as FormData;
  const { name, email, subject, message } = formData;

  if (!name || !email || !subject || !message) {
    res.status(400).json({
      success: false,
      message: 'All fields are required!',
    });
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      message: 'Please provide a valid email address!',
    });
    return;
  }

  next();
};

export default validateForm;
