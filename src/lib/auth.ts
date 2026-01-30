// Helpers de Autenticação (Mock - substituir por backend real)

import { User } from './types';

// Simulação de banco de dados local (substituir por API/Supabase)
const USERS_KEY = 'agroconnect_users';
const CURRENT_USER_KEY = 'agroconnect_current_user';

export function getUsers(): User[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveUsers(users: User[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(CURRENT_USER_KEY);
  return data ? JSON.parse(data) : null;
}

export function setCurrentUser(user: User | null): void {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

export function validateCPF(cpf: string): boolean {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');
  
  if (cpf.length !== 11) return false;
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  
  // Validação dos dígitos verificadores
  let sum = 0;
  let remainder;
  
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;
  
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;
  
  return true;
}

export function formatCPF(cpf: string): string {
  cpf = cpf.replace(/[^\d]/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Senha deve ter no mínimo 8 caracteres');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Senha deve conter pelo menos uma letra maiúscula');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Senha deve conter pelo menos uma letra minúscula');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('Senha deve conter pelo menos um número');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Senha deve conter pelo menos um caractere especial');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

export async function register(data: {
  email: string;
  cpf: string;
  password: string;
  name: string;
}): Promise<{ success: boolean; error?: string; user?: User }> {
  const users = getUsers();
  
  // Verifica se email já existe
  if (users.some(u => u.email === data.email)) {
    return { success: false, error: 'Email já cadastrado' };
  }
  
  // Verifica se CPF já existe
  if (users.some(u => u.cpf === data.cpf)) {
    return { success: false, error: 'CPF já cadastrado' };
  }
  
  // Cria o usuário diretamente (sem confirmação de email)
  const newUser: User = {
    id: crypto.randomUUID(),
    email: data.email,
    cpf: data.cpf,
    name: data.name,
    quizCompleted: false,
    roles: [],
    specialties: [],
    planType: 'free_trial',
    trialEndsAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dias
    monthlyServicesPosted: 0,
    monthlySearchesUsed: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  users.push(newUser);
  saveUsers(users);
  
  // Autentica o usuário automaticamente
  setCurrentUser(newUser);
  
  return { success: true, user: newUser };
}

export async function login(data: {
  identifier: string; // email ou CPF
  password: string;
}): Promise<{ success: boolean; error?: string; user?: User }> {
  const users = getUsers();
  
  // Busca usuário por email ou CPF
  const user = users.find(
    u => u.email === data.identifier || u.cpf === data.identifier
  );
  
  if (!user) {
    return { success: false, error: 'Usuário não encontrado' };
  }
  
  // Em produção, verificar hash da senha
  // Por enquanto, mock simples
  
  setCurrentUser(user);
  return { success: true, user };
}

export function logout(): void {
  setCurrentUser(null);
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

export function needsQuiz(): boolean {
  const user = getCurrentUser();
  return user ? !user.quizCompleted : false;
}
