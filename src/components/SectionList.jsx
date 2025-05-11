import Section from "./Section";

import "../css/SectionList.css";

const sections = [
  { id: 1, name: "About me", icon: "emoji_emotions" },
  { id: 2, name: "Projects", icon: "view_list" },
  { id: 3, name: "Skills", icon: "post_add" },
  { id: 4, name: "Contact", icon: "mail" },
];

function SectionsList() {
  return (
    <div className="section_list">
      {sections.map((section) => (
        <Section section={section} key={section.id} />
      ))}
    </div>
  );
}

export default SectionsList;
