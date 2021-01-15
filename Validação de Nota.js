

###########################################################################################################

using System;

class Desafio {
  static void Main() {
    double doCalc = 1;
    while (doCalc == 1) 
    {
      double numbersValids = 0;
      float total = 0;
      while (numbersValids < 2) 
      {
        float grade = float.Parse(Console.ReadLine());
        if (grade >= 0 && grade <= 10)
        {
          numbersValids ++;
          total += grade;
        } else {
          Console.WriteLine("nota invalida");
        }
      }
      Console.WriteLine($"media = {(total / 2).ToString("n2")}");
      do {
        Console.WriteLine("novo calculo (1-sim 2-nao)");
        doCalc = double.Parse(Console.ReadLine());
      } while (doCalc !=  1 && doCalc != 2);
    }
  }
}
