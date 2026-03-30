export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  price: number;
  images: Array<{
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  }>;
  category: {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
  };
  inStock: boolean;
  variantType: "single" | "pack" | "box";
  featured: boolean;
}

export interface Category {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
