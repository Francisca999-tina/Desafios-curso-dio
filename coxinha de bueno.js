using System;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {

            String[] line = Console.ReadLine().Split(" ");
            float A = Int32.Parse(line[0]);
            float B = Int32.Parse(line[1]);
            float total = (A / B);
            if (A % B != 0)
                Console.WriteLine(Math.Round(total, 2).ToString("0.00"));
            else
                Console.WriteLine(total.ToString("0.00"));
        }
    }
}


//resolução 2
console.log(gets().split(" ").reduce((acc,cur) => acc/cur).toFixed(2))

//resolução 3
let line = gets().split(" ");

let h = parseFloat(line[0]);

let p = parseFloat(line[1]);

console.log((h/p).toFixed(2));
