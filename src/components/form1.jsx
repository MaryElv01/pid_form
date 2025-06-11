import React from 'react';
import './form1.css';

export function Form1() {
 return (
    <div className="so-modal">
      <div className="so-header">
        <span className="so-title">Adicionar objetivo estratégico</span>
        <div className="so-controls">
          <button className="so-icon-btn">⦸</button>
          <button className="so-icon-btn">✕</button>
        </div>
      </div>
      <div className="so-body">
        <div className="so-row">
          <label className="so-label">
            No <span className="required">*</span>
          </label>
          <input type="number" className="so-number-input" />
          <label className="so-label">
            Denominación <span className="required">*</span>
          </label>
          <input type="text" className="so-text-input" />
        </div>

        <div className="so-section">
          <div className="so-section-title">Datos generales</div>
          <div className="so-row">
            <label className="so-label">
              Fecha inicio <span className="required">*</span>
            </label>
            <input
              type="date"
              defaultValue="2025-01-01"
              className="so-date-input"
            />
            <label className="so-label">
              Fecha fin <span className="required">*</span>
            </label>
            <input
              type="date"
              defaultValue="2025-12-31"
              className="so-date-input"
            />
          </div>
        </div>

        <div className="so-section so-section-resp">
          <div className="so-section-title">Responsable(s)</div>
          <div className="so-editor-toolbar">
            <select className="so-font-select">
              <option>Helvetica</option>
            </select>
            <button>B</button>
            <button>
              <em>I</em>
            </button>
            <button>U</button>
            <button> Tⁿ</button>
            <button style={{ backgroundColor: '#ff0' }}>T</button>
            <button>•••</button>
            <button>🔗</button>
            <button>• List</button>
            <button>1. List</button>
          </div>
          <textarea className="so-textarea" />
        </div>
      </div>

      <div className="so-footer">
        <button className="so-btn cancel">Cancelar</button>
        <button className="so-btn apply">Aplicar</button>
        <button className="so-btn accept">Aceptar ▼</button>
      </div>
    </div>
  );
}