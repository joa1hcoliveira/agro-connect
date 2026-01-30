// Tipos do Sistema AgroConnect

export type UserRole = 'prestador' | 'produtor' | 'comprador_vendedor' | 'multiplo';

export type ExperienceLevel = 'iniciante' | 'intermediario' | 'avancado' | 'especialista';

export type ServiceCategory = 
  | 'plantio'
  | 'colheita'
  | 'pulverizacao'
  | 'irrigacao'
  | 'manutencao_maquinas'
  | 'consultoria'
  | 'veterinaria'
  | 'transporte'
  | 'outros';

export interface QuizAnswers {
  // Passo 1: Identificação
  roles: UserRole[];
  
  // Passo 2: Experiência
  experienceLevel: ExperienceLevel;
  yearsExperience: number;
  
  // Passo 3: Serviços
  servicesOffered?: ServiceCategory[];
  servicesNeeded?: ServiceCategory[];
  
  // Passo 4: Localização
  state: string;
  city: string;
  workRadius: number; // em km
  
  // Passo 5: Preferências
  preferredPayment: 'por_dia' | 'por_hora' | 'por_tarefa' | 'negociavel';
  availability: 'tempo_integral' | 'meio_periodo' | 'fins_semana' | 'sob_demanda';
  
  // Passo 6: Frequência
  usageFrequency: 'diaria' | 'semanal' | 'mensal' | 'eventual';
  
  // Passo 7: Objetivos
  goals: string[];
}

export interface User {
  id: string;
  email: string;
  cpf: string;
  name: string;
  phone?: string;
  avatar?: string;
  
  // Dados do Quiz
  quizCompleted: boolean;
  quizAnswers?: QuizAnswers;
  
  // Perfil
  roles: UserRole[];
  bio?: string;
  specialties: string[];
  
  // Plano e Limites
  planType: 'free_trial' | 'free' | 'premium';
  trialEndsAt?: Date;
  monthlyServicesPosted: number;
  monthlySearchesUsed: number;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  providerId: string;
  
  name: string;
  description: string;
  category: ServiceCategory;
  
  photos: string[];
  videos: string[];
  
  pricing: {
    type: 'por_dia' | 'por_hora' | 'por_tarefa';
    amount: number;
    currency: 'BRL';
  };
  
  location: {
    state: string;
    city: string;
    radius: number;
  };
  
  available: boolean;
  
  // Estatísticas
  views: number;
  contacts: number;
  hires: number;
  
  createdAt: Date;
  updatedAt: Date;
}

export interface Rating {
  id: string;
  serviceId: string;
  providerId: string;
  contractorId: string;
  
  stars: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  
  createdAt: Date;
}

export interface MarketplaceItem {
  id: string;
  sellerId: string;
  
  title: string;
  description: string;
  category: 'maquina' | 'trator' | 'implemento' | 'ferramenta' | 'insumo' | 'equipamento';
  
  photos: string[];
  
  price: number;
  negotiable: boolean;
  
  condition: 'novo' | 'seminovo' | 'usado';
  year?: number;
  model?: string;
  brand?: string;
  
  location: {
    state: string;
    city: string;
  };
  
  status: 'active' | 'sold' | 'reserved';
  
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  
  content: string;
  type: 'text' | 'image' | 'service_request' | 'system';
  
  read: boolean;
  
  createdAt: Date;
}

export interface ServiceRequest {
  id: string;
  serviceId: string;
  contractorId: string;
  providerId: string;
  
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled';
  
  message?: string;
  
  startDate?: Date;
  endDate?: Date;
  
  createdAt: Date;
  updatedAt: Date;
}
