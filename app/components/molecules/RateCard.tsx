type RateCardProps = {
  level: string;
  rate: string;
  children: string;
};

export default function RateCard({ level, rate, children }: RateCardProps) {
  return (
    <article className="price-card">
      <div className="level">{level}</div>
      <div className="price">
        {rate}
        <small> / hour</small>
      </div>
      <p>{children}</p>
    </article>
  );
}
