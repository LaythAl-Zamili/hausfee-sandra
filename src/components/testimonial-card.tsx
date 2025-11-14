export default function TestimonialCard({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="card p-6">
      <p className="italic">“{quote}”</p>
      <p className="mt-3 text-sm font-medium text-neutral-600">— {author}</p>
    </div>
  );
}
