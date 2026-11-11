import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  // Função para adicionar uma nova tarefa à lista (3.1: prioridade adicionada)
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;

    const item = {
      id: Date.now().toString(),
      texto: novaTarefa,
      concluida: false,
      prioridade: 'alta', // Define 'alta' para teste ou 'normal'
    };

    setTarefas([...tarefas, item]);
    setNovaTarefa('');
  };

  // Função para marcar/desmarcar tarefa como concluída
  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };

  // --- INÍCIO DO INCREMENTO (2.1): Estado e Lógica do Filtro ---
  const [filtro, setFiltro] = useState('todas'); // Opções: 'todas', 'pendentes', 'concluidas'

  // Função para filtrar as tarefas dinamicamente antes de exibir na FlatList
  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === 'pendentes') return !t.concluida;
    if (filtro === 'concluidas') return t.concluida;
    return true; // Se for 'todas'
  });
  // --- FIM DO INCREMENTO ---

  // Função para remover uma tarefa da lista
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>

      {/* --- INÍCIO DO INCREMENTO (2.3): Botões de Filtro --- */}
      <View style={styles.filtroContainer}>
        <TouchableOpacity
          style={[styles.botaoFiltro, filtro === 'todas' && styles.filtroAtivo]}
          onPress={() => setFiltro('todas')}>
          <Text style={[styles.textoFiltro, filtro === 'todas' && styles.textoFiltroAtivo]}>Todas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoFiltro, filtro === 'pendentes' && styles.filtroAtivo]}
          onPress={() => setFiltro('pendentes')}>
          <Text style={[styles.textoFiltro, filtro === 'pendentes' && styles.textoFiltroAtivo]}>Pendentes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoFiltro, filtro === 'concluidas' && styles.filtroAtivo]}
          onPress={() => setFiltro('concluidas')}>
          <Text style={[styles.textoFiltro, filtro === 'concluidas' && styles.textoFiltroAtivo]}>Concluídas</Text>
        </TouchableOpacity>
      </View>
      {/* --- FIM DO INCREMENTO --- */}

      {/* Lista de tarefas (2.2 e 3.2: borda dinâmica aplicada) */}
      <FlatList
        data={tarefasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[
            styles.cardTarefa,
            { borderLeftColor: item.prioridade === 'alta' ? '#EF4444' : '#2563EB' }
          ]}>
            <TouchableOpacity
              style={styles.itemTextoContainer}
              onPress={() => alternarConclusao(item.id)}
            >
              <Text
                style={[
                  styles.itemTexto,
                  item.concluida && styles.itemTextoConcluido,
                ]}
              >
                {item.texto}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => removerTarefa(item.id)}>
              <Text style={styles.textoRemover}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  botaoAdicionar: {
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardTarefa: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#eee',
    borderLeftWidth: 5,
  },
  itemTextoContainer: {
    flex: 1,
  },
  itemTexto: {
    fontSize: 16,
    color: '#333',
  },
  itemTextoConcluido: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  // --- INÍCIO DO INCREMENTO (2.4): Estilos do Filtro ---
  filtroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  botaoFiltro: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#E2E8F0',
  },
  filtroAtivo: {
    backgroundColor: '#2563EB',
  },
  textoFiltro: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#64748B',
  },
  textoFiltroAtivo: {
    color: '#FFFFFF',
  },
  // --- FIM DO INCREMENTO ---
  textoRemover: {
    fontSize: 18,
    paddingLeft: 10,
  },
});
