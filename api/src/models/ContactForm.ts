import pool from '../config/database';
import { FormData } from '../types/ContactUs';

export class ContactForm {
  static async create(formData: FormData) {
    const { name, email, subject, message } = formData;
    const query = `
      INSERT INTO contact_messages (name, email, subject, message, created_at)
      VALUES ($1, $2, $3, $4, NOW())
      RETURNING *
    `;

    try {
      const { rows } = await pool.query(query, [name, email, subject, message]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}
