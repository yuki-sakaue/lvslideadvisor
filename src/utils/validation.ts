// Validation utilities
export const validateEmail = (email: string): string | null => {
  if (!email) return 'メールアドレスを入力してください';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return '有効なメールアドレスを入力してください';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'パスワードを入力してください';
  if (password.length < 8) return 'パスワードは8文字以上で入力してください';
  if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(password)) return 'パスワードは英数字を含む必要があります';
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (!phone) return null; // Optional field
  const phoneRegex = /^[\d\-\(\)\+\s]+$/;
  if (!phoneRegex.test(phone)) return '有効な電話番号を入力してください';
  return null;
};

export const validateCardNumber = (cardNumber: string): string | null => {
  if (!cardNumber) return 'カード番号を入力してください';
  const cleanNumber = cardNumber.replace(/\s/g, '');
  if (!/^\d{13,19}$/.test(cleanNumber)) return '有効なカード番号を入力してください';
  
  // Luhn algorithm check
  let sum = 0;
  let isEven = false;
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i]);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  
  if (sum % 10 !== 0) return '有効なカード番号を入力してください';
  return null;
};

export const validateExpiryDate = (expiryDate: string): string | null => {
  if (!expiryDate) return '有効期限を入力してください';
  const [month, year] = expiryDate.split('/');
  
  if (!month || !year || month.length !== 2 || year.length !== 2) {
    return '有効期限をMM/YY形式で入力してください';
  }
  
  const monthNum = parseInt(month);
  const yearNum = parseInt(year);
  
  if (monthNum < 1 || monthNum > 12) return '有効な月を入力してください（01-12）';
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;
  
  if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
    return '有効期限が過去の日付です';
  }
  
  return null;
};

export const validateCVV = (cvv: string): string | null => {
  if (!cvv) return 'CVVを入力してください';
  if (!/^\d{3,4}$/.test(cvv)) return 'CVVは3-4桁の数字で入力してください';
  return null;
};

export const validateCardholderName = (name: string): string | null => {
  if (!name) return 'カード名義人を入力してください';
  if (name.length < 2) return 'カード名義人は2文字以上で入力してください';
  if (!/^[a-zA-Z\s]+$/.test(name)) return 'カード名義人は英字で入力してください';
  return null;
};

export const getPlanDisplayName = (plan: string | undefined): string => {
  switch (plan) {
    case 'free':
      return '無料プラン';
    case 'pro':
      return 'Proプラン';
    case 'enterprise':
      return 'Enterpriseプラン';
    default:
      return '不明なプラン';
  }
};

export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return '不明';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '不明';
    
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return '不明';
  }
};

export const normalizeSearchTerm = (term: string): string => {
  // Convert hiragana to katakana for better search
  return term.replace(/[\u3041-\u3096]/g, (match) => {
    return String.fromCharCode(match.charCodeAt(0) + 0x60);
  });
};