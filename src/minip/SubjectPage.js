import React from 'react';
import { useParams } from 'react-router-dom';
import {ChatEngine, ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine';
import Header1 from './Header1';
import Bodymain from './Bodymain';
export default function SubjectPage() {
  const { id,chatId } = useParams(); // Get the subject ID from URL parameter
  // You can use the subject ID to fetch specific subject data from your data source or render content accordingly
  
  return (
    <div className='chatapp'>
      {/* <h2>Subject Page</h2>
      <p>You are viewing subject with ID: {id} and chatid {chatId}</p>  */}
      {/* <p>
        YouTube Link: <a href={yt}>{yt}</a><br />
        Google Drive Link: <a href={gd}>{gd}</a>
      </p> */}
      {/* Render subject content here

      {/* <div>
      <ChatEngineWrapper>
        <ChatEngine></ChatEngine>
      <ChatSocket 
        projectID='e98f390e-adff-4803-80df-0a43e8ecc3df'
        chatID='245673'
        chatAccessKey='1234'
        senderUsername='srivatsa'
        height="50vh"
      />

      <ChatFeed activeChat='245673' /> 
    </ChatEngineWrapper>
      </div> */}

  
    {/* <ChatEngine
 			projectID='e98f390e-adff-4803-80df-0a43e8ecc3df'
 			userName='srivatsa'
 			userSecret='1234'
      // chatID={chatId}
 		/> */}
          {/* <div className="chat-feed">
        <ChatEngine
          projectID="e98f390e-adff-4803-80df-0a43e8ecc3df"
          userName="srivatsa"
          userSecret="1234"
          height="100vh"
          // chatID={chatId} // Use the chatId from URL parameter
        >
        <ChatFeed />
        </ChatEngine>
      </div> */}


       <ChatEngineWrapper>
                  
                  <ChatSocket 
                      
                      projectID='ca8eaf6c-c8cf-44af-8514-42b93d3403ef'
                      chatID={chatId}
                      chatAccessKey='1234'
                      senderUsername='srivatsa'
                      
                      
                      />
      
                  <ChatFeed activeChat={chatId} /> 
              </ChatEngineWrapper> 
        {/* <aside>lormememmemsmdmsmdsmdsmdmsm</aside> */}

      
    </div>
  );
}


        