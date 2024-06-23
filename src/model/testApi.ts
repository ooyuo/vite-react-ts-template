import axiosInstance from '@/api/axiosInstance';

export interface Cats {
  breeds: Breeds[];
  height: number;
  id: string;
  url: string;
  width: number;
}

interface Breeds {
  weight: Weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

interface Weight {
  imperial: string;
  metric: string;
}

export async function fetchTranslations(): Promise<Cats[]> {
  try {
    const response = await axiosInstance.get<Cats[]>(
      'https://api.thecatapi.com/v1/images/search?limit=10'
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch translations:', error);
    throw error;
  }
}
