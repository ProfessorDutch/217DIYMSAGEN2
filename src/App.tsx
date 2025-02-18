import React, { useState, useEffect } from 'react';
import MSASelector from './components/MSASelector';
import { LoginForm } from './components/LoginForm';
import { ProcessingStatus } from './types';
import { api } from './config/api';
import { supabase } from './lib/supabase';
import './App.css';

function App() {
  const [selectedMSAs, setSelectedMSAs] = useState<string[]>([]);
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState<ProcessingStatus | null>(null);
  const [processingDetails, setProcessingDetails] = useState<{
    total: number;
    current: number;
    currentMSA: string;
  } | null>(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleProcess = async () => {
    if (selectedMSAs.length === 0) {
      setStatus({ type: 'error', message: 'Please select at least one MSA' });
      return;
    }

    setProcessing(true);
    setStatus({ type: 'info', message: 'Processing MSAs...' });
    setProcessingDetails({
      total: selectedMSAs.length,
      current: 0,
      currentMSA: selectedMSAs[0],
    });

    try {
      const result = await api.processMSAs(selectedMSAs);
      
      if (result.errors.length > 0) {
        setStatus({ 
          type: 'error', 
          message: `Processed ${result.processed.length} MSAs with ${result.errors.length} errors. Check console for details.` 
        });
        console.error('Processing errors:', result.errors);
      } else {
        setStatus({ 
          type: 'success', 
          message: `Successfully processed ${result.processed.length} MSAs` 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Error processing MSAs' 
      });
      console.error('Processing error:', error);
    } finally {
      setProcessing(false);
      setProcessingDetails(null);
    }
  };

  if (!session) {
    return <LoginForm onSuccess={() => window.location.reload()} />;
  }

  return (
    <div className="app">
      <h1>MSA Content Processor</h1>
      <MSASelector 
        selectedMSAs={selectedMSAs} 
        setSelectedMSAs={setSelectedMSAs} 
      />
      <div className="actions">
        <button 
          onClick={handleProcess} 
          disabled={processing || selectedMSAs.length === 0}
        >
          {processing ? 'Processing...' : 'Process Selected MSAs'}
        </button>
      </div>
      {status && (
        <div className={`status ${status.type}`}>
          {status.message}
        </div>
      )}
      {processingDetails && (
        <div className="processing-details">
          <p>Processing MSA {processingDetails.current + 1} of {processingDetails.total}</p>
          <p>Current MSA: {processingDetails.currentMSA}</p>
        </div>
      )}
    </div>
  );
}

export default App;