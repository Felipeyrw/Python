#exercicio 1
nome = input("Qual o seu nome?\n")
print(f"Olá, {nome}\n")

#exercicio 2

A1 = int(input("Qual a nota da A1?\n"))
A2 = int(input("Qual a nota da A2?\n"))

media = (A1+A2)/2
print(f"\nA média é {media}\n")

#exercicio 3

preco = float(input("Qual o preço do produto?\n"))
desconto = float(input("Qual o percentual de desconto a ser concedido?\n"))

produto_com_desconto = preco-((preco*desconto)/100)

print(f"\nO produto com o desconto é {produto_com_desconto}")