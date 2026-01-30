"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Tractor, ArrowRight, ArrowLeft, CheckCircle2, MapPin, Users, Star, Shield, Briefcase, Search, Bell, MessageSquare, Calendar, TrendingUp, DollarSign, Package, Settings, LogOut, Menu, X, Upload, Camera, ShoppingCart, Eye, EyeOff, Send, Trash2, Clock, UserCheck, UserX } from "lucide-react";
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import dynamic from 'next/dynamic';

// Importar o componente do mapa dinamicamente (client-side only)
const LocationMapPicker = dynamic(() => import('@/components/custom/LocationMapPicker'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Carregando mapa...</div>
});
import type { UserRole, ExperienceLevel, ServiceCategory } from "@/lib/types";

const serviceCategories: { value: ServiceCategory; label: string }[] = [
  { value: 'plantio', label: 'Plantio e Semeadura' },
  { value: 'colheita', label: 'Colheita' },
  { value: 'pulverizacao', label: 'Pulverização' },
  { value: 'irrigacao', label: 'Irrigação' },
  { value: 'manutencao_maquinas', label: 'Manutenção de Máquinas' },
  { value: 'consultoria', label: 'Consultoria Agronômica' },
  { value: 'veterinaria', label: 'Veterinária' },
  { value: 'transporte', label: 'Transporte' },
  { value: 'outros', label: 'Outros Serviços' }
];

const cultures = [
  { value: 'milho', label: 'Milho' },
  { value: 'soja', label: 'Soja' },
  { value: 'cafe', label: 'Café' },
  { value: 'citros', label: 'Citros' },
  { value: 'outras', label: 'Outra(s)' }
];

const goals = [
  'Encontrar prestadores de serviços qualificados',
  'Oferecer meus serviços e aumentar minha clientela',
  'Comprar equipamentos e máquinas agrícolas',
  'Vender equipamentos e máquinas agrícolas',
  'Fazer networking com profissionais do agro',
  'Contratar serviços pontuais para minha propriedade',
  'Construir minha reputação profissional no setor'
];

// Mock data para notificações
const mockNotifications = [
  { id: Date.now() + 1, type: 'message', title: 'Nova mensagem de Carlos Mendes', message: 'Olá! Vi seu anúncio do trator...', time: '10:30', read: false },
  { id: Date.now() + 2, type: 'booking', title: 'Serviço agendado', message: 'Plantio de Soja agendado para 20/01/2024', time: '09:15', read: false },
  { id: Date.now() + 3, type: 'opportunity', title: 'Nova oportunidade próxima', message: 'Colheita de Café em Campinas - 15km', time: 'Ontem', read: false },
  { id: Date.now() + 4, type: 'message', title: 'Mensagem de Fazenda Santa Maria', message: 'Quando você pode começar o serviço?', time: '2 dias', read: true },
  { id: Date.now() + 5, type: 'opportunity', title: 'Oportunidade: Pulverização', message: 'Serviço de pulverização em São Paulo - 45km', time: '3 dias', read: true },
];

// Tipo para mensagens
type Message = {
  id: number;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: string;
  isCurrentUser: boolean;
};

// Tipo para conversas
type Conversation = {
  id: string;
  providerId: string;
  providerName: string;
  serviceTitle: string;
  messages: Message[];
  unreadCount: number;
};

// Tipo para candidaturas
type Application = {
  id: number;
  opportunityTitle: string;
  applicantName: string;
  applicantProfile: string;
  status: 'pending' | 'accepted' | 'rejected';
  appliedAt: string;
};

