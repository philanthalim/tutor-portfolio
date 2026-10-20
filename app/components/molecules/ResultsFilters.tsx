type ResultsFiltersProps = {
  year: string;
  level: string;
  query: string;
  onYearChange: (year: string) => void;
  onLevelChange: (level: string) => void;
  onQueryChange: (query: string) => void;
};

export default function ResultsFilters({
  year,
  level,
  query,
  onYearChange,
  onLevelChange,
  onQueryChange,
}: ResultsFiltersProps) {
  return (
    <div className="filters">
      <select
        aria-label="Filter by year"
        onChange={(event) => onYearChange(event.target.value)}
        value={year}
      >
        <option value="">All years</option>
        {[2021, 2022, 2023, 2024, 2025, 2026].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        aria-label="Filter by level"
        onChange={(event) => onLevelChange(event.target.value)}
        value={level}
      >
        <option value="">All levels</option>
        {[
          "Secondary 1",
          "Secondary 2",
          "Secondary 3",
          "Secondary 4",
          "O-Level",
          "N-Level",
        ].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        aria-label="Search school or exam"
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search school or exam…"
        type="search"
        value={query}
      />
    </div>
  );
}
