"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { client } from "@/lib/sanity/client";
import {
  PRODUCTS_BY_CATEGORY_QUERY,
  ALL_CATEGORIES_QUERY,
} from "@/lib/sanity/queries";
import { Product, Category } from "@/types";
import ProductCard from "./product-card";
import Button from "./ui/button";
import ProductCardSkeleton from "./product-card-skeleton";

const ProductsPreview = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<
    Record<string, Product[]>
  >({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await client.fetch(ALL_CATEGORIES_QUERY);
        setCategories(categoriesData);

        const productsMap: Record<string, Product[]> = {};
        for (const category of categoriesData) {
          const products = await client.fetch(PRODUCTS_BY_CATEGORY_QUERY, {
            categorySlug: category.slug.current,
          });
          productsMap[category._id] = products.slice(0, 6);
        }
        setProductsByCategory(productsMap);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // skeleton loader for each category
  const SkeletonCategory = () => (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <div className="h-8 bg-neutral-200 rounded-lg w-48 animate-pulse" />
        <div className="h-5 bg-neutral-200 rounded w-20 animate-pulse" />
      </div>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-80 shrink-0">
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2C4A3E]  mb-4">
            Our Products
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Explore our carefully curated collection
          </p>
        </motion.div>

        {loading ? (
          // show skeletons while loading
          <>
            <SkeletonCategory />
            <SkeletonCategory />
            <SkeletonCategory />
          </>
        ) : (
          <>
            {categories.map((category, idx) => (
              <div key={category._id} className="mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center mb-6"
                >
                  <h3 className="text-2xl font-medium text-[#2B2B2B]">
                    {category.name}
                  </h3>
                  <Link
                    href={`/products?category=${category.slug.current}`}
                    className="text-[#6B6B6B] hover:text-[#5A3E36] flex items-center gap-1 transition-colors"
                  >
                    View all <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* desktop grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productsByCategory[category._id]?.map(
                    (product, productIdx) => (
                      <motion.div
                        key={product._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: productIdx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ),
                  )}
                </div>

                {/* mobile horizontal scroll */}
                <div className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                  <div className="flex gap-4 pb-4">
                    {productsByCategory[category._id]?.map((product) => (
                      <div
                        key={product._id}
                        className="w-80 shrink-0 snap-start"
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                  {/* scroll indicator dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {productsByCategory[category._id]?.map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#D6B98C] opacity-50"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        <div className="flex items-center justify-center text-center mt-8">
          <Link href="/products">
            <Button variant="primary" size="lg">
              Explore All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
