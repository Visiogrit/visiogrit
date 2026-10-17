type DemoConceptFooterProps = {
  brandName: string;
};

export function DemoConceptFooter({ brandName }: DemoConceptFooterProps) {
  return (
    <footer className="border-t border-black/10 py-8 text-center text-xs opacity-70">
      Concept demo for {brandName} · Built by Visiogrit · Stock photos (Pexels / Unsplash)
    </footer>
  );
}
