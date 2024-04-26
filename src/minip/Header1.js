import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header1() {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [ytLinks, setYtLinks] = useState([]);
  const [gdLinks, setGdLinks] = useState([]);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact") {
      setTitle('Welcome to Srivatsa');
    } else {
      const getTitle = (id) => {
        const subjectMap = {
          1: "WebP-chatroom",
          2: "Design-chatroom",
          3: "Micro-chatroom",
          4: "Theory-chatroom",
          5: "Probability-chatroom",
          6: "Tester-chatroom"
        };

        return subjectMap[id] || '';
      };

      const id = location.pathname.split('/')[2]; // Assuming the subject ID is the third segment of the URL

      const newTitle = getTitle(parseInt(id));

      setTitle(newTitle);

      // Define YouTube and Google Drive links for each subject
      const links = [
        { id: 1, yt: "https://www.youtube.com/1", gd: "https://www.google.com/intl/en_in/drive/1" },
        { id: 2, yt: "https://www.youtube.com/2", gd: "https://www.google.com/intl/en_in/drive/2" },
        { id: 3, yt: "https://www.youtube.com/3", gd: "https://www.google.com/intl/en_in/drive/3" },
        { id: 4, yt: "https://www.youtube.com/4", gd: "https://www.google.com/intl/en_in/drive/4" },
        { id: 5, yt: "https://www.youtube.com/5", gd: "https://www.google.com/intl/en_in/drive/5" },
        { id: 6, yt: "https://www.youtube.com/6", gd: "https://www.google.com/intl/en_in/drive/6" }
      ];

      // Find the links for the current subject
      const currentLinks = links.find(subject => subject.id === parseInt(id));
      if (currentLinks) {
        setYtLinks(currentLinks.yt);
        setGdLinks(currentLinks.gd);
      }
    }
  }, [location.pathname]);

  return (
    <div className='div1'>
      <header>
        {location.pathname !== "/subject" && <h1>{title}</h1>}
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {location.pathname.startsWith("/subject") && (
            <div className='ytgd'>
              <li><a href={ytLinks} target='_blank' rel="noreferrer">YouTube</a></li>
              <li><a href={gdLinks} target='_blank' rel="noreferrer">Google Drive</a></li>
            </div>
          )}
        </ul>
        {location.pathname === "/" && ( 
          <form>
            <input type='text' placeholder='search'></input>
          </form>
        )}
      </nav>
    </div>
  );
}
