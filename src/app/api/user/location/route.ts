import { NextRequest, NextResponse } from 'next/server';

// Simulação de armazenamento em memória (em produção, use banco de dados)
let userLocation: {
  address: string;
  latitude: number;
  longitude: number;
  radius: number;
} | null = null;

export async function GET() {
  return NextResponse.json({
    location: userLocation
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { address, latitude, longitude, radius } = body;

    // Validar dados
    if (!address || typeof latitude !== 'number' || typeof longitude !== 'number' || typeof radius !== 'number') {
      return NextResponse.json(
        { error: 'Dados inválidos' },
        { status: 400 }
      );
    }

    // Salvar localização
    userLocation = {
      address,
      latitude,
      longitude,
      radius
    };

    console.log('✅ Localização salva com sucesso:', userLocation);

    return NextResponse.json({
      success: true,
      location: userLocation
    });
  } catch (error) {
    console.error('Erro ao salvar localização:', error);
    return NextResponse.json(
      { error: 'Erro ao processar requisição' },
      { status: 500 }
    );
  }
}
