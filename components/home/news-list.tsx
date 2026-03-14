import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Features() {
  return (
    <section className="w-11/12 pt-0 pb-16 mx-auto lg:pt-16 lg:w-10/12">
      <div className="grid items-center gap-10 md:grid-cols-3">
        <div>
          <div className=" bg-linear-to-r from-[#108D51]/20 to-[#171717]/20 border-2 px-2 p-1 gap-2  flex items-center w-fit mb-1 rounded-full border-[#ffffff]/6">
            <div className="bg-[#108D51] w-5 h-5 rounded-full relative">
              <Mail className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
            </div>
            <span className="uppercase text-[#CECECE] font-medium text-[14px]">
              Latest from Kemjet
            </span>
          </div>
          <p className="pb-1 lg:w-10/12 text-inter">
            From algorithms to active compounds, the science behind
            tomorrow&apos;s medicines.
          </p>
          <div className="flex items-center gap-2 pb-5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#c4c4c4]"></span>
            <span className="font-anton font-bold text-[#c4c4c4]">KEMJET</span>
          </div>
          <Card>
            <CardHeader className="flex items-center gap-3">
              <div className="bg-[#9945FF] w-1 h-10 rounded-full"></div>
              <div>
                <h1 className="text-xl font-normal">kemfuser</h1>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <span>
                  We introduce kemfuser, a diffusion unmasking pretraining
                  procedure for SMILES that yields improved molecular
                  representations for downstream property prediction.
                </span>
                <p className="flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[#1FCFF1]"></span>
                  <span className="text-[14px] font-normal">June 31, 2025</span>
                </p>

                <p className="flex items-center gap-3">
                  <span className="uppercase text-[#c4c4c4] text-[14px] underline">
                    paper
                  </span>
                  <span className="uppercase text-[#c4c4c4] text-[14px] underline">
                    github
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-8">
          <Card>
            <CardHeader className="flex items-center gap-3">
              <div className="bg-[#1FCFF1] w-1 h-10 rounded-full"></div>
              <div>
                <h1 className="text-xl font-normal">Kemsynth</h1>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <span>
                  KemSynth predicts fast, efficient synthesis routes for drug
                  molecules using AI.
                </span>
                <p className="flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[#1FCFF1]"></span>
                  <span className="text-[14px] font-normal">
                    September 30, 2025
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <span className="uppercase text-[#c4c4c4] text-[14px] underline">
                    paper
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-3">
              <div className="bg-[#4B45FF] w-1 h-10 rounded-full"></div>
              <div>
                <h1 className="text-xl font-normal">KemGen</h1>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <span>
                  KemGen is a generative AI model that creates novel drug
                  molecules with desired properties, accelerating discovery and
                  innovation in chemistry.
                </span>
                <p className="flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[#1FCFF1]"></span>
                  <span className="text-[14px] font-normal">Coming Soon</span>
                </p>

                <p className="flex items-center gap-3">
                  <span className="uppercase text-[#c4c4c4] text-[14px] underline">
                    paper
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="relative grid gap-8 ">
          <div className="absolute w-full h-full backdrop-blur-md rounded-xl"></div>
          <Card>
            <CardHeader className="flex items-center gap-3">
              <div className="bg-[#19FB9B] w-1 h-10 rounded-full"></div>
              <div>
                <h1 className="text-xl font-normal">ELiZA OS</h1>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <span>
                  ELiZA OS provides a decentralized, tamper-proof environment
                  where autonomous AI agents operate under cryptographic
                  guarantees
                </span>
                <p className="flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[#1FCFF1]"></span>
                  <span className="text-[14px] font-normal">June 31, 2025</span>
                </p>

                <p className="flex items-center gap-3">
                  <span className="uppercase text-[#c4c4c4] text-[14px] underline">
                    paper
                  </span>
                  <span className="uppercase text-[#c4c4c4] text-[14px] underline">
                    github
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-3">
              <div className="bg-[#FFD512] w-1 h-10 rounded-full"></div>
              <div>
                <h1 className="text-xl font-normal">AWS</h1>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <span>
                  AWS S3 for scalable storage of molecular data and NFT
                  metadata, ensuring secure and reliable access across the
                  platform.
                </span>
                <p className="flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[#1FCFF1]"></span>
                  <span className="text-[14px] font-normal">June 31, 2025</span>
                </p>

                <p className="flex items-center gap-3">
                  <span className="uppercase text-[#c4c4c4] text-[14px] underline">
                    paper
                  </span>
                  <span className="uppercase text-[#c4c4c4] text-[14px] underline">
                    github
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
