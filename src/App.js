import React from 'react';
import './App.css';
import Hobby from './Components/Hobby'; 

// App
function App() {
  return (
    
    <div className="container">
    <h1 className="header">My Favorite Hobbies Are..</h1>
    <Hobby name='Running' photo='https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' desc="Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. It is defined in sporting terms as a gait in which at some point all feet are off the ground at the same time. It is a form of both anaerobic exercise and aerobic exercise. Running is a complex, coordinated process which involves the entire body. Leaning forward places a runner\'s center of mass on the front part of the foot which avoids landing on the heel and facilitates the use of the spring mechanism of the foot. It also makes it easier for the runner to avoid landing the foot in front of the center of mass and the resultant braking effect. There are many injuries associated with running (due to it being a high impact activity). -Science Daily" />
    <Hobby name='Programming' photo='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' desc="Programming is a way to “instruct the computer to perform various tasks”.Programming is the process of designingand building an executable computer program to accomplish a specific computing result. Programming involves tasks such as: analysis, generating algorithms' accuracy and resoruce consumption, and the implementation of algorithms in a chosen progamming language (commonly referred to as coding). -Wikipedia " />
    <Hobby name='Reading' photo='https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' desc="Reading is defined as a cognitive process that involves decoding symbols to arrive at meaning. Reading is an active process of constructing meanings of words. Reading with a purpose helps the reader to direct information towards a goal and focuses their attention. Although the reasons for reading may vary, the primary purpose of reading is to understand the text. Reading is a thinking process. It allows the reader to use what he or she may already know, also called prior knowledge. During this processing of information, the reader uses strategies to understand what they are reading, uses themes to organize ideas, and uses textual clues to find the meanings of new words. -study.com " />
      

    </div>
  );
}

export default App;