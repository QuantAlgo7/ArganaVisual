interface TooltipProps {
  content: string;
}

export const Tooltip = ({ content }: TooltipProps) => (
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-dark-card rounded-lg border border-dark-lighter text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10">
    {content}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-dark-card border-b border-r border-dark-lighter rotate-45"></div>
  </div>
);