import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json({ limit: '10kb' }));

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX || '10'),
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form submission
app.post(
  '/api/contact',
  contactLimiter,
  [
    body('name')
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage('Name must be between 2 and 100 characters')
      .escape(),
    body('phone')
      .trim()
      .matches(/^(\+91[\s-]?)?[6-9]\d{9}$/)
      .withMessage('Please provide a valid Indian phone number'),
    body('email')
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address'),
    body('service')
      .trim()
      .notEmpty()
      .withMessage('Please select a service')
      .escape(),
    body('location')
      .trim()
      .isLength({ min: 2, max: 200 })
      .withMessage('Location must be between 2 and 200 characters')
      .escape(),
    body('message')
      .trim()
      .isLength({ min: 10, max: 1000 })
      .withMessage('Message must be between 10 and 1000 characters')
      .escape(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array().map(e => ({
          field: e.type === 'field' ? e.path : undefined,
          message: e.msg,
        })),
      });
    }

    // In production, send email notification or store in database
    // For now, log the sanitized submission
    console.log('Contact form submission received:', {
      name: req.body.name,
      service: req.body.service,
      location: req.body.location,
      timestamp: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: 'Thank you for your enquiry. We will contact you shortly.',
    });
  }
);

// Quote form submission
app.post(
  '/api/quote',
  contactLimiter,
  [
    body('name').trim().isLength({ min: 2, max: 100 }).escape(),
    body('phone').trim().matches(/^(\+91[\s-]?)?[6-9]\d{9}$/),
    body('email').trim().isEmail().normalizeEmail(),
    body('buildingType').trim().notEmpty().escape(),
    body('location').trim().isLength({ min: 2, max: 200 }).escape(),
    body('floors').optional().isInt({ min: 1, max: 100 }),
    body('elevatorType').optional().trim().escape(),
    body('quantity').optional().isInt({ min: 1, max: 50 }),
    body('requirements').optional().trim().isLength({ max: 2000 }).escape(),
    body('contactMethod').optional().trim().isIn(['phone', 'whatsapp', 'email']),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array().map(e => ({
          field: e.type === 'field' ? e.path : undefined,
          message: e.msg,
        })),
      });
    }

    console.log('Quote request received:', {
      name: req.body.name,
      buildingType: req.body.buildingType,
      location: req.body.location,
      timestamp: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: 'Thank you for your quote request. Our team will prepare a detailed quote and contact you within 24-48 hours.',
    });
  }
);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, _req, res, _next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ error: 'An internal error occurred. Please try again later.' });
});

app.listen(PORT, () => {
  console.log(`MAXSPEED LIFT API server running on port ${PORT}`);
});
