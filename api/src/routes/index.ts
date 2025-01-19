import express from 'express';
import { submitForm } from '../controllers/formController';
import validateForm from '../middlewares/validateForm';
import sanitizeInput from '../middlewares/sanitizeInput';

const router = express.Router();

router.post('/api/contactus', sanitizeInput, validateForm, submitForm);

export default router;
