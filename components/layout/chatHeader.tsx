import Logo from "@/components/layout/logo";

export default function ChatHeader() {
  return (
    <div className="relative flex items-center justify-between w-full pt-5 mx-auto bg-transparent md:w-11/12">
      <Logo />
      <p className="font-ibm-plex-mono text-[#808080] text-[8px] md:text-[12px] font-medium text-right">
        Diffusion Transformer Model
        <br />
        USPTO-50k ·<span className="text-[#19FB9B]">56.7%</span> Top-1 Accuracy
      </p>
    </div>
  );
}
