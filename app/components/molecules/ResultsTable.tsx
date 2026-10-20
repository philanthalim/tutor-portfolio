export type AssessmentResult = {
  level: string;
  levelLabel: string;
  exam: string;
  marks: string;
  year: number;
  school: string;
};

type ResultsTableProps = {
  results: AssessmentResult[];
};

export default function ResultsTable({ results }: ResultsTableProps) {
  return (
    <div className="table-wrap">
      <table>
        <caption className="visually-hidden">
          Anonymous Mathematics assessment results, sorted by assessment type
          with newest results first
        </caption>
        <thead>
          <tr>
            <th scope="col">Level</th>
            <th scope="col">Exam</th>
            <th scope="col">Marks</th>
            <th scope="col">Year</th>
            <th scope="col">School</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr
              data-level={result.level}
              data-year={result.year}
              key={`${result.year}-${result.exam}-${result.school}-${index}`}
            >
              <td data-label="Level">{result.levelLabel}</td>
              <td data-label="Exam">{result.exam}</td>
              <td className="mark" data-label="Marks">
                {result.marks}
              </td>
              <td data-label="Year">{result.year}</td>
              <td data-label="School">{result.school}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
