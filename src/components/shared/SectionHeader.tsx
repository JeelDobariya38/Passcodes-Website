import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
  as?: 'h1' | 'h2';
  float?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  id,
  as = 'h2',
  float = false,
}: SectionHeaderProps) {
  const Tag = as;
  return (
    <div id={id} className={cn('mb-8 text-center', className)}>
      <Tag
        className={cn(
          as === 'h1' ? 'page-title' : 'section-title',
          float && 'floating-animation'
        )}
      >
        {title}
      </Tag>
      {subtitle && <p className="page-subtitle !mt-2">{subtitle}</p>}
    </div>
  );
}
