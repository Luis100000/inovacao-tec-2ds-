import unittest
from calculadora import soma, subtrai, multiplica, divide

class TestCalculadora(unittest.TestCase):
    def test_soma(self):
        self.assertEqual(soma(1, 2), 3)
        self.assertEqual(soma(-1, 1), 0)
        self.assertEqual(soma(-1, -1), -2)
        print("\n[OK] Teste de soma executado e validado com sucesso.")

    def test_subtrai(self):
        self.assertEqual(subtrai(10, 5), 5)
        self.assertEqual(subtrai(-1, -1), 0)
        self.assertEqual(subtrai(0, 1), -1)
        print("\n[OK] Teste de subtração executado e validado com sucesso.")

    def test_multiplica(self):
        self.assertEqual(multiplica(3, 7), 21)
        self.assertEqual(multiplica(-1, 1), -1)
        self.assertEqual(multiplica(0, 10), 0)
        print("\n[OK] Teste de multiplicação executado e validado com sucesso.")

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        self.assertEqual(divide(-10, 2), -5)
        with self.assertRaises(ValueError):
            divide(10, 0)
        print("\n[OK] Teste de divisão (incluindo divisão por zero) executado e validado com sucesso.")

if __name__ == '__main__':
    unittest.main(verbosity=2)

