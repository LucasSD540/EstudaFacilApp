import { createContext, useContext, useState } from "react";

const StudyLevelContext = createContext();

export const useStudyLevel = () => useContext(StudyLevelContext);

export const StudyLevelProvider = ({ children }) => {
  const [studyLevel, setStudyLevel] = useState(
    localStorage.getItem("studyLevelAuthenticated")
  );

  const updateStudyLevel = (level) => {
    localStorage.setItem("studyLevelAuthenticated", level);
    setStudyLevel(level);
  };

  const removeStudyLevel = () => {
    localStorage.removeItem("studyLevelAuthenticated");
    setStudyLevel(null);
  };

  return (
    <StudyLevelContext.Provider
      value={{ studyLevel, updateStudyLevel, removeStudyLevel }}
    >
      {children}
    </StudyLevelContext.Provider>
  );
};
