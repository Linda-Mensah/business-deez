import { groq } from "next-sanity";

export const ALL_PRODUCTS_QUERY = groq`
  *[_type == "product"] {
    _id,
    name,
    slug,
    description,
    price,
    images[]{
      asset->,
      alt
    },
    category->{
      _id,
      name,
      slug
    },
    inStock,
    variantType,
    featured
  }
`;

export const FEATURED_PRODUCTS_QUERY = groq`
  *[_type == "product" && featured == true] {
    _id,
    name,
    slug,
    description,
    price,
    images[]{
      asset->,
      alt
    },
    category->{
      _id,
      name,
      slug
    },
    inStock,
    variantType,
    featured
  }
`;

export const PRODUCTS_BY_CATEGORY_QUERY = groq`
  *[_type == "product" && category->slug.current == $categorySlug] {
    _id,
    name,
    slug,
    description,
    price,
    images[]{
      asset->,
      alt
    },
    category->{
      _id,
      name,
      slug
    },
    inStock,
    variantType,
    featured
  }
`;

export const ALL_CATEGORIES_QUERY = groq`
  *[_type == "category"] {
    _id,
    name,
    slug
  }
`;
