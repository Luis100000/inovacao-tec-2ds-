# 1. CRIA BASE DE DADOS (Dataset de Candidatos)
candidatos = [
    {"id": 1, "nome": "Ana Silva", "exp": 1, "python": True, "local": "Jardins", "facul": "Privada Top"},
    {"id": 2, "nome": "Bruno Souza", "exp": 2, "python": False, "local": "Itaquera", "facul": "Publica"},
    {"id": 3, "nome": "Carlos Viggo", "exp": 0, "python": True, "local": "Morumbi", "facul": "Privada Top"},
    {"id": 4, "nome": "Daniela Lima", "exp": 1, "python": False, "local": "Guarulhos", "facul": "Publica"},
    {"id": 5, "nome": "Enzo Arantes", "exp": 0, "python": True, "local": "Pinheiros", "facul": "Privada Top"},
    {"id": 6, "nome": "Fernanda O.", "exp": 3, "python": True, "local": "Osasco", "facul": "Privada"},
    {"id": 7, "nome": "Gabriel P.", "exp": 2, "python": False, "local": "Grajaú", "facul": "Autodidata"},
    {"id": 8, "nome": "Helena Roça", "exp": 1, "python": True, "local": "S. Bernardo", "facul": "Privada"},
    {"id": 9, "nome": "Igor Mendes", "exp": 0, "python": False, "local": "Bela Vista", "facul": "Privada Top"},
    {"id": 10, "nome": "Julia Costa", "exp": 2, "python": True, "local": "Diadema", "facul": "Privada"}
]

# 2. CRIA FUNÇÃO DE PONTUAÇÃO COM CONDIÇÕES DOS FILTROS 
def calcular_score(c):
    score = 0  # contador da pontuação 
    
    # Critério: Experiência profissional
    if c['exp'] >= 1:
        score += 20

    # Critério: Domínio da linguagem Python
    if c['python'] == True:
        score += 30

    # Critério: Nome da faculdade (ponto com viés ético)
    if c['facul'] == "Privada Top":
        score += 50

    return score

# 3. PROCESSAMENTO (calcula notas para todos)
ranking = []
for c in candidatos:
    # Atribui o score calculado ao dicionário do candidato
    c['total_score'] = calcular_score(c)
    ranking.append(c)
# 4. ORDENAÇÃO (do maior para o menor score)
ranking.sort(key=lambda x: x['total_score'], reverse=True)

# 5. SAÍDA (exibição dos 5 primeiros colocados)
print("--- TOP 5 CANDIDATOS SELECIONADOS ---")
for i in range(5):
    cand = ranking[i]
    print(f"{i+1}º {cand['nome']} - Score: {cand['total_score']} - Local: {cand['local']}")

