# Variáveis de exemplo (altere os valores para testar)
bateria_atual = 10
bola_em_jogo = True

# Avaliação das condições
if bateria_atual < 15 and bola_em_jogo == True:
    print("ALERTA MÁXIMO: Bateria baixa! Substitua a bola na próxima paralisação.")
elif bateria_atual < 15 and bola_em_jogo == False:
    print("Aviso: Bateria baixa. Aproveite a bola parada para trocá-la.")
else:
    print("Sistema Trionda operando normalmente. Bateria ok.")
