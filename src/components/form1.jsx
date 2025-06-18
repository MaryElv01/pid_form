import React, { useState } from 'react';
import './form1.css';

export function Form1() {
  const [values, setValues] = useState({
    no: '',
    denom: '',
    inicio: '2025-01-01',
    fin: '2025-12-31',
    responsables: '',
  });
  const [errors, setErrors] = useState({});

  const validate = (vals) => {
    const err = {};
    if (!vals.no) err.no = 'El número es obligatorio';
    else if (!/^[1-9]\d*$/.test(vals.no)) err.no = 'Debe ser entero positivo';

    if (!vals.denom.trim()) err.denom = 'La denominación es obligatoria';
    else if (vals.denom.length < 3) err.denom = 'Al menos 3 caracteres';

    if (!vals.inicio) err.inicio = 'Fecha de inicio obligatoria';
    if (!vals.fin) err.fin = 'Fecha de fin obligatoria';
    if (vals.inicio && vals.fin && vals.inicio > vals.fin)
      err.fin = 'La fecha de fin debe ser ≥ fecha de inicio';

    if (!vals.responsables.trim())
      err.responsables = 'Responsable(s) obligatorio(s)';

    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);
    setErrors(validate(updated));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      // aquí iría la lógica de enviar/aplicar
      console.log('Datos válidos:', values);
    }
  };

  return (
    <form className="so-modal" onSubmit={handleSubmit}>
      <div className="so-header">
        <span className="so-title">Adicionar objetivo estratégico</span>
        <div className="so-controls">
          <button type="button" className="so-icon-btn">⦸</button>
          <button type="button" className="so-icon-btn">✕</button>
        </div>
      </div>
      <div className="so-body">
        <div className="so-row">
          <label className="so-label">
            No <span className="required">*</span>
          </label>
          <input
            name="no"
            type="number"
            className="so-number-input"
            value={values.no}
            onChange={handleChange}
          />
          {errors.no && <div className="error">{errors.no}</div>}

          <label className="so-label">
            Denominación <span className="required">*</span>
          </label>
          <input
            name="denom"
            type="text"
            className="so-text-input"
            value={values.denom}
            onChange={handleChange}
          />
          {errors.denom && <div className="error">{errors.denom}</div>}
        </div>

        <div className="so-section">
          <div className="so-section-title">Datos generales</div>
          <div className="so-row">
            <label className="so-label">
              Fecha inicio <span className="required">*</span>
            </label>
            <input
              name="inicio"
              type="date"
              className="so-date-input"
              value={values.inicio}
              onChange={handleChange}
            />
            {errors.inicio && <div className="error">{errors.inicio}</div>}

            <label className="so-label">
              Fecha fin <span className="required">*</span>
            </label>
            <input
              name="fin"
              type="date"
              className="so-date-input"
              value={values.fin}
              onChange={handleChange}
            />
            {errors.fin && <div className="error">{errors.fin}</div>}
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
          <textarea
            name="responsables"
            className="so-textarea"
            value={values.responsables}
            onChange={handleChange}
          />
          {errors.responsables && (
            <div className="error">{errors.responsables}</div>
          )}
        </div>
      </div>

      <div className="so-footer">
        <button type="button" className="so-btn cancel">
          Cancelar
        </button>
        <button
          type="submit"
          className="so-btn apply"
          disabled={Object.keys(errors).length > 0}
        >
          Aplicar
        </button>
        <button
          type="submit"
          className="so-btn accept"
          disabled={Object.keys(errors).length > 0}
        >
          Aceptar ▼
        </button>
      </div>
    </form>
  );
}
