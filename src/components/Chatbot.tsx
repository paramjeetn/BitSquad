"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';

// Smooth scroll effect
const scrollToBottom = (ref: React.RefObject<HTMLDivElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};

interface MessageProps {
  sender: 'user' | 'bot' | 'admin';
  text?: string;
}

interface Message {
  sender: 'user' | 'bot' | 'admin';
  text?: string;
}

// Simulated API Responses (Replace this with actual API call)
const fetchTrainData = (userQuery: string): string => {
  if (userQuery.toLowerCase().includes('pnr')) {
    return 'Your PNR Status is: Confirmed, Coach S1, Seat 34.';
  } else if (userQuery.toLowerCase().includes('train status')) {
    return 'Train 12345 is running on time and will arrive at Delhi at 14:30.';
  } else if (userQuery.toLowerCase().includes('refund')) {
    return "You can apply for a refund through the IRCTC website under the 'Ticket Cancellation' section.";
  } else {
    return 'Sorry, I am not sure about that. Please try rephrasing or check the Indian Railways website.';
  }
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi there! 👋 How can I assist you today with Rail Madad?' },
  ]);
  const [userInput, setUserInput] = useState<string>('');
  const [showAdminButton, setShowAdminButton] = useState<boolean>(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom(messageEndRef);
  }, [messages]);

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const userMessage = userInput;
      setMessages([...messages, { sender: 'user', text: userMessage }]);
      setUserInput('');

      setTimeout(() => {
        const botResponse = fetchTrainData(userMessage);

        if (botResponse.includes('Sorry, I am not sure about that')) {
          setShowAdminButton(true);
        } else {
          setShowAdminButton(false);
        }

        setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      }, 1000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleAdminRedirect = () => {
    alert('Redirecting to Admin...');
  };

  const getDepartmentData = async () => {
    try {
      const q = query(
        collection(db, 'departments'),
        where('email', '==', 'admin@example.com')
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
      });
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  };

  useEffect(() => {
    getDepartmentData();
  }, []);

  return (
    <Card className="mx-auto mt-10 p-6 w-full max-w-lg rounded-lg bg-white shadow-md font-poppins flex flex-col">
      <CardHeader className="bg-blue-500 text-white text-center rounded-t-lg p-4">
        <Label className="font-bold text-lg">Rail Madad Chatbot</Label>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <ScrollArea>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender !== 'user' && (
                <Avatar>
                  <AvatarImage src="/botAvatar.jpg" />
                  alt="Bot" className="mr-3 border-2 border-blue-500"
                </Avatar>
              )}
              <div
                className={`p-4 rounded-xl shadow ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                  }`}
              >
                <Label className="text-sm">{msg.text}</Label>
              </div>
              {msg.sender === 'user' && (
                <Avatar>
                  <AvatarImage src="/userAvatar.jpg" />
                  alt="You" className="ml-3 border-2 border-blue-500"
                </Avatar>

              )}
            </div>
          ))}
          <div ref={messageEndRef} />
        </ScrollArea>

        {showAdminButton && (
          <div className="flex items-center justify-center mt-4">
            <Button className="bg-red-500 hover:bg-red-400 text-white rounded-lg" onClick={handleAdminRedirect}>
              Contact Admin
            </Button>
          </div>
        )}
      </CardContent>

      <CardContent className="flex p-4 bg-white rounded-b-lg">
        <Input
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-grow p-3 rounded-full bg-gray-100 shadow-sm"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <Button className="ml-4 p-3 bg-blue-500 hover:bg-blue-400 text-white rounded-full" onClick={handleSendMessage}>
          Send
        </Button>
      </CardContent>
    </Card>
  );
};

export default Chatbot;
