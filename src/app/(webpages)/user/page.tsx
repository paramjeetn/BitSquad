"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MessageCircle, User, FileText, Bell, ChevronLeft, ChevronRight } from "lucide-react"

export default function UserDashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState('complaints')

  const complaints = [
    { id: '001', text: 'Product not delivered', status: 'Open', date: '2023-06-01' },
    { id: '002', text: 'Wrong item received', status: 'Closed', date: '2023-05-28' },
    { id: '003', text: 'Refund not processed', status: 'In Progress', date: '2023-06-03' },
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar with Gradient and Blur */}
      <aside className={`relative transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-400 z-0"></div>
        <div className="absolute inset-0 backdrop-blur-sm z-10"></div>
        <div className="relative z-20 h-full p-6 text-white">
          <div className="flex justify-between items-center mb-10">
            <h2 className={`text-2xl font-bold ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Dashboard</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="text-white hover:bg-white/20 rounded-full"
            >
              {isSidebarCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
            </Button>
          </div>
          <nav className="space-y-2">
            <a 
              href="#" 
              className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-200 ${activeNavItem === 'complaints' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'}`}
              onClick={() => setActiveNavItem('complaints')}
            >
              <FileText size={20} className="flex-shrink-0" />
              <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Complaints</span>
            </a>
            <a 
              href="#" 
              className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-200 ${activeNavItem === 'user' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'}`}
              onClick={() => setActiveNavItem('user')}
            >
              <User size={20} className="flex-shrink-0" />
              <span className={isSidebarCollapsed ? 'hidden' : 'block'}>User Details</span>
            </a>
            <a 
              href="#" 
              className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-200 ${activeNavItem === 'notifications' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'}`}
              onClick={() => setActiveNavItem('notifications')}
            >
              <Bell size={20} className="flex-shrink-0" />
              <span className={isSidebarCollapsed ? 'hidden' : 'block'}>Notifications</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content with Blurry Gradient Background */}
      <main className="flex-1 p-6 overflow-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 z-0"></div>
        <div className="absolute inset-0 backdrop-blur-sm z-10"></div>
        <div className="relative z-20">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Past Complaints</h1>
          <Card className="bg-white/80 shadow-md backdrop-blur-sm">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100/50">
                    <TableHead className="text-gray-700">Complaint ID</TableHead>
                    <TableHead className="text-gray-700">Complaint Text</TableHead>
                    <TableHead className="text-gray-700">Status</TableHead>
                    <TableHead className="text-gray-700">Date Posted</TableHead>
                    <TableHead className="text-gray-700">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complaints.map((complaint) => (
                    <TableRow key={complaint.id} className="hover:bg-white/50 transition-colors duration-200">
                      <TableCell className="font-medium text-gray-900">{complaint.id}</TableCell>
                      <TableCell className="text-gray-700">{complaint.text}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold
                          ${complaint.status === 'Open' ? 'bg-green-100 text-green-800' : 
                            complaint.status === 'Closed' ? 'bg-red-100 text-red-800' : 
                            'bg-yellow-100 text-yellow-800'}`}>
                          {complaint.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-700">{complaint.date}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="bg-blue-500 text-white hover:bg-blue-600">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Chatbot Modal */}
      <div className="fixed bottom-4 right-4 z-30">
        <Button
          className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <MessageCircle size={24} className="text-white" />
        </Button>
        {isChatOpen && (
          <Card className="absolute bottom-16 right-0 w-80 bg-white/90 shadow-lg backdrop-blur-sm">
            <CardHeader className="bg-blue-500 text-white">
              <CardTitle>Chatbot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-40 bg-gray-100/50 rounded-md p-2 overflow-auto">
                  {/* Chat messages would go here */}
                </div>
                <Input placeholder="Type your message..." className="border-gray-300" />
                <Button className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white">Send</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}