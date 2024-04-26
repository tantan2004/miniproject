import React from 'react';
import { Link } from 'react-router-dom';
import Footer1 from './Footer1';

export default function Bodymain({ onSubjectClick }) {
  const subjects = [
    { name: "Web - programming", code: "BCSE", id: 1, chatId: 246515, yt:"https://www.youtube.com/" , gd: "https://www.google.com/intl/en_in/drive/"},
    { name: "Design", code: "BCSE", id: 2,chatId: 246516, yt:"https://www.youtube.com/1" , gd: "https://www.google.com/intl/en_in/drive/1"},
    { name: "Micro", code: "BCSE", id: 3, chatId: 246517 , yt:"https://www.youtube.com/2", gd: "https://www.google.com/intl/en_in/drive/2"},
    { name: "Theory", code: "BCSE", id: 4, chatId: 246518 , yt:"https://www.youtube.com/3" , gd: "https://www.google.com/intl/en_in/drive/3"},
    { name: "Probability", code: "BCSE", id: 5, chatId:246519, yt:"https://www.youtube.com/4" , gd: "https://www.google.com/intl/en_in/drive/4"},
    { name: "test-chat", code: "BCSE", id: 6, chatId:246521, yt:"https://www.youtube.com/5" , gd: "https://www.google.com/intl/en_in/drive/5" }
  ];

  const handleSubjectClick = (subject) => {
    onSubjectClick(subject);
  };
  
  const subjectItems = subjects.map((subject) => (
    <Link key={subject.id} to={`/subject/${subject.id}/${subject.chatId}`} className='div3' onClick={() => handleSubjectClick(subject)}>
      <h3>{subject.name}</h3>
      <h3>{subject.code}</h3>
    </Link>
  ));
  

  return <div>{subjectItems}
  <Footer1 isVisible={true} /></div>;
}
