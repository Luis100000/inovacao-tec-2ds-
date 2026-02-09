# Passo 1: Solicitar os 4 números via input
# O input retorna uma string, então é necessário converter para float.
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
num3 = float(input("Digite o terceiro número: "))
num4 = float(input("Digite o quarto número: "))

# Passo 2: Calcular a média
media = (num1 + num2 + num3 + num4) / 4

# Passo 3: Exibir o resultado com duas casas decimais
print(f"A média dos números é: {media:.2f}")
