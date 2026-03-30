"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import Button from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Product } from "@/types";
import { urlFor } from "@/lib/sanity/client";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappMessage = `Hello, I want to order ${product.name}`;
  const whatsappUrl = `https://wa.me/233500175261?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:+233500175261`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full rounded-2xl shadow-fresh hover:shadow-fresh-hover transition-all duration-300 border border-[#E0F0E8]">
        <div className="relative h-64 bg-linear-to-br from-[#F8FCF8] to-[#F0F6F0]">
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
              <span className="bg-[#E6A4B4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Out of Stock
              </span>
            </div>
          )}
          {product.inStock && (
            <div className="absolute top-3 right-3">
              <span className="bg-linear-to-r from-[#9BC4B0] to-[#8BB4A0] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                In Stock
              </span>
            </div>
          )}
        </div>
        <CardContent className="p-5">
          <h3 className="text-lg font-semibold text-[#2C4A3E] mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-[#2C4A3E]/60 mb-2 line-clamp-2">
            {product.description}
          </p>
          <p className="text-xl font-bold text-[#7CB9A8] mb-4">
            GH₵ {product.price.toLocaleString()}
          </p>
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="sm"
              className="flex-1 items-center"
              onClick={() => window.open(whatsappUrl, "_blank")}
              disabled={!product.inStock}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 items-center"
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
