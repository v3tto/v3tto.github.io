import "material-icons/iconfont/sharp.css";

import "../css/Section.css";

function Section({ section }) {
  return (
    <div className="section">
      <span className="material-icons-sharp">{section.icon}</span>
      <p>{section.name}</p>
    </div>
  );
}

export default Section;
