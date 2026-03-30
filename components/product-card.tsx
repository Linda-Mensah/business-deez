"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import Button from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Product } from "@/types";
import { urlFor } from "@/lib/sanity/client";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappMessage = `Hello, I want to order ${product.name}`;
  const whatsappUrl = `https://wa.me/233443344555?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:+233443344555`;

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-full">
        <div className="relative h-64 bg-neutral-100">
          {product.images?.[0] && (
            <Image
              src={urlFor(product.images[0]).url()}
              alt={product.images[0]?.alt || product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-600 mb-2 line-clamp-2">
            {product.description}
          </p>
          <p className="text-xl font-bold text-neutral-900 mb-4">
            GH₵ {product.price.toLocaleString()}
          </p>
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => window.open(whatsappUrl, "_blank")}
              disabled={!product.inStock}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(phoneUrl, "_blank")}
              disabled={!product.inStock}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
