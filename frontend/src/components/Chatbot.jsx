import React, { useState } from 'react'

export default function Chatbot({ onClose }) {
  const [msgs, setMsgs] = useState([{ from: 'bot', text: 'Hi! How can I help?' }])
  const [text, setText] = useState('')

  const send = () => {
    if (!text) return
    setMsgs(m => [...m, { from: 'user', text }])
    setText('')
    setTimeout(() => setMsgs(m => [...m, { from: 'bot', text: 'This is a demo reply.' }]), 600)
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-between border-b p-2 bg-white">
        <div className="text-sm font-medium">Chatbot</div>
        <button
          onClick={() => onClose && onClose()}
          className="inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-500 text-white px-2 py-1 text-sm"
          aria-label="Close"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-white">
        {msgs.map((m, i) => (
          <div key={i} className={`text-sm p-2 rounded ${m.from === 'bot' ? 'bg-gray-100' : 'bg-indigo-50'}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="border-t p-3 flex gap-2 bg-gradient-to-br from-blue-50 to-cyan-50">
        <input placeholder="Type your message..." value={text} onChange={(e) => setText(e.target.value)} className="flex-1 p-2 border rounded bg-white/90 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        <button onClick={send} className="px-4 py-2 rounded-lg text-white font-medium shadow-sm bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          Send
        </button>
      </div>
    </div>
  )
}


