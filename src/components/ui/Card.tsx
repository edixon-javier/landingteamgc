"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type CardProps = {
  title: string;
  description: string;
  href: string;
};

const cardHoverVariants = {
  hover: {
    y: -5,
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  }
};

export function Card({ title, description, href }: CardProps) {
  return (
    <motion.div whileHover="hover" variants={cardHoverVariants} className="h-full">
      <Link href={href} className="group p-8 bg-white rounded-lg border border-gray-200 transition-colors duration-300 h-full flex flex-col">
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-base text-gray-600 flex-grow">
          {description}
        </p>
        <div className="mt-6 font-semibold text-blue-600 flex items-center">
          <span>Descubrir solución</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