export default function HomePage() {
  const [currentView, setCurrentView] = useState<'landing' | 'quiz' | 'login' | 'app' | 'marketplace' | 'profile' | 'offer-service' | 'active-services' | 'messages' | 'all-services' | 'search' | 'notifications' | 'settings' | 'service-details' | 'account-info' | 'provider-profile' | 'chat' | 'applications'>('landing');
  const [currentStep, setCurrentStep] = useState(1);
  const [showMap, setShowMap] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [answers, setAnswers] = useState<any>({
    roles: [],
    servicesOffered: [],
    servicesNeeded: [],
    goals: [],
    cultures: [],
    otherServiceOfferedDescription: '',
    otherServiceNeededDescription: '',
    otherCulturesDescription: ''
  });

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [signUpName, setSignUpName] = useState('');

  // Profile state
  const [profileName, setProfileName] = useState('João da Silva');
  const [profileLocation, setProfileLocation] = useState('Campinas, SP');
  const [profileDescription, setProfileDescription] = useState('Prestador de serviços agrícolas com mais de 10 anos de experiência em plantio, colheita e manutenção de equipamentos.');
  const [profilePhoto, setProfilePhoto] = useState('');

  // Offer Service state
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [servicePriceType, setServicePriceType] = useState('por_dia');
  const [serviceLocation, setServiceLocation] = useState('');
  const [showPublishSuccess, setShowPublishSuccess] = useState(false);

  // Applications state
  const [applications, setApplications] = useState<Application[]>([]);

  // Published Services state
  const [publishedServices, setPublishedServices] = useState<any[]>([
    { 
      id: 1, 
      title: 'Plantio de Soja - 50 hectares', 
      provider: 'João da Silva', 
      location: 'Campinas, SP', 
      distance: 0, 
      price: 'R$ 150/dia', 
      rating: 4.8, 
      description: 'Serviço especializado em plantio de soja com equipamentos modernos', 
      client: 'Fazenda Santa Maria', 
      status: 'Em Andamento', 
      date: '15/01/2024', 
      value: 'R$ 2.500', 
      progress: 65,
      availability: {
        monday: { start: '08:00', end: '17:00' },
        tuesday: { start: '08:00', end: '17:00' },
        wednesday: { start: '08:00', end: '17:00' },
        thursday: { start: '08:00', end: '17:00' },
        friday: { start: '08:00', end: '17:00' },
        saturday: { start: '08:00', end: '12:00' },
        sunday: { start: 'Fechado', end: 'Fechado' }
      },
      priceType: 'por_dia',
      paymentMethods: ['Dinheiro', 'PIX', 'Transferência Bancária']
    },
    { 
      id: 2, 
      title: 'Manutenção de Trator John Deere', 
      provider: 'João da Silva', 
      location: 'Campinas, SP', 
      distance: 0, 
      price: 'R$ 300/tarefa', 
      rating: 4.9, 
      description: 'Manutenção preventiva e corretiva de tratores', 
      client: 'Sítio Boa Vista', 
      status: 'Em Andamento', 
      date: '12/01/2024', 
      value: 'R$ 800', 
      progress: 80,
      availability: {
        monday: { start: '07:00', end: '18:00' },
        tuesday: { start: '07:00', end: '18:00' },
        wednesday: { start: '07:00', end: '18:00' },
        thursday: { start: '07:00', end: '18:00' },
        friday: { start: '07:00', end: '18:00' },
        saturday: { start: 'Fechado', end: 'Fechado' },
        sunday: { start: 'Fechado', end: 'Fechado' }
      },
      priceType: 'por_tarefa',
      paymentMethods: ['Dinheiro', 'PIX', 'Cartão de Crédito']
    },
    { 
      id: 3, 
      title: 'Pulverização de Milho', 
      provider: 'João da Silva', 
      location: 'Campinas, SP', 
      distance: 0, 
      price: 'R$ 120/hora', 
      rating: 4.7, 
      description: 'Pulverização precisa para diversas culturas', 
      client: 'Fazenda Esperança', 
      status: 'Agendado', 
      date: '20/01/2024', 
      value: 'R$ 1.200', 
      progress: 0,
      availability: {
        monday: { start: '06:00', end: '16:00' },
        tuesday: { start: '06:00', end: '16:00' },
        wednesday: { start: '06:00', end: '16:00' },
        thursday: { start: '06:00', end: '16:00' },
        friday: { start: '06:00', end: '16:00' },
        saturday: { start: '06:00', end: '12:00' },
        sunday: { start: 'Fechado', end: 'Fechado' }
      },
      priceType: 'por_hora',
      paymentMethods: ['PIX', 'Transferência Bancária']
    },
    { 
      id: 4, 
      title: 'Colheita de Café', 
      provider: 'João da Silva', 
      location: 'Campinas, SP', 
      distance: 0, 
      price: 'R$ 200/dia', 
      rating: 4.6, 
      description: 'Colheita eficiente com maquinário de última geração', 
      client: 'Sítio Bom Jesus', 
      status: 'Em Andamento', 
      date: '18/01/2024', 
      value: 'R$ 3.500', 
      progress: 45,
      availability: {
        monday: { start: '05:00', end: '15:00' },
        tuesday: { start: '05:00', end: '15:00' },
        wednesday: { start: '05:00', end: '15:00' },
        thursday: { start: '05:00', end: '15:00' },
        friday: { start: '05:00', end: '15:00' },
        saturday: { start: '05:00', end: '12:00' },
        sunday: { start: 'Fechado', end: 'Fechado' }
      },
      priceType: 'por_dia',
      paymentMethods: ['Dinheiro', 'PIX']
    }
  ]);

  // Account Info state
  const [accountEmail, setAccountEmail] = useState('joao.silva@email.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);
  const [emailChangeSuccess, setEmailChangeSuccess] = useState(false);

  // Marketplace state
  const [marketplaceItems, setMarketplaceItems] = useState([
    {
      id: 1,
      title: 'Trator John Deere 5075E',
      description: 'Trator em excelente estado de conservação, com apenas 500 horas de uso. Ideal para pequenas e médias propriedades.',
      condition: 'Excelente',
      price: 'R$ 180.000',
      acceptsTrade: true,
      seller: 'Carlos Mendes',
      location: 'Ribeirão Preto, SP'
    },
    {
      id: 2,
      title: 'Pulverizador Jacto Advance 2000',
      description: 'Pulverizador autopropelido com barra de 24 metros. Bem conservado, revisões em dia.',
      condition: 'Bom',
      price: 'R$ 95.000',
      acceptsTrade: false,
      seller: 'Fazenda Boa Vista',
      location: 'Uberaba, MG'
    },
    {
      id: 3,
      title: 'Colheitadeira Case IH 2388',
      description: 'Colheitadeira com plataforma de milho e soja. Necessita de pequenos reparos.',
      condition: 'Regular',
      price: 'R$ 220.000',
      acceptsTrade: true,
      seller: 'Agro Máquinas Ltda',
      location: 'Londrina, PR'
    }
  ]);

  // Chat state - Sistema de mensagens
  const currentUserId = 'user-joao'; // ID do usuário logado
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 'conv-1',
      providerId: 'carlos-mendes',
      providerName: 'Carlos Mendes',
      serviceTitle: 'Trator John Deere 5075E',
      messages: [
        {
          id: 1,
          senderId: 'carlos-mendes',
          senderName: 'Carlos Mendes',
          text: 'Olá! Vi seu anúncio do trator. Ainda está disponível?',
          timestamp: '10:25',
          isCurrentUser: false
        },
        {
          id: 2,
          senderId: currentUserId,
          senderName: 'João da Silva',
          text: 'Sim, ainda está disponível! Você gostaria de agendar uma visita?',
          timestamp: '10:28',
          isCurrentUser: true
        },
        {
          id: 3,
          senderId: 'carlos-mendes',
          senderName: 'Carlos Mendes',
          text: 'Ótimo! Podemos agendar para amanhã de manhã?',
          timestamp: '10:30',
          isCurrentUser: false
        }
      ],
      unreadCount: 1
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinishQuiz = () => {
    setCurrentView('login');
    setCurrentStep(1);
  };

  const handleLogin = () => {
    setCurrentView('app');
  };

  const handleSignUp = () => {
    setCurrentView('app');
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    if (newPassword.length < 6) {
      alert('A nova senha deve ter pelo menos 6 caracteres!');
      return;
    }
    if (!currentPassword) {
      alert('Digite sua senha atual para confirmar!');
      return;
    }
    
    // Simula mudança de senha
    setPasswordChangeSuccess(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    
    setTimeout(() => {
      setPasswordChangeSuccess(false);
    }, 3000);
  };

  const handleChangeEmail = () => {
    if (!accountEmail.includes('@')) {
      alert('Digite um email válido!');
      return;
    }
    
    // Simula mudança de email
    setEmailChangeSuccess(true);
    
    setTimeout(() => {
      setEmailChangeSuccess(false);
    }, 3000);
  };

  const handlePublishService = () => {
    // Validação dos campos
    if (!serviceName.trim()) {
      alert('Por favor, preencha o nome do serviço!');
      return;
    }
    if (!serviceDescription.trim()) {
      alert('Por favor, preencha a descrição do serviço!');
      return;
    }
    if (!servicePrice.trim()) {
      alert('Por favor, preencha o valor do serviço!');
      return;
    }
    if (!serviceLocation.trim()) {
      alert('Por favor, preencha a localização!');
      return;
    }

    // Criar novo serviço
    const newService = {
      id: publishedServices.length + 1,
      title: serviceName,
      description: serviceDescription,
      provider: profileName,
      location: serviceLocation,
      distance: 0,
      price: `R$ ${servicePrice}/${servicePriceType === 'por_dia' ? 'dia' : servicePriceType === 'por_hora' ? 'hora' : 'tarefa'}`,
      rating: 0,
      client: 'Aguardando Cliente',
      status: 'Publicado',
      date: new Date().toLocaleDateString('pt-BR'),
      value: `R$ ${servicePrice}/${servicePriceType === 'por_dia' ? 'dia' : servicePriceType === 'por_hora' ? 'hora' : 'tarefa'}`,
      priceType: servicePriceType,
      progress: 0,
      availability: {
        monday: { start: '08:00', end: '17:00' },
        tuesday: { start: '08:00', end: '17:00' },
        wednesday: { start: '08:00', end: '17:00' },
        thursday: { start: '08:00', end: '17:00' },
        friday: { start: '08:00', end: '17:00' },
        saturday: { start: '08:00', end: '12:00' },
        sunday: { start: 'Fechado', end: 'Fechado' }
      },
      paymentMethods: ['Dinheiro', 'PIX', 'Transferência Bancária']
    };

    // Adicionar à lista de serviços publicados
    setPublishedServices([newService, ...publishedServices]);

    // Mostrar feedback de sucesso
    setShowPublishSuccess(true);

    // Limpar formulário
    setServiceName('');
    setServiceDescription('');
    setServicePrice('');
    setServiceLocation('');
    setServicePriceType('por_dia');

    // Redirecionar após 2 segundos
    setTimeout(() => {
      setShowPublishSuccess(false);
      setCurrentView('active-services');
    }, 2000);
  };

  const handleViewProfile = (service: any) => {
    setSelectedService(service);
    setCurrentView('provider-profile');
  };

  const handleContact = (service: any) => {
    setSelectedService(service);
    
    // Verificar se já existe uma conversa com este prestador
    const existingConversation = conversations.find(
      conv => conv.providerId === service.provider && conv.serviceTitle === service.title
    );

    if (!existingConversation) {
      // Criar nova conversa
      const newConversation: Conversation = {
        id: `conv-${Date.now()}`,
        providerId: service.provider,
        providerName: service.provider,
        serviceTitle: service.title,
        messages: [
          {
            id: 1,
            senderId: service.provider,
            senderName: service.provider,
            text: 'Olá! Obrigado pelo interesse no meu serviço. Como posso ajudar?',
            timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            isCurrentUser: false
          }
        ],
        unreadCount: 0
      };
      setConversations([...conversations, newConversation]);
      setSelectedConversation(newConversation.id);
    } else {
      setSelectedConversation(existingConversation.id);
    }

    setCurrentView('chat');
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim() || !selectedConversation) return;

    const conversation = conversations.find(conv => conv.id === selectedConversation);
    if (!conversation) return;

    const newMessage: Message = {
      id: Date.now(),
      senderId: currentUserId,
      senderName: profileName,
      text: currentMessage.trim(),
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true
    };

    setConversations(conversations.map(conv => {
      if (conv.id === selectedConversation) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage]
        };
      }
      return conv;
    }));

    // Simular resposta do prestador após 2 segundos
    setTimeout(() => {
      const responseMessage: Message = {
        id: Date.now() + 1,
        senderId: conversation.providerId,
        senderName: conversation.providerName,
        text: 'Recebi sua mensagem! Vou analisar e responder em breve.',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        isCurrentUser: false
      };

      setConversations(conversations.map(conv => {
        if (conv.id === selectedConversation) {
          return {
            ...conv,
            messages: [...conv.messages, responseMessage],
            unreadCount: conv.unreadCount + 1
          };
        }
        return conv;
      }));

      // Criar notificação de nova mensagem
      const newNotification = {
        id: Date.now(),
        type: 'message',
        title: `Nova mensagem de ${conversation.providerName}`,
        message: responseMessage.text,
        time: 'Agora',
        read: false
      };
      setNotifications([newNotification, ...notifications]);
    }, 2000);

    setCurrentMessage('');
  };

  const handleDeleteConversation = (conversationId: string) => {
    setConversations(conversations.filter(conv => conv.id !== conversationId));
    if (selectedConversation === conversationId) {
      setSelectedConversation(null);
    }
  };

  const handleApplyForOpportunity = (opportunity: any) => {
    // Criar nova candidatura
    const newApplication: Application = {
      id: applications.length + 1,
      opportunityTitle: opportunity.title,
      applicantName: profileName,
      applicantProfile: profileDescription,
      status: 'pending',
      appliedAt: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    setApplications([newApplication, ...applications]);
    
    // Criar notificação para o anunciante
    const newNotification = {
      id: Date.now() + Math.random(),
      type: 'application',
      title: 'Nova candidatura recebida!',
      message: `${profileName} se candidatou para: ${opportunity.title}`,
      time: 'Agora',
      read: false
    };
    
    setNotifications([newNotification, ...notifications]);
    
    // Feedback visual
    alert(`Candidatura enviada com sucesso! O anunciante receberá uma notificação e analisará seu perfil.`);
  };

  const handleAcceptApplication = (applicationId: number) => {
    setApplications(applications.map(app => 
      app.id === applicationId ? { ...app, status: 'accepted' } : app
    ));
    
    const application = applications.find(app => app.id === applicationId);
    if (application) {
      alert(`Candidatura de ${application.applicantName} aceita com sucesso!`);
    }
  };

  const handleRejectApplication = (applicationId: number) => {
    setApplications(applications.map(app => 
      app.id === applicationId ? { ...app, status: 'rejected' } : app
    ));
    
    const application = applications.find(app => app.id === applicationId);
    if (application) {
      alert(`Candidatura de ${application.applicantName} recusada.`);
    }
  };

  const handleViewServiceDetails = (service: any) => {
    setSelectedService(service);
    setCurrentView('service-details');
  };

  const toggleRole = (role: UserRole) => {
    const currentRoles = answers.roles || [];
    if (currentRoles.includes(role)) {
      setAnswers({ ...answers, roles: currentRoles.filter((r: UserRole) => r !== role) });
    } else {
      setAnswers({ ...answers, roles: [...currentRoles, role] });
    }
  };

  const toggleService = (service: ServiceCategory, type: 'offered' | 'needed') => {
    const key = type === 'offered' ? 'servicesOffered' : 'servicesNeeded';
    const current = answers[key] || [];
    if (current.includes(service)) {
      setAnswers({ ...answers, [key]: current.filter((s: ServiceCategory) => s !== service) });
    } else {
      setAnswers({ ...answers, [key]: [...current, service] });
    }
  };

  const toggleGoal = (goal: string) => {
    const currentGoals = answers.goals || [];
    if (currentGoals.includes(goal)) {
      setAnswers({ ...answers, goals: currentGoals.filter((g: string) => g !== goal) });
    } else {
      setAnswers({ ...answers, goals: [...currentGoals, goal] });
    }
  };

  const toggleCulture = (culture: string) => {
    const currentCultures = answers.cultures || [];
    if (currentCultures.includes(culture)) {
      setAnswers({ ...answers, cultures: currentCultures.filter((c: string) => c !== culture) });
    } else {
      setAnswers({ ...answers, cultures: [...currentCultures, culture] });
    }
  };

  const handleLocationSelect = (location: {
    latitude: number;
    longitude: number;
    city: string;
    state: string;
    radius: number;
  }) => {
    setAnswers({
      ...answers,
      city: location.city,
      state: location.state,
      workRadius: location.radius,
      latitude: location.latitude,
      longitude: location.longitude,
    });
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (answers.roles?.length || 0) > 0;
      case 2:
        return answers.experienceLevel && answers.yearsExperience !== undefined;
      case 3:
        return true;
      case 4:
        const hasCultures = (answers.cultures?.length || 0) > 0;
        const needsOtherDescription = answers.cultures?.includes('outras');
        if (needsOtherDescription) {
          return hasCultures && answers.otherCulturesDescription?.trim();
        }
        return hasCultures;
      case 5:
        return answers.state && answers.city && answers.workRadius;
      case 6:
        return answers.preferredPayment && answers.availability;
      case 7:
        return answers.usageFrequency;
      case 8:
        return (answers.goals?.length || 0) > 0;
      default:
        return false;
    }
  };

  // Obter conversa atual
  const currentConversation = selectedConversation 
    ? conversations.find(conv => conv.id === selectedConversation)
    : null;

  // VIEW: APPLICATIONS (Nova view para gerenciar candidaturas)
  if (currentView === 'applications') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('app')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Dashboard
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Candidaturas Recebidas</h2>
            <p className="text-gray-600">Analise os perfis e decida aceitar ou recusar</p>
          </div>

          <div className="space-y-4">
            {applications.length > 0 ? (
              applications.map((application) => (
                <Card key={application.id} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                          {application.applicantName.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{application.applicantName}</h3>
                          <p className="text-sm text-gray-600">Candidatou-se às {application.appliedAt}</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">Oportunidade:</p>
                        <p className="text-gray-900">{application.opportunityTitle}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Perfil do Candidato:</p>
                        <p className="text-gray-600 text-sm">{application.applicantProfile}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      application.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                      application.status === 'accepted' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {application.status === 'pending' ? 'Pendente' :
                       application.status === 'accepted' ? 'Aceito' : 'Recusado'}
                    </span>
                  </div>

                  {application.status === 'pending' && (
                    <div className="flex gap-3 pt-4 border-t">
                      <Button 
                        variant="outline"
                        className="flex-1 border-red-500 text-red-600 hover:bg-red-50"
                        onClick={() => handleRejectApplication(application.id)}
                      >
                        <UserX className="w-4 h-4 mr-2" />
                        Recusar
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                        onClick={() => handleAcceptApplication(application.id)}
                      >
                        <UserCheck className="w-4 h-4 mr-2" />
                        Aceitar
                      </Button>
                    </div>
                  )}
                </Card>
              ))
            ) : (
              <Card className="p-12 text-center">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma candidatura recebida</h3>
                <p className="text-gray-600">Quando alguém se candidatar às suas oportunidades, aparecerá aqui.</p>
              </Card>
            )}
          </div>
        </main>
      </div>
    );
  }

  // VIEW: CHAT
  if (currentView === 'chat') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('messages')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar às Mensagens
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="p-6 h-[600px] flex flex-col">
            <div className="flex items-center gap-3 pb-4 border-b mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                {currentConversation?.providerName.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{currentConversation?.providerName}</h3>
                <p className="text-sm text-gray-600">{currentConversation?.serviceTitle}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {currentConversation?.messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.isCurrentUser ? 'justify-end' : ''}`}>
                  {!message.isCurrentUser && (
                    <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {message.senderName.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                    </div>
                  )}
                  <div className={`rounded-lg p-3 max-w-[70%] ${
                    message.isCurrentUser 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                      : 'bg-gray-100'
                  }`}>
                    <p className={message.isCurrentUser ? 'text-white' : 'text-gray-900'}>{message.text}</p>
                    <span className={`text-xs mt-1 block ${message.isCurrentUser ? 'text-green-100' : 'text-gray-500'}`}>
                      {message.timestamp}
                    </span>
                  </div>
                  {message.isCurrentUser && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {profileName.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <Input
                placeholder="Digite sua mensagem..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                className="flex-1 border-2 border-gray-200 focus:border-green-500"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!currentMessage.trim()}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  // VIEW: SERVICE DETAILS
  if (currentView === 'service-details') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('active-services')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar aos Serviços Ativos
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedService?.title}</h2>
                <p className="text-gray-600">{selectedService?.client}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedService?.status === 'Em Andamento' ? 'bg-blue-100 text-blue-700' :
                selectedService?.status === 'Concluído' ? 'bg-green-100 text-green-700' :
                selectedService?.status === 'Publicado' ? 'bg-green-100 text-green-700' :
                'bg-orange-100 text-orange-700'
              }`}>
                {selectedService?.status}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-gray-700 font-medium mb-2 block">Descrição do Serviço</Label>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{selectedService?.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">Data de Início</Label>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <span className="text-lg">{selectedService?.date}</span>
                  </div>
                </div>

                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">Valor do Serviço</Label>
                  <div className="flex items-center gap-2 text-gray-900">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">{selectedService?.value}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Cobrança: {selectedService?.priceType === 'por_dia' ? 'Por Dia' : selectedService?.priceType === 'por_hora' ? 'Por Hora' : 'Por Tarefa'}
                  </p>
                </div>

                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">Local de Atuação</Label>
                  <div className="flex items-start gap-2 text-gray-900">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-sm">{selectedService?.location}</span>
                  </div>
                </div>

                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">Formas de Pagamento</Label>
                  <div className="flex flex-wrap gap-2">
                    {selectedService?.paymentMethods?.map((method: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-gray-700 font-medium mb-3 block">Disponibilidade de Horários</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService?.availability && Object.entries(selectedService.availability).map(([day, hours]: [string, any]) => {
                    const dayNames: { [key: string]: string } = {
                      monday: 'Segunda',
                      tuesday: 'Terça',
                      wednesday: 'Quarta',
                      thursday: 'Quinta',
                      friday: 'Sexta',
                      saturday: 'Sábado',
                      sunday: 'Domingo'
                    };
                    return (
                      <Card key={day} className="p-3 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{dayNames[day]}</span>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            {hours.start === 'Fechado' ? (
                              <span className="text-red-600">Fechado</span>
                            ) : (
                              <span>{hours.start} - {hours.end}</span>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {selectedService?.progress !== undefined && selectedService.progress > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-gray-700 font-medium">Progresso do Serviço</Label>
                    <span className="text-2xl font-bold text-green-600">{selectedService.progress}%</span>
                  </div>
                  <Progress value={selectedService.progress} className="h-3" />
                </div>
              )}

              <div className="flex gap-3 pt-6 border-t">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleContact(selectedService)}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Mensagem
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => setCurrentView('active-services')}
                >
                  Voltar
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  // VIEW: PROVIDER PROFILE
  if (currentView === 'provider-profile') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('search')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar à Busca
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                {selectedService?.provider.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedService?.provider}</h2>
              <p className="text-gray-600 mb-4">{selectedService?.location}</p>
              <div className="flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`w-5 h-5 ${star <= Math.floor(selectedService?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="text-lg text-gray-600 ml-2">({selectedService?.rating})</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sobre</h3>
                <p className="text-gray-600">{selectedService?.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Serviço Oferecido</h3>
                <Card className="p-4 bg-green-50 border-2 border-green-200">
                  <h4 className="font-bold text-gray-900 mb-2">{selectedService?.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Valor:</span>
                    <span className="text-2xl font-bold text-green-600">{selectedService?.price}</span>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Estatísticas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <p className="text-3xl font-bold text-green-600">47</p>
                    <p className="text-sm text-gray-600">Serviços Concluídos</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-3xl font-bold text-green-600">98%</p>
                    <p className="text-sm text-gray-600">Taxa de Sucesso</p>
                  </Card>
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t">
                <Button 
                  onClick={() => handleContact(selectedService)}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contatar
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  // VIEW: ACCOUNT INFO
  if (currentView === 'account-info') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('settings')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar às Configurações
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Informações Pessoais da Conta</h2>
            <p className="text-gray-600">Gerencie seu email e senha de acesso</p>
          </div>

          <div className="space-y-6">
            {/* Email Section */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Email da Conta</h3>
                  <p className="text-sm text-gray-600">Altere o email usado para acessar sua conta</p>
                </div>
              </div>

              {emailChangeSuccess && (
                <div className="mb-4 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">Email alterado com sucesso!</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <Label htmlFor="account-email" className="text-gray-700 font-medium">Email Atual</Label>
                  <Input
                    id="account-email"
                    type="email"
                    value={accountEmail}
                    onChange={(e) => setAccountEmail(e.target.value)}
                    className="mt-2 border-2 border-gray-200 focus:border-blue-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <Button 
                  onClick={handleChangeEmail}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  Atualizar Email
                </Button>
              </div>
            </Card>

            {/* Password Section */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Alterar Senha</h3>
                  <p className="text-sm text-gray-600">Mantenha sua conta segura com uma senha forte</p>
                </div>
              </div>

              {passwordChangeSuccess && (
                <div className="mb-4 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">Senha alterada com sucesso!</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <Label htmlFor="current-password" className="text-gray-700 font-medium">Senha Atual</Label>
                  <div className="relative mt-2">
                    <Input
                      id="current-password"
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="border-2 border-gray-200 focus:border-green-500 pr-10"
                      placeholder="Digite sua senha atual"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="new-password" className="text-gray-700 font-medium">Nova Senha</Label>
                  <div className="relative mt-2">
                    <Input
                      id="new-password"
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="border-2 border-gray-200 focus:border-green-500 pr-10"
                      placeholder="Digite sua nova senha"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Mínimo de 6 caracteres</p>
                </div>

                <div>
                  <Label htmlFor="confirm-password" className="text-gray-700 font-medium">Confirmar Nova Senha</Label>
                  <div className="relative mt-2">
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="border-2 border-gray-200 focus:border-green-500 pr-10"
                      placeholder="Confirme sua nova senha"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <Button 
                  onClick={handleChangePassword}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Alterar Senha
                </Button>
              </div>
            </Card>

            {/* Security Tips */}
            <Card className="p-6 bg-orange-50 border-2 border-orange-200">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Dicas de Segurança</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Use uma senha forte com letras, números e símbolos</li>
                    <li>• Não compartilhe sua senha com ninguém</li>
                    <li>• Altere sua senha regularmente</li>
                    <li>• Não use a mesma senha em diferentes sites</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  // VIEW: SEARCH
  if (currentView === 'search') {
    const filteredServices = searchQuery 
      ? publishedServices.filter(s => 
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).sort((a, b) => a.distance - b.distance)
      : publishedServices.sort((a, b) => a.distance - b.distance);

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('app')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Dashboard
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Buscar Serviços</h2>
            <div className="flex gap-3">
              <Input
                placeholder="Digite o serviço que procura..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-2 border-gray-200 focus:border-green-500"
              />
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <Card key={service.id} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-600 mb-2">{service.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {service.location} • {service.distance}km
                        </span>
                        {service.rating > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {service.rating}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600 mb-2">{service.price}</p>
                      <p className="text-sm text-gray-600">por {service.provider}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleViewProfile(service)}
                    >
                      Ver Perfil
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      onClick={() => handleContact(service)}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contatar
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-12 text-center">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum serviço encontrado</h3>
                <p className="text-gray-600">Tente buscar com outros termos ou aguarde novos serviços serem publicados.</p>
              </Card>
            )}
          </div>
        </main>
      </div>
    );
  }

  // VIEW: NOTIFICATIONS
  if (currentView === 'notifications') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('app')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Dashboard
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Notificações</h2>
            <p className="text-gray-600">Fique por dentro de tudo que acontece</p>
          </div>

          <div className="space-y-3">
            {notifications.map((notif) => (
              <Card 
                key={notif.id} 
                className={`p-5 hover:shadow-lg transition-shadow cursor-pointer ${
                  !notif.read ? 'border-l-4 border-l-green-600 bg-green-50' : ''
                }`}
                onClick={() => {
                  markNotificationAsRead(notif.id);
                  if (notif.type === 'application') {
                    setCurrentView('applications');
                  }
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {notif.type === 'message' && <MessageSquare className="w-5 h-5 text-blue-600" />}
                      {notif.type === 'booking' && <Calendar className="w-5 h-5 text-green-600" />}
                      {notif.type === 'opportunity' && <Briefcase className="w-5 h-5 text-orange-600" />}
                      {notif.type === 'application' && <UserCheck className="w-5 h-5 text-purple-600" />}
                      <h4 className="font-semibold text-gray-900">{notif.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{notif.message}</p>
                    <span className="text-xs text-gray-500">{notif.time}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notif.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // VIEW: SETTINGS
  if (currentView === 'settings') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('app')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Dashboard
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Configurações</h2>

          <div className="space-y-4">
            <Card 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setCurrentView('profile')}
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">Meus Dados</h3>
                  <p className="text-sm text-gray-600">Edite suas informações pessoais e foto de perfil</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setCurrentView('account-info')}
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">Informações Pessoais da Conta</h3>
                  <p className="text-sm text-gray-600">Gerencie email, senha e segurança</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setCurrentView('marketplace')}
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">Marketplace</h3>
                  <p className="text-sm text-gray-600">Acesse anúncios de implementos e maquinários</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setCurrentView('all-services')}
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">Histórico de Serviços</h3>
                  <p className="text-sm text-gray-600">Veja todos os serviços realizados</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  // VIEW: MARKETPLACE
  if (currentView === 'marketplace') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setCurrentView('app')}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar ao Dashboard
              </Button>
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-green-600" />
                <h1 className="text-2xl font-bold text-green-600">Marketplace</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Implementos e Maquinários
            </h2>
            <p className="text-gray-600">
              Compre e venda equipamentos agrícolas com segurança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaceItems.map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-48 rounded-lg flex items-center justify-center mb-4">
                    <Package className="w-20 h-20 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Estado:</span>
                    <span className={`font-semibold px-3 py-1 rounded-full ${
                      item.condition === 'Excelente' ? 'bg-green-100 text-green-700' :
                      item.condition === 'Bom' ? 'bg-blue-100 text-blue-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {item.condition}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Valor:</span>
                    <span className="text-2xl font-bold text-green-600">{item.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Aceita troca:</span>
                    <span className={`font-semibold ${item.acceptsTrade ? 'text-green-600' : 'text-red-600'}`}>
                      {item.acceptsTrade ? 'Sim' : 'Não'}
                    </span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Vendedor:</span> {item.seller}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => handleContact({ ...item, provider: item.seller, title: item.title })}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Conversar com Vendedor
                </Button>
              </Card>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // VIEW: PROFILE
  if (currentView === 'profile') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('app')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Dashboard
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Editar Perfil</h2>

            <div className="space-y-8">
              <div>
                <Label className="text-gray-700 font-medium mb-4 block">Foto de Perfil</Label>
                <div className="flex items-center gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {profilePhoto ? (
                      <img src={profilePhoto} alt="Profile" className="w-full h-full rounded-full object-cover" />
                    ) : (
                      profileName.split(' ').map(n => n[0]).join('').toUpperCase()
                    )}
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      <Upload className="w-4 h-4 mr-2" />
                      Carregar Foto
                    </Button>
                    <p className="text-sm text-gray-600">JPG, PNG ou GIF (máx. 5MB)</p>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium">Nome Completo</Label>
                <Input
                  id="name"
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="mt-2 border-2 border-gray-200 focus:border-green-500"
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-gray-700 font-medium">Localização</Label>
                <Input
                  id="location"
                  type="text"
                  value={profileLocation}
                  onChange={(e) => setProfileLocation(e.target.value)}
                  placeholder="Cidade, Estado"
                  className="mt-2 border-2 border-gray-200 focus:border-green-500"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-gray-700 font-medium">Descrição dos Serviços</Label>
                <Textarea
                  id="description"
                  value={profileDescription}
                  onChange={(e) => setProfileDescription(e.target.value)}
                  placeholder="Descreva os serviços que você oferece..."
                  className="mt-2 border-2 border-gray-200 focus:border-green-500 min-h-[120px]"
                />
              </div>

              <div>
                <Label className="text-gray-700 font-medium mb-4 block">Fotos dos Implementos</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-green-500 cursor-pointer transition-colors">
                      <Camera className="w-8 h-8 text-gray-400" />
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Adicionar Fotos
                </Button>
              </div>

              <div className="flex gap-4 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => setCurrentView('app')}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={() => {
                    setCurrentView('app');
                  }}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Salvar Alterações
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  // VIEW: OFFER SERVICE
  if (currentView === 'offer-service') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('app')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Dashboard
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-3xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Oferecer Serviço</h2>
            <p className="text-gray-600 mb-8">Publique um novo serviço para seus clientes</p>

            {showPublishSuccess && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-3 animate-pulse">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-green-700 font-bold">Serviço publicado com sucesso! 🎉</p>
                  <p className="text-green-600 text-sm">Redirecionando para seus serviços ativos...</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <Label htmlFor="service-name" className="text-gray-700 font-medium">Nome do Serviço</Label>
                <Input
                  id="service-name"
                  type="text"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  placeholder="Ex: Plantio de Soja"
                  className="mt-2 border-2 border-gray-200 focus:border-green-500"
                />
              </div>

              <div>
                <Label htmlFor="service-description" className="text-gray-700 font-medium">Descrição</Label>
                <Textarea
                  id="service-description"
                  value={serviceDescription}
                  onChange={(e) => setServiceDescription(e.target.value)}
                  placeholder="Descreva detalhadamente o serviço oferecido..."
                  className="mt-2 border-2 border-gray-200 focus:border-green-500 min-h-[120px]"
                />
              </div>

              <div>
                <Label className="text-gray-700 font-medium mb-3 block">Tipo de Cobrança</Label>
                <RadioGroup value={servicePriceType} onValueChange={setServicePriceType}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: 'por_dia', label: 'Por Dia' },
                      { value: 'por_hora', label: 'Por Hora' },
                      { value: 'por_tarefa', label: 'Por Tarefa' }
                    ].map((option) => (
                      <Card
                        key={option.value}
                        className={`p-4 cursor-pointer transition-all duration-200 ${
                          servicePriceType === option.value
                            ? 'border-2 border-green-500 bg-green-50'
                            : 'border-2 border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => setServicePriceType(option.value)}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={option.value} />
                          <span className="font-medium text-gray-900">{option.label}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="service-price" className="text-gray-700 font-medium">Valor (R$)</Label>
                <Input
                  id="service-price"
                  type="number"
                  value={servicePrice}
                  onChange={(e) => setServicePrice(e.target.value)}
                  placeholder="Ex: 500"
                  className="mt-2 border-2 border-gray-200 focus:border-green-500"
                />
              </div>

              <div>
                <Label htmlFor="service-location" className="text-gray-700 font-medium">Localização</Label>
                <Input
                  id="service-location"
                  type="text"
                  value={serviceLocation}
                  onChange={(e) => setServiceLocation(e.target.value)}
                  placeholder="Cidade, Estado"
                  className="mt-2 border-2 border-gray-200 focus:border-green-500"
                />
              </div>

              <div className="flex gap-4 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => setCurrentView('app')}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handlePublishService}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  disabled={showPublishSuccess}
                >
                  {showPublishSuccess ? 'Publicando...' : 'Publicar Serviço'}
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  // VIEW: ACTIVE SERVICES
  if (currentView === 'active-services') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('app')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Dashboard
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Serviços Ativos</h2>
            <p className="text-gray-600">Gerencie seus serviços em andamento</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {publishedServices.map((service) => (
              <Card key={service.id} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.client}</p>
                    {service.description && (
                      <p className="text-sm text-gray-500 mt-2">{service.description}</p>
                    )}
                    {service.location && (
                      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {service.location}
                      </p>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.status === 'Em Andamento' ? 'bg-blue-100 text-blue-700' :
                    service.status === 'Publicado' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {service.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {service.date}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      {service.value}
                    </span>
                  </div>

                  {service.progress > 0 && (
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Progresso</span>
                        <span className="font-semibold text-green-600">{service.progress}%</span>
                      </div>
                      <Progress value={service.progress} className="h-2" />
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleViewServiceDetails(service)}
                  >
                    Ver Detalhes
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    onClick={() => handleContact(service)}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Mensagem
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // VIEW: MESSAGES
  if (currentView === 'messages') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('app')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Dashboard
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Mensagens</h2>
            <p className="text-gray-600">Suas conversas recentes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card className="p-4">
                <h3 className="font-bold text-gray-900 mb-4">Conversas</h3>
                <div className="space-y-2">
                  {conversations.map((conv) => (
                    <Card 
                      key={conv.id} 
                      className={`p-3 cursor-pointer hover:bg-green-50 transition-colors ${
                        selectedConversation === conv.id ? 'bg-green-50 border-2 border-green-500' : ''
                      }`}
                      onClick={() => {
                        setSelectedConversation(conv.id);
                        setSelectedService({ provider: conv.providerName, title: conv.serviceTitle });
                        setCurrentView('chat');
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {conv.providerName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-gray-900 text-sm truncate">{conv.providerName}</p>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteConversation(conv.id);
                              }}
                              className="h-6 w-6 p-0"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </Button>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{conv.serviceTitle}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {conv.messages[conv.messages.length - 1]?.text.substring(0, 30)}...
                          </p>
                        </div>
                        {conv.unreadCount > 0 && (
                          <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {conv.unreadCount}
                          </span>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="p-6 h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Selecione uma conversa</h3>
                  <p className="text-gray-600">Escolha uma conversa ao lado para começar a trocar mensagens</p>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // VIEW: ALL SERVICES
  if (currentView === 'all-services') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => setCurrentView('app')}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Dashboard
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Todos os Serviços</h2>
            <p className="text-gray-600">Histórico completo de serviços</p>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Plantio de Soja - 50 hectares', client: 'Fazenda Santa Maria', status: 'Em Andamento', date: '15/01/2024', value: 'R$ 2.500' },
              { title: 'Manutenção de Trator John Deere', client: 'Sítio Boa Vista', status: 'Concluído', date: '12/01/2024', value: 'R$ 800' },
              { title: 'Pulverização de Milho', client: 'Fazenda Esperança', status: 'Agendado', date: '20/01/2024', value: 'R$ 1.200' },
              { title: 'Colheita de Café', client: 'Sítio Bom Jesus', status: 'Em Andamento', date: '18/01/2024', value: 'R$ 3.500' },
              { title: 'Consultoria Agronômica', client: 'Fazenda Progresso', status: 'Concluído', date: '10/01/2024', value: 'R$ 1.500' },
              { title: 'Irrigação - Sistema Pivô', client: 'Agro Campos', status: 'Concluído', date: '08/01/2024', value: 'R$ 4.200' },
              { title: 'Transporte de Grãos', client: 'Cooperativa Regional', status: 'Concluído', date: '05/01/2024', value: 'R$ 950' },
              { title: 'Análise de Solo', client: 'Fazenda Verde', status: 'Concluído', date: '03/01/2024', value: 'R$ 600' }
            ].map((service, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.client}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.status === 'Em Andamento' ? 'bg-blue-100 text-blue-700' :
                    service.status === 'Concluído' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {service.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {service.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {service.value}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // VIEW: LOGIN
  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 shadow-2xl border-2 border-green-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-3 rounded-xl">
                <Tractor className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-green-600">Agro</span>
              <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-gray-600">
              {isSignUp ? 'Crie sua conta para continuar' : 'Entre para acessar sua conta'}
            </p>
          </div>

          <div className="space-y-4">
            {isSignUp && (
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium">Nome Completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="mt-2 border-2 border-gray-200 focus:border-green-500"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                />
              </div>
            )}

            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="mt-2 border-2 border-gray-200 focus:border-green-500"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-2 border-2 border-gray-200 focus:border-green-500"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox />
                  <span className="text-gray-600">Lembrar de mim</span>
                </label>
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Esqueceu a senha?
                </button>
              </div>
            )}

            <Button
              onClick={isSignUp ? handleSignUp : handleLogin}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg"
            >
              {isSignUp ? 'Criar Conta' : 'Entrar'}
            </Button>

            <div className="text-center pt-4 border-t">
              <p className="text-gray-600">
                {isSignUp ? 'Já tem uma conta?' : 'Não tem uma conta?'}
                {' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  {isSignUp ? 'Entrar' : 'Criar conta'}
                </button>
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // VIEW: APP (Dashboard)
  if (currentView === 'app') {
    const unreadApplications = applications.filter(app => app.status === 'pending').length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-2 rounded-lg">
                  <Tractor className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold">
                  <span className="text-green-600">Agro</span>
                  <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Connect</span>
                </h1>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                <button 
                  onClick={() => setCurrentView('search')}
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Search className="w-5 h-5" />
                  <span className="font-medium">Buscar</span>
                </button>
                <button 
                  onClick={() => setCurrentView('messages')}
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-medium">Mensagens</span>
                </button>
                <button 
                  onClick={() => setCurrentView('notifications')}
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="font-medium">Notificações</span>
                  {(notifications.filter(n => !n.read).length + unreadApplications) > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications.filter(n => !n.read).length + unreadApplications}
                    </span>
                  )}
                </button>
                <button 
                  onClick={() => setCurrentView('settings')}
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Settings className="w-5 h-5" />
                </button>
                <Button 
                  onClick={() => setCurrentView('offer-service')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Oferecer Serviço
                </Button>
              </nav>

              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {showMobileMenu && (
              <nav className="md:hidden mt-4 pt-4 border-t space-y-2">
                <button 
                  onClick={() => {
                    setCurrentView('search');
                    setShowMobileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <Search className="w-5 h-5" />
                  <span className="font-medium">Buscar</span>
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('messages');
                    setShowMobileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-medium">Mensagens</span>
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('notifications');
                    setShowMobileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  <span className="font-medium">Notificações</span>
                  {(notifications.filter(n => !n.read).length + unreadApplications) > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {notifications.filter(n => !n.read).length + unreadApplications}
                    </span>
                  )}
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('settings');
                    setShowMobileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Configurações</span>
                </button>
                <Button 
                  onClick={() => {
                    setCurrentView('offer-service');
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Oferecer Serviço
                </Button>
              </nav>
            )}
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Bem-vindo de volta! 👋
            </h2>
            <p className="text-gray-600">
              Aqui está um resumo das suas atividades recentes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card 
              onClick={() => setCurrentView('active-services')}
              className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <p className="text-white/80 text-sm mb-1">Serviços Ativos</p>
              <p className="text-3xl font-bold">{publishedServices.length}</p>
            </Card>

            <Card 
              onClick={() => setCurrentView('messages')}
              className="p-6 bg-gradient-to-br from-blue-500 to-cyan-600 text-white cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <p className="text-white/80 text-sm mb-1">Mensagens Novas</p>
              <p className="text-3xl font-bold">{conversations.reduce((acc, conv) => acc + conv.unreadCount, 0)}</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6" />
                </div>
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <p className="text-white/80 text-sm mb-1">Receita Mensal</p>
              <p className="text-3xl font-bold">R$ 8.5k</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Star className="w-6 h-6" />
                </div>
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <p className="text-white/80 text-sm mb-1">Avaliação Média</p>
              <p className="text-3xl font-bold">4.8</p>
            </Card>

            <Card 
              onClick={() => setCurrentView('marketplace')}
              className="p-6 bg-gradient-to-br from-teal-500 to-green-600 text-white cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <p className="text-white/80 text-sm mb-1">Marketplace</p>
              <p className="text-3xl font-bold">24</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Serviços Recentes</h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentView('all-services')}
                  >
                    Ver Todos
                  </Button>
                </div>

                <div className="space-y-4">
                  {publishedServices.slice(0, 3).map((service) => (
                    <Card key={service.id} className="p-4 hover:shadow-lg transition-shadow border-2 border-gray-100">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                          <p className="text-sm text-gray-600">{service.client}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          service.status === 'Em Andamento' ? 'bg-blue-100 text-blue-700' :
                          service.status === 'Publicado' ? 'bg-green-100 text-green-700' :
                          service.status === 'Concluído' ? 'bg-green-100 text-green-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {service.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {service.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {service.value}
                          </span>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-green-600 hover:text-green-700"
                          onClick={() => handleViewServiceDetails(service)}
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Oportunidades Próximas</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Colheita de Café', location: 'Campinas, SP', distance: '15 km', budget: 'R$ 3.000 - R$ 4.500' },
                    { title: 'Consultoria Agronômica', location: 'São Paulo, SP', distance: '45 km', budget: 'R$ 1.500 - R$ 2.000' }
                  ].map((opp, idx) => (
                    <Card key={idx} className="p-4 border-2 border-green-100 hover:border-green-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{opp.title}</h4>
                        <Package className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {opp.location} • {opp.distance}
                        </p>
                        <p className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          {opp.budget}
                        </p>
                      </div>
                      <Button 
                        className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                        onClick={() => handleApplyForOpportunity(opp)}
                      >
                        Candidatar-se
                      </Button>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Seu Perfil</h3>
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    JD
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{profileName}</h4>
                  <p className="text-gray-600 text-sm">Prestador de Serviços</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">(4.8)</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-600">Serviços Concluídos</span>
                    <span className="font-semibold text-gray-900">47</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-600">Taxa de Sucesso</span>
                    <span className="font-semibold text-green-600">98%</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-600">Membro desde</span>
                    <span className="font-semibold text-gray-900">Jan 2023</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-6"
                  onClick={() => setCurrentView('profile')}
                >
                  Editar Perfil
                </Button>
              </Card>

              {unreadApplications > 0 && (
                <Card 
                  className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setCurrentView('applications')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <UserCheck className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Candidaturas Pendentes</h3>
                      <p className="text-sm text-gray-600">Você tem {unreadApplications} nova(s) candidatura(s)</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Ver Candidaturas
                  </Button>
                </Card>
              )}

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Atividade Recente</h3>
                <div className="space-y-4">
                  {[
                    { action: 'Nova avaliação recebida', time: '2h atrás', icon: Star },
                    { action: 'Mensagem de cliente', time: '5h atrás', icon: MessageSquare },
                    { action: 'Serviço concluído', time: '1d atrás', icon: CheckCircle2 },
                    { action: 'Novo serviço agendado', time: '2d atrás', icon: Calendar }
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <activity.icon className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Button
                variant="outline"
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={() => setCurrentView('landing')}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // VIEW: QUIZ
  if (currentView === 'quiz') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Button
                variant="ghost"
                onClick={() => setCurrentView('landing')}
                className="absolute left-4 top-8"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-2 rounded-xl">
                <Tractor className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold">
                <span className="text-green-600">Agro</span>
                <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Connect</span>
              </h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Vamos conhecer você melhor
            </h2>
            <p className="text-gray-600">
              Responda algumas perguntas para personalizar sua experiência
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Passo {currentStep} de {TOTAL_STEPS}</span>
              <span className="text-sm font-medium text-green-600">{Math.round((currentStep / TOTAL_STEPS) * 100)}%</span>
            </div>
            <Progress value={(currentStep / TOTAL_STEPS) * 100} className="h-2" />
          </div>

          <Card className="p-8 shadow-2xl border-2 border-green-100">
            {/* STEP 1: Roles */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Como você pretende usar o AgroConnect?
                  </h3>
                  <p className="text-gray-600">Selecione todas as opções que se aplicam</p>
                </div>

                <div className="space-y-3">
                  {[
                    { value: 'prestador' as UserRole, label: 'Prestador de Serviços', description: 'Ofereço serviços agropecuários' },
                    { value: 'tomador' as UserRole, label: 'Tomador de Serviços', description: 'Contrato serviços para minha propriedade' },
                    { value: 'ambos' as UserRole, label: 'Ambos', description: 'Ofereço e contrato serviços' }
                  ].map((role) => (
                    <Card
                      key={role.value}
                      className={`p-4 cursor-pointer transition-all duration-200 ${
                        answers.roles?.includes(role.value)
                          ? 'border-2 border-green-500 bg-green-50'
                          : 'border-2 border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => toggleRole(role.value)}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={answers.roles?.includes(role.value)}
                          onCheckedChange={() => toggleRole(role.value)}
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{role.label}</h4>
                          <p className="text-sm text-gray-600">{role.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Experience */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Qual é o seu nível de experiência?
                  </h3>
                  <p className="text-gray-600">Isso nos ajuda a personalizar sua experiência</p>
                </div>

                <div>
                  <Label className="text-gray-700 font-medium mb-3 block">Nível de Experiência</Label>
                  <RadioGroup
                    value={answers.experienceLevel}
                    onValueChange={(value) => setAnswers({ ...answers, experienceLevel: value as ExperienceLevel })}
                  >
                    <div className="space-y-3">
                      {[
                        { value: 'iniciante' as ExperienceLevel, label: 'Iniciante', description: 'Menos de 1 ano' },
                        { value: 'intermediario' as ExperienceLevel, label: 'Intermediário', description: '1-5 anos' },
                        { value: 'avancado' as ExperienceLevel, label: 'Avançado', description: '5-10 anos' },
                        { value: 'especialista' as ExperienceLevel, label: 'Especialista', description: 'Mais de 10 anos' }
                      ].map((level) => (
                        <Card
                          key={level.value}
                          className={`p-4 cursor-pointer transition-all duration-200 ${
                            answers.experienceLevel === level.value
                              ? 'border-2 border-green-500 bg-green-50'
                              : 'border-2 border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => setAnswers({ ...answers, experienceLevel: level.value })}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={level.value} />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{level.label}</h4>
                              <p className="text-sm text-gray-600">{level.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="years" className="text-gray-700 font-medium">Anos de Experiência</Label>
                  <Input
                    id="years"
                    type="number"
                    min="0"
                    value={answers.yearsExperience || ''}
                    onChange={(e) => setAnswers({ ...answers, yearsExperience: parseInt(e.target.value) || 0 })}
                    placeholder="Ex: 5"
                    className="mt-2 border-2 border-gray-200 focus:border-green-500"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: Services */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Quais serviços você oferece ou precisa?
                  </h3>
                  <p className="text-gray-600">Selecione todas as categorias relevantes</p>
                </div>

                {answers.roles?.includes('prestador' as UserRole) && (
                  <div>
                    <Label className="text-gray-700 font-medium mb-3 block">Serviços que Ofereço</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceCategories.map((service) => (
                        <Card
                          key={service.value}
                          className={`p-3 cursor-pointer transition-all duration-200 ${
                            answers.servicesOffered?.includes(service.value)
                              ? 'border-2 border-green-500 bg-green-50'
                              : 'border-2 border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => toggleService(service.value, 'offered')}
                        >
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={answers.servicesOffered?.includes(service.value)}
                              onCheckedChange={() => toggleService(service.value, 'offered')}
                            />
                            <span className="text-sm font-medium text-gray-900">{service.label}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {answers.roles?.includes('tomador' as UserRole) && (
                  <div>
                    <Label className="text-gray-700 font-medium mb-3 block">Serviços que Preciso</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceCategories.map((service) => (
                        <Card
                          key={service.value}
                          className={`p-3 cursor-pointer transition-all duration-200 ${
                            answers.servicesNeeded?.includes(service.value)
                              ? 'border-2 border-green-500 bg-green-50'
                              : 'border-2 border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => toggleService(service.value, 'needed')}
                        >
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={answers.servicesNeeded?.includes(service.value)}
                              onCheckedChange={() => toggleService(service.value, 'needed')}
                            />
                            <span className="text-sm font-medium text-gray-900">{service.label}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: Cultures */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Com quais culturas você trabalha?
                  </h3>
                  <p className="text-gray-600">Selecione todas que se aplicam</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cultures.map((culture) => (
                    <Card
                      key={culture.value}
                      className={`p-4 cursor-pointer transition-all duration-200 ${
                        answers.cultures?.includes(culture.value)
                          ? 'border-2 border-green-500 bg-green-50'
                          : 'border-2 border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => toggleCulture(culture.value)}
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={answers.cultures?.includes(culture.value)}
                          onCheckedChange={() => toggleCulture(culture.value)}
                        />
                        <span className="font-medium text-gray-900">{culture.label}</span>
                      </div>
                    </Card>
                  ))}
                </div>

                {answers.cultures?.includes('outras') && (
                  <div>
                    <Label htmlFor="other-cultures" className="text-gray-700 font-medium">Especifique outras culturas</Label>
                    <Textarea
                      id="other-cultures"
                      value={answers.otherCulturesDescription || ''}
                      onChange={(e) => setAnswers({ ...answers, otherCulturesDescription: e.target.value })}
                      placeholder="Ex: Algodão, Cana-de-açúcar..."
                      className="mt-2 border-2 border-gray-200 focus:border-green-500"
                    />
                  </div>
                )}
              </div>
            )}

            {/* STEP 5: Location */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Onde você está localizado?
                  </h3>
                  <p className="text-gray-600">Use o mapa para selecionar sua localização e raio de atuação</p>
                </div>

                <LocationMapPicker
                  onLocationSelect={handleLocationSelect}
                  initialRadius={answers.workRadius || 50}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state" className="text-gray-700 font-medium">Estado</Label>
                    <Input
                      id="state"
                      type="text"
                      value={answers.state || ''}
                      onChange={(e) => setAnswers({ ...answers, state: e.target.value })}
                      placeholder="Ex: SP"
                      className="mt-2 border-2 border-gray-200 focus:border-green-500"
                      readOnly
                    />
                  </div>

                  <div>
                    <Label htmlFor="city" className="text-gray-700 font-medium">Cidade</Label>
                    <Input
                      id="city"
                      type="text"
                      value={answers.city || ''}
                      onChange={(e) => setAnswers({ ...answers, city: e.target.value })}
                      placeholder="Ex: Campinas"
                      className="mt-2 border-2 border-gray-200 focus:border-green-500"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 6: Payment & Availability */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Preferências de Trabalho
                  </h3>
                  <p className="text-gray-600">Como você prefere trabalhar?</p>
                </div>

                <div>
                  <Label className="text-gray-700 font-medium mb-3 block">Forma de Pagamento Preferida</Label>
                  <RadioGroup
                    value={answers.preferredPayment}
                    onValueChange={(value) => setAnswers({ ...answers, preferredPayment: value })}
                  >
                    <div className="space-y-3">
                      {[
                        { value: 'dinheiro', label: 'Dinheiro' },
                        { value: 'pix', label: 'PIX' },
                        { value: 'transferencia', label: 'Transferência Bancária' },
                        { value: 'cartao', label: 'Cartão de Crédito/Débito' }
                      ].map((payment) => (
                        <Card
                          key={payment.value}
                          className={`p-4 cursor-pointer transition-all duration-200 ${
                            answers.preferredPayment === payment.value
                              ? 'border-2 border-green-500 bg-green-50'
                              : 'border-2 border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => setAnswers({ ...answers, preferredPayment: payment.value })}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={payment.value} />
                            <span className="font-medium text-gray-900">{payment.label}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-gray-700 font-medium mb-3 block">Disponibilidade</Label>
                  <RadioGroup
                    value={answers.availability}
                    onValueChange={(value) => setAnswers({ ...answers, availability: value })}
                  >
                    <div className="space-y-3">
                      {[
                        { value: 'integral', label: 'Tempo Integral', description: 'Disponível todos os dias' },
                        { value: 'parcial', label: 'Tempo Parcial', description: 'Alguns dias da semana' },
                        { value: 'eventual', label: 'Eventual', description: 'Sob demanda' }
                      ].map((avail) => (
                        <Card
                          key={avail.value}
                          className={`p-4 cursor-pointer transition-all duration-200 ${
                            answers.availability === avail.value
                              ? 'border-2 border-green-500 bg-green-50'
                              : 'border-2 border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => setAnswers({ ...answers, availability: avail.value })}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={avail.value} />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{avail.label}</h4>
                              <p className="text-sm text-gray-600">{avail.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* STEP 7: Usage Frequency */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Com que frequência você pretende usar a plataforma?
                  </h3>
                  <p className="text-gray-600">Isso nos ajuda a personalizar suas notificações</p>
                </div>

                <RadioGroup
                  value={answers.usageFrequency}
                  onValueChange={(value) => setAnswers({ ...answers, usageFrequency: value })}
                >
                  <div className="space-y-3">
                    {[
                      { value: 'diaria', label: 'Diariamente', description: 'Vou usar todos os dias' },
                      { value: 'semanal', label: 'Semanalmente', description: 'Algumas vezes por semana' },
                      { value: 'mensal', label: 'Mensalmente', description: 'Algumas vezes por mês' },
                      { value: 'eventual', label: 'Eventualmente', description: 'Quando precisar' }
                    ].map((freq) => (
                      <Card
                        key={freq.value}
                        className={`p-4 cursor-pointer transition-all duration-200 ${
                          answers.usageFrequency === freq.value
                            ? 'border-2 border-green-500 bg-green-50'
                            : 'border-2 border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => setAnswers({ ...answers, usageFrequency: freq.value })}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={freq.value} />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{freq.label}</h4>
                            <p className="text-sm text-gray-600">{freq.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* STEP 8: Goals */}
            {currentStep === 8 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Quais são seus objetivos?
                  </h3>
                  <p className="text-gray-600">Selecione todos que se aplicam</p>
                </div>

                <div className="space-y-3">
                  {goals.map((goal) => (
                    <Card
                      key={goal}
                      className={`p-4 cursor-pointer transition-all duration-200 ${
                        answers.goals?.includes(goal)
                          ? 'border-2 border-green-500 bg-green-50'
                          : 'border-2 border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => toggleGoal(goal)}
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={answers.goals?.includes(goal)}
                          onCheckedChange={() => toggleGoal(goal)}
                        />
                        <span className="text-gray-900">{goal}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-gray-100">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="border-2 border-gray-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>

              {currentStep < TOTAL_STEPS ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  Próximo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleFinishQuiz}
                  disabled={!canProceed()}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  Finalizar
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // VIEW: LANDING PAGE (default)
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tractor className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              AgroConnect
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => setCurrentView('login')}
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50"
            >
              Login
            </Button>
            <Button 
              onClick={() => setCurrentView('quiz')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              Começar Cadastro
            </Button>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Conecte-se com{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Serviços Agropecuários
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Encontre prestadores de serviços agropecuários, contrate profissionais qualificados e expanda sua rede de contatos no agronegócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              onClick={() => setCurrentView('quiz')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-xl transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <MapPin className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Localização Inteligente</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Encontre serviços e profissionais dentro do seu raio de atuação de até 2.000 km.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <Users className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Rede de Profissionais</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Conecte-se com prestadores e tomadores de serviços agropecuários.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <Briefcase className="h-12 w-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Marketplace Completo</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Contrate e ofereça serviços agropecuários de forma segura e prática.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <Shield className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Seguro e Confiável</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sistema de avaliações e verificação para garantir qualidade dos serviços.
            </p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <Star className="h-16 w-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-xl mb-8 opacity-90">
            Complete seu cadastro rápido e descubra como você pode expandir seus negócios no agronegócio.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => setCurrentView('quiz')}
            className="text-lg px-8"
          >
            Fazer Cadastro Agora
          </Button>
        </Card>
      </section>

      <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Tractor className="h-6 w-6 text-green-600" />
              <span className="font-semibold">AgroConnect</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 AgroConnect. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
