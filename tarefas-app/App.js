import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

export default function App() {
  // Estados para armazenar o texto da nova tarefa e a lista de tarefas
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([
    { id: '1', texto: 'Criar wireframe no Figma', concluida: false },
    { id: '2', texto: 'Modelar banco de dados', concluida: false },
  ]);

  // Função para adicionar uma nova tarefa à lista
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;

    const item = {
      id: Date.now().toString(),
      texto: novaTarefa,
      concluida: false,
    };

    setTarefas([...tarefas, item]);
    setNovaTarefa('');
  };

  // Função para alternar o status de concluído da tarefa
  const alternarConcluida = (id) => {
    const tarefasAtualizadas = tarefas.map((t) => {
      if (t.id === id) {
        return { ...t, concluida: !t.concluida };
      }
      return t;
    });
    setTarefas(tarefasAtualizadas);
  };

  // Função para remover uma tarefa da lista
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>🚀 Gestor de Tarefas Escolar</Text>
      <Text style={styles.subtitulo}>
        Acompanhe suas entregas de software
      </Text>

      {/* Contador de tarefas cadastradas */}
<Text style={styles.contador}>
  📋 Total de tarefas: {tarefas.length}
</Text>


      {/* Área de entrada de dados */}
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

      {/* Lista de tarefas */}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardTarefa}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => alternarConcluida(item.id)}
            >
              <Text
                style={[
                  styles.textoTarefa,
                  item.concluida && styles.textoConcluido,
                ]}
              >
                {item.concluida ? '✅ ' : '⏳ '}
                {item.texto}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => removerTarefa(item.id)}>
              <Text style={styles.textoRemover}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

// Estilização do Aplicativo (CSS-in-JS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fffff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    fontSize: 16,
  },
  botaoAdicionar: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    marginLeft: 10,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardTarefa: {
    backgroundColor: '#B0C4DE',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB',
  },
  textoTarefa: {
    fontSize: 16,
    color: '#334155',
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#94A3B8',
  },
  textoRemover: {
    fontSize: 18,
    paddingLeft: 10,
  },contador: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '#2563EB', // você pode alterar para a cor da sua preferência
  textAlign: 'center',
  marginBottom: 15,
},

});
