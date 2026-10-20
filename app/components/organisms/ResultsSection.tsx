"use client";

import { useEffect, useMemo, useState } from "react";
import Pagination from "../molecules/Pagination";
import ResultsFilters from "../molecules/ResultsFilters";
import ResultsTable, {
  type AssessmentResult,
} from "../molecules/ResultsTable";
import SectionHeading from "../molecules/SectionHeading";

const results: AssessmentResult[] = [
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G2)",
    exam: "End-of-Year Mathematics",
    marks: "63/80 (78.8%)",
    year: 2026,
    school: "Choa Chu Kang Secondary School",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G2)",
    exam: "End-of-Year Mathematics",
    marks: "70/90 (77.8%)",
    year: 2026,
    school: "Zheng Hua Secondary School",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G3)",
    exam: "End-of-Year Mathematics",
    marks: "75/80 (93.8%)",
    year: 2026,
    school: "Fuhua Secondary School",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (IB)",
    exam: "End-of-Year Mathematics",
    marks: "89/110 (80.9%)",
    year: 2026,
    school: "School of the Arts (SOTA)",
  },
  {
    level: "Secondary 3",
    levelLabel: "Secondary 3 (G3)",
    exam: "End-of-Year Mathematics",
    marks: "78/100 (78%)",
    year: 2026,
    school: "Kranji Secondary School",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G2)",
    exam: "WA3 Mathematics",
    marks: "19/25 (76%)",
    year: 2026,
    school: "CHIJ St Theresa’s Convent",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G2)",
    exam: "WA3 Mathematics",
    marks: "29/30 (96.7%)",
    year: 2026,
    school: "Choa Chu Kang Secondary School",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G2)",
    exam: "WA3 Mathematics",
    marks: "29/35 (82.9%)",
    year: 2026,
    school: "Zheng Hua Secondary School",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G3)",
    exam: "WA3 Mathematics",
    marks: "19/25 (76%)",
    year: 2026,
    school: "Fuhua Secondary School",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (IB)",
    exam: "WA3 Mathematics",
    marks: "31/40 (77.5%)",
    year: 2026,
    school: "School of the Arts (SOTA)",
  },
  {
    level: "Secondary 3",
    levelLabel: "Secondary 3 (G3)",
    exam: "WA3 Mathematics",
    marks: "30/30 (100%)",
    year: 2026,
    school: "Kranji Secondary School",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (G2)",
    exam: "WA3 Mathematics",
    marks: "72%",
    year: 2025,
    school: "CHIJ St Theresa’s Convent",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (G2)",
    exam: "WA3 Mathematics",
    marks: "28/35 (80%)",
    year: 2025,
    school: "Zheng Hua Secondary School",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (G3)",
    exam: "WA3 Mathematics",
    marks: "21/25 (84%)",
    year: 2025,
    school: "Fuhua Secondary School",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G3)",
    exam: "WA3 Mathematics",
    marks: "19/25 (76%)",
    year: 2025,
    school: "CHIJ St Theresa’s Convent",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (G2)",
    exam: "WA2 Mathematics",
    marks:
      "22/25 (88%); promoted to Secondary 1 (G3) Mathematics",
    year: 2025,
    school: "CHIJ St Theresa’s Convent",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (G3)",
    exam: "WA2 Mathematics",
    marks: "18/25 (72%)",
    year: 2025,
    school: "Fuhua Secondary School",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (G3)",
    exam: "WA2 Mathematics",
    marks: "22/30 (73.3%)",
    year: 2025,
    school: "Nan Hua High School",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (IB)",
    exam: "WA2 Mathematics",
    marks: "30/40 (75%)",
    year: 2025,
    school: "School of the Arts (SOTA)",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G1)",
    exam: "WA2 Mathematics",
    marks: "26/30 (86.7%)",
    year: 2025,
    school: "Greenridge Secondary School",
  },
  {
    level: "Secondary 4",
    levelLabel: "Secondary 4 (G1)",
    exam: "WA2 Mathematics",
    marks: "28/30 (93.3%)",
    year: 2025,
    school: "Zheng Hua Secondary School",
  },
  {
    level: "Secondary 4",
    levelLabel: "Secondary 4 (G3)",
    exam: "WA2 Additional Mathematics",
    marks: "22/25 (88%)",
    year: 2025,
    school: "CHIJ St Theresa’s Convent",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (G2)",
    exam: "WA1 Mathematics",
    marks: "18/25 (72%)",
    year: 2025,
    school: "CHIJ St Theresa’s Convent",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (G3)",
    exam: "WA1 Mathematics",
    marks: "24/30 (80%)",
    year: 2025,
    school: "Nan Hua High School",
  },
  {
    level: "Secondary 1",
    levelLabel: "Secondary 1 (IB)",
    exam: "WA1 Mathematics",
    marks: "29/40 (72.5%)",
    year: 2025,
    school: "School of the Arts (SOTA)",
  },
  {
    level: "Secondary 2",
    levelLabel: "Secondary 2 (G1)",
    exam: "WA1 Mathematics",
    marks: "25/30 (83.3%)",
    year: 2025,
    school: "Greenridge Secondary School",
  },
  {
    level: "Secondary 4",
    levelLabel: "Secondary 4 (G1)",
    exam: "WA1 Mathematics",
    marks: "28/30 (93.3%)",
    year: 2025,
    school: "Zheng Hua Secondary School",
  },
  {
    level: "Secondary 4",
    levelLabel: "Secondary 4 (G3)",
    exam: "WA1 Additional Mathematics",
    marks: "21/25 (84%)",
    year: 2025,
    school: "CHIJ St Theresa’s Convent",
  },
];

