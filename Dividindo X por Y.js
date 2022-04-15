let limit = parseInt(gets());

for (let i = 0; i < limit; i++) {
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    if (Y == 0) {
        console.log("divisao impossivel");
       }
       
       else {
        let divisao = parseFloat(X / Y).toFixed(1); // Digite aqui o calculo da divisao
        console.log(divisao);
    }
}


**************************************************************************
    
    resolução 2

using System;

class Desafio 
{
  static void Main(string[] args) 
  {
     int limit = Int32.Parse(Console.ReadLine());
      for (int i = 0; i < limit; i++)
      {
        string[] line = Console.ReadLine().Split(" ");
        double X = double.Parse(line[0]);
        double Y = double.Parse(line[1]);
        if (Y == 0)
        {
          Console.WriteLine("divisao impossivel");
        }
        else
        {
          double divisao = (double)X / Y;

          if(divisao < 0 && divisao > -0.5)
          {
            Console.WriteLine("-0.0");
          }
          else
          {
            Console.WriteLine(divisao.ToString("N1"));
          }
      }
    }
  }
}


//resolucao 3
let limit = parseInt(gets());

for (let i = 0; i < limit; i++) {
    
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1);
        console.log(divisao);
    }
}
