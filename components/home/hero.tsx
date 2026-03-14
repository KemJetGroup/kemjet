"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

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
    <section className="relative lg:min-h-screen lg:pb-32 ">
      <motion.div
        className="pt-20 lg:pt-30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl font-semibold tracking-tighter text-center text-white lg:text-6xl font-inter"
          variants={itemVariants}
        >
          Building <span className="text-[#19FB9B]">Intelligent</span> Software
          <br />
          that Redefines <span className="text-[#1FCFF1]">Molecular</span>
          <br />
          <span className="text-[#FFD512]">Design</span>
        </motion.h1>
        <motion.p
          className="text-[#DBDBDB] text-center py-4 text-sm lg:text-lg font-inter"
          variants={itemVariants}
        >
          Kemjet builds A.I powering next-generation therapeutics.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="flex lg:w-[28%] w-[80%] p-1 mx-auto border rounded-full border-[#7D7D7D] z-10"
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
        className="z-0 hidden h-auto mx-auto lg:block lg:w-6/12 grayscale"
      />

      <div className="absolute inset-0 z-0 w-full min-h-full pointer-events-none">
        <SparklesCore
          className="w-full h-full"
          particleDensity={60}
          minSize={0.5}
          maxSize={1.5}
        />
      </div>

      <div className="lg:backdrop-blur-md lg:absolute lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-full lg:h-[70vh] lg:-bottom-10 lg:my-10">
        <div className=" border-t-0  border-t-[#1F1F1F] lg:border-t border-b-0 lg:border-b border-b-[#1F1F1F] w-full lg:flex">
          <div className="w-[30%] border-r border-r-[#1F1F1F] h-full hidden lg:flex">
            <div className="w-[40%] h-full grid grid-rows-3"></div>
            <div className="w-[25%] border-r border-r-[#1F1F1F] h-full grid grid-rows-3">
              <div className="border-b border-b-[#1F1F1F] w-full h-full"></div>
              <div className="border-b border-b-[#1F1F1F] w-full h-full"></div>
              <div className="w-full h-full"></div>
            </div>
            <div className="w-[35%] grid grid-rows-3  h-full">
              <div className="border-b border-b-[#1F1F1F] w-full h-full"></div>
              <div className="border-b border-b-[#1F1F1F] w-full h-full"></div>
              <div className="w-full h-full"></div>
            </div>
          </div>

          <div className="w-full py-20 space-y-8 ">
            <h1 className="w-11/12 mx-auto text-lg text-center lg:w-7/12 lg:text-2xl font-inter">
              KemJet is built by scientists, engineers, and builders who refuse
              to accept that drug discovery should take decades.
            </h1>

            <div>
              <div className="space-y-2">
                <Image
                  src="/logo/kemjet_logo.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-auto h-10 mx-auto lg:h-14"
                />
                <h1
                  className={`font-normal lg:text-xl font-inter text-center text-white`}
                >
                  kemjet
                </h1>
              </div>

              <p className="text-center text-white/50">The future of Biotech</p>
            </div>
          </div>

          <div className="w-[30%] border-l border-l-[#1F1F1F] h-full hidden lg:flex">
            <div className="w-[35%] grid grid-rows-3 border-r border-r-[#1F1F1F] h-full">
              <div className="border-b border-b-[#1F1F1F] w-full h-full"></div>
              <div className="border-b border-b-[#1F1F1F] w-full h-full"></div>
              <div className="w-full h-full"></div>
            </div>
            <div className="w-[25%]  h-full grid grid-rows-3">
              <div className="border-b border-b-[#1F1F1F] w-full h-full"></div>
              <div className="border-b border-b-[#1F1F1F] w-full h-full"></div>
              <div className="w-full h-full"></div>
            </div>
            <div className="w-[40%] h-full grid grid-rows-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
