import React, { useState, type FormEvent } from 'react';

interface RoteiroFormProps {
  initialData?: {
    idRoteiro?: number;
    usuarioId: number;
    cidadePartida: string;
    cidadeDestino: string;
    dataIda: string;      // ISO string para facilitar
    dataVolta: string;
    distancia: number;
    tempoEstimado: string;
    orcamento: number;
  };
  onSubmit: (data: any) => void;
}

const RoteiroForm: React.FC<RoteiroFormProps> = ({ initialData, onSubmit }) => {
  const [cidadePartida, setCidadePartida] = useState(initialData?.cidadePartida || '');
  const [cidadeDestino, setCidadeDestino] = useState(initialData?.cidadeDestino || '');
  const [dataIda, setDataIda] = useState(initialData?.dataIda || '');
  const [dataVolta, setDataVolta] = useState(initialData?.dataVolta || '');
  const [distancia, setDistancia] = useState(initialData?.distancia || 0);
  const [tempoEstimado, setTempoEstimado] = useState(initialData?.tempoEstimado || '');
  const [orcamento, setOrcamento] = useState(initialData?.orcamento || 0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const roteiroData = {
      idRoteiro: initialData?.idRoteiro,
      usuarioId: initialData?.usuarioId || 0, // Se não tiver, adapte pra pegar do contexto ou auth
      cidadePartida,
      cidadeDestino,
      dataIda,
      dataVolta,
      distancia,
      tempoEstimado,
      orcamento,
    };

    onSubmit(roteiroData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Cidade de Partida:</label>
        <input
          type="text"
          value={cidadePartida}
          onChange={(e) => setCidadePartida(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Cidade de Destino:</label>
        <input
          type="text"
          value={cidadeDestino}
          onChange={(e) => setCidadeDestino(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Data de Ida:</label>
        <input
          type="date"
          value={dataIda}
          onChange={(e) => setDataIda(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Data de Volta:</label>
        <input
          type="date"
          value={dataVolta}
          onChange={(e) => setDataVolta(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Distância (km):</label>
        <input
          type="number"
          value={distancia}
          onChange={(e) => setDistancia(Number(e.target.value))}
          min={0}
          required
        />
      </div>

      <div>
        <label>Tempo Estimado:</label>
        <input
          type="text"
          value={tempoEstimado}
          onChange={(e) => setTempoEstimado(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Orçamento (R$):</label>
        <input
          type="number"
          value={orcamento}
          onChange={(e) => setOrcamento(Number(e.target.value))}
          min={0}
          step="0.01"
          required
        />
      </div>

      <button type="submit">{initialData ? 'Atualizar' : 'Cadastrar'}</button>
    </form>
  );
};

export default RoteiroForm;