const assessmentRank = (exam: string) => {
  const normalizedExam = exam.toLowerCase();
  if (normalizedExam.includes("end-of-year") || normalizedExam.includes("eoy"))
    return 0;
  if (normalizedExam.includes("wa3")) return 1;
  if (normalizedExam.includes("wa2")) return 2;
  if (normalizedExam.includes("wa1")) return 3;
  return 4;
};

export default function ResultsSection() {
  const [year, setYear] = useState("");
  const [level, setLevel] = useState("");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 600px)");
    const updatePageSize = () => {
      setPageSize(mobileViewport.matches ? 4 : 10);
      setCurrentPage(1);
    };

    updatePageSize();
    mobileViewport.addEventListener("change", updatePageSize);
    return () => mobileViewport.removeEventListener("change", updatePageSize);
  }, []);

  const filteredResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return results
      .filter(
        (result) =>
          (!year || String(result.year) === year) &&
          (!level || result.level === level) &&
          (!normalizedQuery ||
            `${result.levelLabel} ${result.exam} ${result.marks} ${result.year} ${result.school}`
              .toLowerCase()
              .includes(normalizedQuery)),
      )
      .sort(
        (first, second) =>
          assessmentRank(first.exam) - assessmentRank(second.exam) ||
          second.year - first.year,
      );
  }, [year, level, query]);

  const pageCount = Math.max(1, Math.ceil(filteredResults.length / pageSize));
  const activePage = Math.min(currentPage, pageCount);
  const visibleResults = filteredResults.slice(
    (activePage - 1) * pageSize,
    activePage * pageSize,
  );
  const summary = filteredResults.length
    ? `Showing ${(activePage - 1) * pageSize + 1}–${Math.min(
        activePage * pageSize,
        filteredResults.length,
      )} of ${filteredResults.length} results`
    : "";

  const updateYear = (value: string) => {
    setYear(value);
    setCurrentPage(1);
  };
  const updateLevel = (value: string) => {
    setLevel(value);
    setCurrentPage(1);
  };
  const updateQuery = (value: string) => {
    setQuery(value);
    setCurrentPage(1);
  };

  return (
    <section className="results" id="results">
      <div className="wrap">
        <SectionHeading
          eyebrow="Student progress"
          title="Results, built step by step."
        >
          Browse selected Mathematics and Additional Mathematics assessment
          results above 70%. Results are anonymised, with End-of-Year results
          first, followed by WA3, WA2 and WA1.
        </SectionHeading>
        <ResultsFilters
          level={level}
          onLevelChange={updateLevel}
          onQueryChange={updateQuery}
          onYearChange={updateYear}
          query={query}
          year={year}
        />
        {filteredResults.length ? (
          <>
            <ResultsTable results={visibleResults} />
            <div aria-label="Results table pagination" className="pagination">
              <span aria-live="polite" id="pageSummary">
                {summary}
              </span>
              <Pagination
                currentPage={activePage}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  document
                    .getElementById("results")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                pageCount={pageCount}
              />
            </div>
          </>
        ) : (
          <div className="empty" role="status">
            No results match these filters. Try another search.
          </div>
        )}
      </div>
    </section>
  );
}
