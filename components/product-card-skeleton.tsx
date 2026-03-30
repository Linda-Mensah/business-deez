"use client";

import { Card, CardContent } from "./ui/card";

const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden h-full rounded-2xl shadow-sm animate-pulse">
      <div className="relative h-64 bg-neutral-200" />
      <CardContent className="p-5">
        <div className="h-6 bg-neutral-200 rounded-lg mb-2 w-3/4" />
        <div className="h-4 bg-neutral-200 rounded mb-2 w-full" />
        <div className="h-4 bg-neutral-200 rounded mb-4 w-2/3" />
        <div className="h-6 bg-neutral-200 rounded-lg mb-4 w-1/3" />
        <div className="flex gap-2">
          <div className="flex-1 h-10 bg-neutral-200 rounded-xl" />
          <div className="flex-1 h-10 bg-neutral-200 rounded-xl" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;
