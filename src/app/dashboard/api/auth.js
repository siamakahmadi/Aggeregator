// utils/auth.js

import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const JWT_SECRET = 'yoursecurekey';

// Parse cookies
export const parseCookies = (req) => cookieParser(JWT_SECRET)(req); 

// Generate JWT 
export const generateToken = (data) => jwt.sign(data, JWT_SECRET);