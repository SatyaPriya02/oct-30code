import React from 'react'

export default function VoiceAssist({ onResult }) {
  const [listening, setListening] = React.useState(false)

  const start = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) return alert('Voice not supported in this browser')
    const r = new SR()
    r.lang = 'en-US'
    r.onstart = () => setListening(true)
    r.onend = () => setListening(false)
    r.onresult = (e) => {
      const text = e.results[0][0].transcript
      onResult(text)
    }
    r.onerror = () => {
      setListening(false)
      alert('Speech recognition error')
    }
    r.start()
  }

  return (
    <button
      onClick={start}
      aria-label="Start voice input"
      className={`relative w-15 h-15 rounded-full text-white shadow-md flex items-center justify-center transition transform hover:scale-105 focus:outline-none 
        ${listening ? 'bg-gradient-to-br from-rose-500 to-orange-500' : 'bg-gradient-to-br from-indigo-600 to-sky-500'}`}
    >
      {listening && <span className="absolute inset-0 rounded-full animate-ping bg-white/20"></span>}
      <svg className="w-8 h-8 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14a3 3 0 003-3V7a3 3 0 10-6 0v4a3 3 0 003 3z" />
        <path d="M19 11v1a7 7 0 11-14 0v-1" />
        <path d="M12 19v3" />
      </svg>
     
    </button>
  )
}
