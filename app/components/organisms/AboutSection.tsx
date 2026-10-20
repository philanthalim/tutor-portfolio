import InfoPanel from "../molecules/InfoPanel";
import SectionHeading from "../molecules/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHeading
          eyebrow="Meet your tutor"
          title="Calm guidance, clear thinking."
        >
          I’m a part-time tutor and full-time software engineer with a degree in
          Mathematical Science (Statistics) from Nanyang Technological
          University, graduating in 2021.
        </SectionHeading>
        <div className="about-grid">
          <InfoPanel title="My teaching approach">
            <p>
              I aim to make Mathematics feel more manageable by breaking complex
              ideas into smaller steps and explaining why each method works.
              Lessons are adapted to each student’s pace, current gaps and
              school syllabus.
            </p>
            <ul className="ticks">
              <li>Build understanding before speed</li>
              <li>Practise how to approach unfamiliar questions</li>
              <li>Identify gaps and strengthen fundamentals</li>
              <li>Encourage students to ask questions without fear</li>
            </ul>
          </InfoPanel>
          <InfoPanel title="A good fit for your child">
            <p>
              Whether your child needs help rebuilding confidence, improving
              exam technique or stretching towards stronger grades, lessons
              focus on steady progress and learning strategies they can use
              independently.
            </p>
            <ul className="ticks">
              <li>Secondary 1 and 2 Mathematics</li>
              <li>Secondary 3 and 4 Mathematics</li>
              <li>Secondary 3 and 4 Additional Mathematics</li>
              <li>Support for school assessments and O-Level preparation</li>
            </ul>
          </InfoPanel>
          <InfoPanel title="My academic background">
            <p>
              My own learning journey gave me a strong foundation in Mathematics
              and a clear appreciation of how important understanding and
              practice are.
            </p>
            <ul className="ticks">
              <li>
                <strong>Nanyang Technological University (NTU)</strong> —
                Mathematical Science, major in Statistics; graduated 2021
              </li>
              <li>
                <strong>Anderson Junior College</strong> — 2015–2016
              </li>
              <li>
                <strong>Kranji Secondary School</strong> — 2014 O-Level results:
                Additional Mathematics A1, Elementary Mathematics A2
              </li>
            </ul>
          </InfoPanel>
        </div>
      </div>
    </section>
  );
}
