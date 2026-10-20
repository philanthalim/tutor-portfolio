type StatCardProps = {
  value: string;
  description: string;
};

export default function StatCard({ value, description }: StatCardProps) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{description}</span>
    </div>
  );
}
