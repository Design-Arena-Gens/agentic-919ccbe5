'use client'

import { useState } from 'react'

export default function Home() {
  const [showDownload, setShowDownload] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/kakebo-2026.txt'
    link.download = 'kakebo-2026.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setShowDownload(true)
  }

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        paddingTop: '2rem',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '300',
          marginBottom: '1rem',
          letterSpacing: '0.5px',
          lineHeight: '1.3',
        }}>
          Kakebo 2026
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          fontWeight: '300',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          L'agenda del risparmio basata sul metodo giapponese per gestire i conti di casa,
          ottimizzare le spese e far crescere i tuoi risparmi
        </p>
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        width: '100%',
        maxWidth: '600px',
        marginBottom: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.4rem',
          fontWeight: '400',
          marginBottom: '1.5rem',
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '0.8rem',
        }}>
          Che cos'è il Kakebo?
        </h2>
        <p style={{
          lineHeight: '1.8',
          marginBottom: '1rem',
          color: '#444',
        }}>
          Il Kakebo è un metodo giapponese di gestione del denaro domestico nato nel 1904
          grazie a Motoko Hani, prima giornalista donna del Giappone.
        </p>
        <p style={{
          lineHeight: '1.8',
          marginBottom: '1rem',
          color: '#444',
        }}>
          Il suo scopo è semplice: aiutare le famiglie a risparmiare attraverso la
          consapevolezza delle spese. Kakebo significa "libro dei conti di casa".
        </p>
        <p style={{
          lineHeight: '1.8',
          color: '#444',
        }}>
          Non è solo un bilancio. È una pratica di riflessione. Scrivere a mano aiuta
          la mente a ricordare e a comprendere meglio dove va il nostro denaro.
        </p>
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        width: '100%',
        maxWidth: '600px',
        marginBottom: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.4rem',
          fontWeight: '400',
          marginBottom: '1.5rem',
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '0.8rem',
        }}>
          Le 4 domande del Kakebo
        </h2>
        <p style={{
          lineHeight: '1.8',
          marginBottom: '1.2rem',
          color: '#444',
        }}>
          Prima di ogni acquisto, chiediti:
        </p>
        <ol style={{
          lineHeight: '2',
          color: '#444',
          paddingLeft: '1.5rem',
        }}>
          <li>Posso vivere senza questo oggetto?</li>
          <li>In base alla mia situazione economica, posso permettermelo?</li>
          <li>Lo userò davvero?</li>
          <li>Ho lo spazio per conservarlo?</li>
        </ol>
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        width: '100%',
        maxWidth: '600px',
        marginBottom: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.4rem',
          fontWeight: '400',
          marginBottom: '1.5rem',
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '0.8rem',
        }}>
          Contenuto del libro
        </h2>
        <ul style={{
          lineHeight: '2',
          color: '#444',
          paddingLeft: '1.5rem',
        }}>
          <li>Introduzione al metodo Kakebo</li>
          <li>Panoramica annuale e situazione finanziaria</li>
          <li>Obiettivi di risparmio 2026</li>
          <li>Sezioni mensili complete (Gennaio - Dicembre)</li>
          <li>Spese giornaliere per categoria</li>
          <li>Riflessioni di metà mese e fine mese</li>
          <li>Monitoraggio risparmi annuale</li>
          <li>Consapevolezza finanziaria e gratitudine</li>
          <li>Filosofia giapponese: Kaizen, Ikigai, Mottainai, Wabi-sabi</li>
          <li>Note personali</li>
        </ul>
      </div>

      <button
        onClick={handleDownload}
        style={{
          backgroundColor: '#2c2c2c',
          color: 'white',
          padding: '1rem 2.5rem',
          fontSize: '1.1rem',
          fontWeight: '400',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          marginBottom: '2rem',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#444'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2c2c2c'}
      >
        Scarica il Kakebo 2026 (TXT)
      </button>

      {showDownload && (
        <p style={{
          color: '#666',
          fontSize: '0.95rem',
          textAlign: 'center',
          lineHeight: '1.6',
          maxWidth: '500px',
        }}>
          Il file è stato scaricato. Questo contenuto è progettato per essere ricopiato
          a mano in un quaderno fisico, seguendo la tradizione del metodo Kakebo.
        </p>
      )}

      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: '6px',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#666',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          fontStyle: 'italic',
        }}>
          "Il risparmio non è rinuncia. È libertà."
        </p>
      </div>
    </main>
  )
}
