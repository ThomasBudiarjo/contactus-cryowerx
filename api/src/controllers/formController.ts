import { Request, Response, NextFunction } from 'express';
import { FormData } from '../types/ContactUs';
import { ContactForm } from '../models/ContactForm';

export const submitForm = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const formData: FormData = req.body;
    const { name, email, subject, message } = formData;

    // Save the form data to the database
    const savedForm = await ContactForm.create(formData);
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: savedForm,
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting the form. Please try again later.',
    });
    next(error);
  }
};
