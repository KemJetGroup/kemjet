"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Thank you! Check your email for early access details.");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="">
      <motion.div
        className="md:pt-30 pt-52"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl font-semibold tracking-tighter text-center text-white md:text-6xl font-inter"
          variants={itemVariants}
        >
          Building <span className="text-[#19FB9B]">Intelligent</span> Software
          <br />
          that Redefines <span className="text-[#1FCFF1]">Molecular</span>
          <br />
          <span className="text-[#FFD512]">Design</span>
        </motion.h1>
        <motion.p
          className="text-[#DBDBDB] text-center py-4 text-sm md:text-lg font-inter"
          variants={itemVariants}
        >
          Kemjet builds A.I powering next-generation therapeutics.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="flex md:w-[28%] w-[80%] p-1 mx-auto border rounded-full border-[#7D7D7D] z-10"
          variants={itemVariants}
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-[12px] outline-none border-0 text-[#898989]"
            placeholder="Get early access to our Platform..."
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="py-1 rounded-full cursor-pointer bg-[#5C5C5C] text-[14px] font-inter disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </motion.form>
      </motion.div>
      <Image
        src="/images/hero_image.png"
        alt="Hero Image"
        width={600}
        height={600}
        quality={100}
        className="absolute z-0 h-auto -translate-x-1/2 md:w-6/12 -bottom-52 md:-bottom-100 left-1/2 grayscale"
      />
    </section>
  );
}
