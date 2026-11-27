/**
 * Form validation utilities for MAXSPEED LIFT
 */

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  message: string
}

export interface FieldValidation {
  [field: string]: ValidationRule[]
}

export function validateField(value: string, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    if (rule.required && (!value || value.trim().length === 0)) {
      return rule.message
    }
    if (rule.minLength && value.trim().length < rule.minLength) {
      return rule.message
    }
    if (rule.maxLength && value.trim().length > rule.maxLength) {
      return rule.message
    }
    if (rule.pattern && !rule.pattern.test(value.trim())) {
      return rule.message
    }
  }
  return null
}

export function validateForm(
  data: Record<string, string>,
  schema: FieldValidation
): Record<string, string> {
  const errors: Record<string, string> = {}
  for (const [field, rules] of Object.entries(schema)) {
    const error = validateField(data[field] || '', rules)
    if (error) {
      errors[field] = error
    }
  }
  return errors
}

// Indian phone number validation
export const phonePattern = /^(\+91[\s-]?)?[6-9]\d{9}$/
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const contactFormSchema: FieldValidation = {
  name: [
    { required: true, message: 'Full name is required' },
    { minLength: 2, message: 'Name must be at least 2 characters' },
    { maxLength: 100, message: 'Name must be less than 100 characters' },
  ],
  phone: [
    { required: true, message: 'Phone number is required' },
    { pattern: phonePattern, message: 'Please enter a valid Indian phone number' },
  ],
  email: [
    { required: true, message: 'Email address is required' },
    { pattern: emailPattern, message: 'Please enter a valid email address' },
  ],
  service: [
    { required: true, message: 'Please select a service' },
  ],
  location: [
    { required: true, message: 'Location is required' },
    { minLength: 2, message: 'Location must be at least 2 characters' },
  ],
  message: [
    { required: true, message: 'Message is required' },
    { minLength: 10, message: 'Message must be at least 10 characters' },
    { maxLength: 1000, message: 'Message must be less than 1000 characters' },
  ],
}

export const quoteFormSchema: FieldValidation = {
  name: [
    { required: true, message: 'Full name is required' },
    { minLength: 2, message: 'Name must be at least 2 characters' },
  ],
  phone: [
    { required: true, message: 'Phone number is required' },
    { pattern: phonePattern, message: 'Please enter a valid Indian phone number' },
  ],
  email: [
    { required: true, message: 'Email address is required' },
    { pattern: emailPattern, message: 'Please enter a valid email address' },
  ],
  buildingType: [
    { required: true, message: 'Please select a building type' },
  ],
  location: [
    { required: true, message: 'Location is required' },
  ],
}

// Sanitize user input to prevent XSS
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
