import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class AnaliseDeNumeros {
    public static void main(String[] args) throws IOException {

      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      StringTokenizer st;
      
      int numeroEntrada, contNumPar = 0, contNumImpar = 0, contNumPostitivo = 0, contNumNegativo = 0;
      
      for (int  i = 0; i < 5; i++) {
        
        st = new StringTokenizer(br.readLine());
        numeroEntrada = Integer.parseInt(st.nextToken());
        
        if (numeroEntrada % 2 == 0) contNumPar++;  // valida numeros pares
        if (Math.abs(numeroEntrada % 2) == 1) contNumImpar++; // valida numeros impares
        if (numeroEntrada > 0) contNumPostitivo++; // valida numeros positivos
        if (numeroEntrada < 0) contNumNegativo++; // valida numeros negativos
        
      }
  
      System.out.println(
        contNumPar + " valor(es) par(es)" + "\n" +
        contNumImpar + " valor(es) impar(es)" + "\n" +
        contNumPostitivo + " valor(es) positivo(s)" + "\n" +
        contNumNegativo + " valor(es) negativo(s)"
      );
      
      br.close();
  }
}
