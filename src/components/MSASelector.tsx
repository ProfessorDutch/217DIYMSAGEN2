import React from 'react';
import { MSA_CONFIG } from '../config/msaConfig';
import { Check } from 'lucide-react';

interface MSASelectorProps {
  selectedMSAs: string[];
  setSelectedMSAs: (msas: string[]) => void;
}

function MSASelector({ selectedMSAs, setSelectedMSAs }: MSASelectorProps) {
  const handleSelectMSA = (msa: string) => {
    if (selectedMSAs.includes(msa)) {
      setSelectedMSAs(selectedMSAs.filter(m => m !== msa));
    } else {
      setSelectedMSAs([...selectedMSAs, msa]);
    }
  };

  const handleSelectAll = () => {
    if (selectedMSAs.length === Object.keys(MSA_CONFIG).length) {
      setSelectedMSAs([]);
    } else {
      setSelectedMSAs(Object.keys(MSA_CONFIG));
    }
  };

  return (
    <div className="msa-selector">
      <div className="selector-header">
        <h2>Select MSAs to Process</h2>
        <button 
          onClick={handleSelectAll}
          className="select-all-btn"
        >
          {selectedMSAs.length === Object.keys(MSA_CONFIG).length 
            ? 'Deselect All' 
            : 'Select All'}
        </button>
      </div>
      <div className="msa-grid">
        {Object.entries(MSA_CONFIG).map(([msa, config]) => (
          <div 
            key={msa} 
            className={`msa-item ${selectedMSAs.includes(msa) ? 'selected' : ''}`}
            onClick={() => handleSelectMSA(msa)}
          >
            <div className="checkbox">
              {selectedMSAs.includes(msa) && <Check size={16} />}
            </div>
            <div className="msa-info">
              <strong>{config.city}, {config.state}</strong>
              <span className="region">{config.msa_region}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MSASelector;