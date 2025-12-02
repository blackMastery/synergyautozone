export interface Vehicle {
  id: string;
  slug: string;
  make: string;
  model: string;
  year: number;
  price: number;
  currency?: string;
  features: string[];
  specifications: {
    engine?: string;
    transmission?: string;
    drivetrain?: string;
    fuelType?: string;
    mileage?: number;
    color?: string;
    interior?: string;
    [key: string]: string | number | undefined;
  };
  description: string;
  images: string[];
  availability: "available" | "sold" | "pending";
  financing?: {
    available: boolean;
    cashOnly?: boolean;
    bankFinancing?: boolean;
  };
  createdAt?: string;
  updatedAt?: string;
}

