import { Suspense } from "react";
import ProductsClient from "./products-client";
import ProductCardSkeleton from "@/components/product-card-skeleton";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F7F4F1] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-semibold text-[#2B2B2B] mb-4">
                All Products
              </h1>
              <p className="text-lg text-[#6B6B6B]">
                Browse our complete collection of quality products
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
