import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const CollegeWebsiteInterface = () => {
  const [showChat, setShowChat] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    // Simulate bot response (replace this with actual LLM integration)
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thank you for your message. I'm processing your request.", sender: 'bot' }]);
    }, 1000);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Welcome To Keshav Memorial Institute of Technology</h3>
              <ul className="list-disc list-inside space-y-2 ">
               <p className="text-lg">KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY(KMIT), established in year 2007, is one of the premier engineering colleges in the state of Telangana. KMIT is sponsored by Keshav Memorial Education Society (KMES), well known in Hyderabad, for the past 75 years, for running various educational institutions of repute. KMIT is approved by All India Council for Technical Education (AICTE), New Delhi, and affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad and recognized by the Govt. of Telangana. KMIT is co-promoted and powered by Genesis Solutions Pvt. Ltd, a premier institute in Hyderabad imparting industry focused software training and education in emerging technologies and having tie-ups with leading MNCs. KMIT campus is located in Narayanaguda, a central locality in the city of Hyderabad.</p>
        
              </ul>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-2">Why KMIT?</h3>
              <ul className="list-disc list-inside space-y-2">
               <p className="text-lg">KMIT has carved a niche for itself by focusing on providing holistic education that inculcates problem solving skills, professional and ethical responsibilities. The various programmes and platforms offered by the college encourage learner autonomy. Its notable initiatives include – Trishul, coaching for BEC, Finishing School, UTTKARSH, TESSELLATOR and add on programs under SONET. KMIT has the distinctive advantage of being located in the heart of the city i.e. Narayanguda. This allows an ease of connectivity to every part of Hyderabad what with the metro station, bus stop situated very close to the college.</p>
              </ul>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-blue-600 hover:underline">Student Portal</a>
                <a href="#" className="text-blue-600 hover:underline">Course Catalog</a>
                <a href="#" className="text-blue-600 hover:underline">Library Resources</a>
                <a href="#" className="text-blue-600 hover:underline">Career Services</a>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">About KMIT</h2>
            <p>
              Keshav Memorial Institute of Technology (KMIT) is a premier engineering college
              established in 2007. Located in Hyderabad, India, KMIT is committed to providing
              quality technical education and fostering innovation among its students.
            </p>
            <p>
              Our mission is to empower students with cutting-edge technical knowledge and
              skills, preparing them to become industry-ready professionals and entrepreneurs.
              KMIT takes pride in its state-of-the-art facilities, experienced faculty, and
              strong industry connections.
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>AICTE approved and NAAC accredited institution</li>
              <li>Offers B.Tech programs in various engineering disciplines</li>
              <li>Strong focus on research and development</li>
              <li>Active placement cell with excellent track record</li>
            </ul>
          </div>
        );
      case 'events':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold mb-4">Upcoming Events</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-2">Synergy 2024</h3>
              <p className="mb-2">Date: March 15-17, 2024</p>
              <p>
                Our annual cultural festival featuring competitions, workshops, and performances.
                Join us for three days of creativity, talent, and fun!
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-2">Tech Symposium</h3>
              <p className="mb-2">Date: April 5, 2024</p>
              <p>
                A one-day technical symposium showcasing student projects, expert talks, and
                the latest in technology trends.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-2">Career Fair</h3>
              <p className="mb-2">Date: May 10, 2024</p>
              <p>
                Connect with top companies and explore internship and job opportunities.
                Open to final year students and recent graduates.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 h-[100px] text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold">Keshav Memorial Institute of Technology</h1>
          <nav>
            <ul className="flex space-x-20 text-xl ">
              {['dashboard', 'about', 'events'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => setActivePage(page)}
                    className={`text-white ${activePage === page ? 'font-bold underline' : ''}`}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 p-8 overflow-auto">
        {renderContent()}
      </main>
      
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      </div>
      
      {showChat && (
        <div className="fixed bottom-12 right-12 w-[580px] h-[700px] bg-white border border-blue-500 rounded-lg shadow-xl flex flex-col">
          <div className="p-4 border-b">
            <h1 className="font-bold text-2xl">KMIT Chatbot</h1>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}`}>
              <div className={`max-w-[75%] p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                <p className="break-words">{message.text}</p>
              </div>
            </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CollegeWebsiteInterface;