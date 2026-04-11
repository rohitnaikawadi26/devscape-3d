import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Apprentice</h4>
                <h5>S&amp;P Global · Hyderabad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Shipped 4 production features for an enterprise Word Add-in (1,500+ active users)
              including AI-driven content generation, grammar correction, tone polishing, and
              multilingual translation. Engineered a Translation API pipeline reducing manual
              translation efforts by 80%. Architected a Content Review Portal automating
              4-level document approval workflows with SLA reminders, cutting review
              turnaround by 60%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Lovely Professional University · CGPA: 7.97</h5>
              </div>
              <h3>2021–25</h3>
            </div>
            <p>
              Final Year Project: Skill Match AI — AI-powered freelance marketplace
              with intelligent candidate-job matching. Runner Up at Industrial Hackathon
              building an AI-powered resume analyzer. Solved 250+ DSA problems on
              LeetCode &amp; GeeksforGeeks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;