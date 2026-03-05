"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import ChatHeader from "@/components/layout/chatHeader";

export default function ChatPage() {
  const [smilesInput, setSmilesInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const examples = [
    { name: "Aspirin", smiles: "CC(=O)Oc1ccccc1C(=O)O" },
    { name: "Caffeine", smiles: "CN1C=NC2=C1C(=O)N(C(=O)N2C)C" },
    { name: "Testosterone", smiles: "CC12CCC3C(C1CCC2O)CCC4=CC(=O)CCC34C" },
    { name: "Coumarin", smiles: "c1ccc2c(c1)ccc(=O)o2" },
    { name: "Salicylic acid", smiles: "O=C(O)c1ccccc1O" },
  ];

  const mockResults = [
    {
      rank: 1,
      smiles: "CC(=O)Cl.OC(=O)c1ccccc1O",
      reactants: ["CC(=O)Cl", "OC(=O)c1ccccc1O"],
      confidence: 82,
      template: "[OH:1][c:2]>>[Cl][C:3](=O)C.[OH:1][c:2]",
    },
    {
      rank: 2,
      smiles: "CC(=O)OC(=O)C.OC(=O)c1ccccc1O",
      reactants: ["CC(=O)OC(=O)C", "OC(=O)c1ccccc1O"],
      confidence: 67,
      template: "[OH:1]>>[OH:1].[C:2](=O)OC(=O)C",
    },
    {
      rank: 3,
      smiles: "CC(=O)O.ClC(=O)c1ccccc1O",
      reactants: ["CC(=O)O", "ClC(=O)c1ccccc1O"],
      confidence: 51,
      template: "[C:1](=O)[O:2]>>[C:1](=O)Cl.[OH:2]",
    },
  ];

  const loadExample = (smiles: string, name: string) => {
    setSmilesInput(smiles);
    setShowResults(false);
  };

  const runAnalysis = () => {
    if (!smilesInput.trim()) return;

    setIsAnalyzing(true);
    setShowResults(false);

    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      setExpandedCard(0); // Expand first result
    }, 2000);
  };

  const clearAll = () => {
    setSmilesInput("");
    setShowResults(false);
    setIsAnalyzing(false);
    setExpandedCard(null);
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--retro-bg)", color: "var(--retro-text)" }}
    >
      {/* Grid background */}
      <div className="retro-grid" />

      {/* Glow orb */}
      <div className="retro-orb" />

      {/* Main content */}
      <div className="relative z-10 px-6 pb-20">
        {/* Header */}
        <ChatHeader />

        <div className="max-w-5xl mx-auto">
          {/* Input Section */}
          <div className="mt-10 mb-4">
            <div
              className="text-[10px] tracking-[3px] uppercase mb-2.5 font-ibm-plex-mono"
              style={{ color: "var(--retro-muted)" }}
            >
              Product SMILES
            </div>

            <Card
              className="relative p-6 overflow-hidden border rounded-xl"
              style={{
                background: "var(--retro-surface)",
                borderColor: "var(--retro-border)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--retro-acid) to-transparent opacity-40" />

              <div className="grid md:flex gap-2.5 items-stretch mb-3.5">
                <textarea
                  value={smilesInput}
                  onChange={(e) => setSmilesInput(e.target.value)}
                  placeholder="Enter SMILES string... e.g. CC(=O)Oc1ccccc1C(=O)O"
                  className="flex-1 border rounded-lg px-4 pt-3 font-ibm-plex-mono text-sm resize-none min-h-[54px] outline-none transition-colors"
                  style={{
                    background: "var(--retro-bg)",
                    borderColor: "var(--retro-border2)",
                    color: "var(--retro-text)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--retro-acid)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--retro-border2)")
                  }
                />
                <Button
                  onClick={runAnalysis}
                  disabled={isAnalyzing}
                  className="px-6 py-3.5 rounded-lg font-ibm-plex-mono text-xs font-medium tracking-wide h-[54px] uppercase transition-all hover:-translate-y-1px active:translate-y-0 relative z-100"
                  style={{
                    background: "var(--retro-acid)",
                    color: "#ffffff",
                  }}
                >
                  {isAnalyzing ? "Analyze..." : "Analyse →"}
                </Button>
                <Button
                  onClick={clearAll}
                  variant="outline"
                  className="px-6 py-3.5 rounded-lg font-ibm-plex-mono text-xs font-medium tracking-wide uppercase transition-colors h-[54px]"
                  style={{
                    borderColor: "var(--retro-border2)",
                    color: "var(--retro-text-dim)",
                  }}
                >
                  Clear
                </Button>
              </div>

              {/* Examples */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="text-[10px] font-ibm-plex-mono mr-1"
                  style={{ color: "var(--retro-muted)" }}
                >
                  Try:
                </span>
                {examples.map((example, i) => (
                  <button
                    key={i}
                    onClick={() => loadExample(example.smiles, example.name)}
                    className="text-[10px] md:text-[11px] px-3 py-1.5 rounded-full border transition-all font-ibm-plex-mono font-semibold hover:bg-[rgba(184,255,79,0.05)]"
                    style={{
                      borderColor: "var(--retro-border2)",
                      color: "var(--retro-text-dim)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--retro-acid)";
                      e.currentTarget.style.color = "var(--retro-acid)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--retro-border2)";
                      e.currentTarget.style.color = "var(--retro-text-dim)";
                    }}
                  >
                    <span style={{ color: "var(--retro-text)" }}>
                      {example.name}
                    </span>{" "}
                    {example.smiles.substring(0, 8)}…
                  </button>
                ))}
              </div>

              {/* Settings */}
              <div className="flex flex-wrap gap-6 mt-4">
                <div
                  className="flex items-center gap-2.5 text-[11px] font-ibm-plex-mono"
                  style={{ color: "var(--retro-text-dim)" }}
                >
                  <label className="cursor-pointer">Top-K results</label>
                  <Select defaultValue="10">
                    <SelectTrigger
                      className="h-7 px-2 text-[11px] font-ibm-plex-mono border rounded"
                      style={{
                        background: "var(--retro-bg)",
                        borderColor: "var(--retro-border2)",
                        color: "var(--retro-text)",
                      }}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div
                  className="flex items-center gap-2.5 text-[11px] font-ibm-plex-mono"
                  style={{ color: "var(--retro-text-dim)" }}
                >
                  <label className="cursor-pointer">Model</label>
                  <Select defaultValue="diffusion">
                    <SelectTrigger
                      className="h-7 px-2 text-[11px] font-ibm-plex-mono border rounded"
                      style={{
                        background: "var(--retro-bg)",
                        borderColor: "var(--retro-border2)",
                        color: "var(--retro-text)",
                      }}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diffusion">
                        Diffusion v2 (56.7%)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          {/* Status Bar */}
          <div
            className="flex items-center gap-2.5 px-4 py-2.5 border rounded-lg mb-6 text-[11px] font-ibm-plex-mono min-h-10"
            style={{
              background: "var(--retro-surface)",
              borderColor: "var(--retro-border)",
              color: "var(--retro-muted)",
            }}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${isAnalyzing ? "animate-pulse" : ""}`}
              style={{
                background: isAnalyzing
                  ? "var(--retro-acid)"
                  : showResults
                    ? "var(--retro-acid)"
                    : "var(--retro-muted)",
                boxShadow:
                  isAnalyzing || showResults
                    ? "0 0 8px var(--retro-acid)"
                    : "none",
              }}
            />
            <span>
              {isAnalyzing
                ? "Encoding SMILES → Running diffusion transformer → Ranking pathways…"
                : showResults
                  ? `Found ${mockResults.length} pathways in 1247ms · Top confidence: ${mockResults[0]?.confidence}% · Class: Acylation`
                  : "Ready — enter a SMILES string above to begin"}
            </span>
          </div>

          {/* Results */}
          {showResults ? (
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-2.5 mb-6">
                <Card
                  className="p-4 text-center border rounded-2xl"
                  style={{
                    background: "var(--retro-surface)",
                    borderColor: "var(--retro-border)",
                  }}
                >
                  <div
                    className="text-[32px] font-inter font-extralight leading-none mb-1"
                    style={{ color: "var(--retro-acid)" }}
                  >
                    {mockResults.length}
                  </div>
                  <div
                    className="text-[10px] tracking-wide uppercase font-ibm-plex-mono"
                    style={{ color: "var(--retro-muted)" }}
                  >
                    Pathways Found
                  </div>
                </Card>
                <Card
                  className="p-4 text-center border rounded-2xl"
                  style={{
                    background: "var(--retro-surface)",
                    borderColor: "var(--retro-border)",
                  }}
                >
                  <div className="text-[32px] font-inter font-extralight leading-none mb-1 text-white">
                    {mockResults[0]?.confidence}%
                  </div>
                  <div
                    className="text-[10px] tracking-wide uppercase font-ibm-plex-mono"
                    style={{ color: "var(--retro-muted)" }}
                  >
                    Top Confidence
                  </div>
                </Card>
                <Card
                  className="p-4 text-center border rounded-2xl"
                  style={{
                    background: "var(--retro-surface)",
                    borderColor: "var(--retro-border)",
                  }}
                >
                  <div className="text-[32px] font-inter font-extralight leading-none mb-1 text-white">
                    Acyl
                  </div>
                  <div
                    className="text-[10px] tracking-wide uppercase font-ibm-plex-mono"
                    style={{ color: "var(--retro-muted)" }}
                  >
                    Pred. Class
                  </div>
                </Card>
                <Card
                  className="p-4 text-center border rounded-2xl"
                  style={{
                    background: "var(--retro-surface)",
                    borderColor: "var(--retro-border)",
                  }}
                >
                  <div className="text-[32px] font-inter font-extralight leading-none mb-1 text-white">
                    1247
                  </div>
                  <div
                    className="text-[10px] tracking-wide uppercase font-ibm-plex-mono"
                    style={{ color: "var(--retro-muted)" }}
                  >
                    Elapsed (ms)
                  </div>
                </Card>
              </div>

              {/* Pathway Results */}
              <div className="space-y-2.5">
                {mockResults.map((result, i) => {
                  const isExpanded = expandedCard === i;
                  const isTopResult = i === 0;
                  const rankColors = [
                    "var(--retro-acid)",
                    "var(--retro-cyan)",
                    "var(--retro-amber)",
                  ];
                  const rankBgColors = [
                    "rgba(184,255,79,0.15)",
                    "rgba(79,221,255,0.1)",
                    "rgba(255,159,79,0.1)",
                  ];

                  return (
                    <Card
                      key={i}
                      className={`border rounded-2xl overflow-hidden transition-colors animate-[slideIn_0.3s_ease_forwards] opacity-0 ${
                        isTopResult ? "border-[rgba(184,255,79,0.3)]" : ""
                      }`}
                      style={{
                        background: "var(--retro-surface)",
                        borderColor: isTopResult
                          ? "rgba(184,255,79,0.3)"
                          : "var(--retro-border)",
                        animationDelay: `${i * 0.06}s`,
                      }}
                    >
                      <div
                        className="flex items-center gap-3.5 px-4.5 py-3.5 cursor-pointer select-none"
                        onClick={() => setExpandedCard(isExpanded ? null : i)}
                      >
                        <div
                          className="flex items-center justify-center text-xs font-medium border rounded shrink-0 w-7 h-7"
                          style={{
                            background:
                              rankBgColors[i] || "rgba(255,255,255,0.04)",
                            color: rankColors[i] || "var(--retro-muted)",
                            borderColor: rankColors[i]
                              ? `${rankColors[i]}33`
                              : "var(--retro-border)",
                          }}
                        >
                          #{result.rank}
                        </div>
                        <div
                          className="flex-1 overflow-hidden text-xs font-ibm-plex-mono text-ellipsis whitespace-nowrap"
                          style={{ color: "var(--retro-text-dim)" }}
                        >
                          {result.smiles}
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <div
                            className="w-20 h-1 overflow-hidden rounded-full"
                            style={{ background: "var(--retro-border2)" }}
                          >
                            <div
                              className="h-full transition-all duration-700 rounded-full"
                              style={{
                                width: `${result.confidence}%`,
                                background:
                                  rankColors[i] || "var(--retro-acid)",
                              }}
                            />
                          </div>
                          <div
                            className="w-9 text-right text-[11px] font-ibm-plex-mono"
                            style={{ color: "var(--retro-text-dim)" }}
                          >
                            {result.confidence}%
                          </div>
                          <ChevronDown
                            className={`w-2.5 h-2.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            style={{ color: "var(--retro-muted)" }}
                          />
                        </div>
                      </div>

                      {isExpanded && (
                        <div
                          className="border-t px-4.5 py-4.5 flex gap-5 flex-wrap"
                          style={{ borderColor: "var(--retro-border)" }}
                        >
                          <div className="flex gap-2.5 flex-wrap flex-1">
                            {result.reactants.map((reactant, ri) => {
                              const colors = [
                                "--retro-acid",
                                "--retro-cyan",
                                "--retro-amber",
                                "--retro-red",
                                "--retro-text",
                              ];
                              return (
                                <div
                                  key={ri}
                                  className="border rounded-lg p-2.5 min-w-[140px] relative"
                                  style={{
                                    background: "var(--retro-bg)",
                                    borderColor: "var(--retro-border2)",
                                  }}
                                >
                                  <div
                                    className="absolute top-2 left-2.5 text-[9px] tracking-wide uppercase font-ibm-plex-mono"
                                    style={{ color: "var(--retro-muted)" }}
                                  >
                                    Reactant {ri + 1}
                                  </div>
                                  <div
                                    className="absolute top-0 left-0 w-0.5 h-full rounded-l-lg"
                                    style={{
                                      background: `var(${colors[ri % colors.length]})`,
                                    }}
                                  />
                                  <div
                                    className="text-[11px] font-ibm-plex-mono mt-4.5 break-all leading-6"
                                    style={{ color: "var(--retro-text)" }}
                                  >
                                    {reactant}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="flex flex-col items-end gap-2 shrink-0">
                            <button
                              className="text-[10px] px-3 py-1.5 rounded border font-ibm-plex-mono tracking-wide transition-all whitespace-nowrap"
                              style={{
                                borderColor: "var(--retro-border2)",
                                color: "var(--retro-text-dim)",
                              }}
                            >
                              Copy SMILES
                            </button>
                            <button
                              className="text-[10px] px-3 py-1.5 rounded border font-ibm-plex-mono tracking-wide transition-all whitespace-nowrap"
                              style={{
                                borderColor: "var(--retro-border2)",
                                color: "var(--retro-text-dim)",
                              }}
                            >
                              Analyse reactant →
                            </button>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ) : (
            !isAnalyzing && (
              <div className="text-center py-15">
                <div className="text-[40px] opacity-40 mb-4">⬡</div>
                <h3
                  className="font-lora font-light text-[22px] mb-2"
                  style={{ color: "var(--retro-text-dim)" }}
                >
                  No analysis yet
                </h3>
                <p className="text-xs" style={{ color: "var(--retro-muted)" }}>
                  Enter a product SMILES to discover retrosynthetic pathways
                </p>
              </div>
            )
          )}

          {/* Loading skeletons during analysis */}
          {isAnalyzing && (
            <div className="space-y-2.5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-20 rounded-xl animate-[shimmer_1.5s_infinite]"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--retro-border) 25%, var(--retro-border2) 50%, var(--retro-border) 75%)",
                    backgroundSize: "200% 100%",
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
