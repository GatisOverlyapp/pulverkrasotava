interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextBlock({ children, className = '' }: TextBlockProps) {
  return (
    <div
      id="content"
      className={`bg-pulver-dark section-padding ${className}`}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:text-pulver-light prose-headings:font-bold prose-p:text-pulver-white prose-a:text-pulver-gold hover:prose-a:text-pulver-light prose-strong:text-pulver-light prose-li:text-pulver-white">
          {children}
        </div>
      </div>
    </div>
  );
}
