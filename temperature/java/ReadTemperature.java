package temperature;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * 
 * @author alejandro
 * Lee la temperatura del sensor ds18b20 en la raspberry
 */
public class ReadTemperature {

	public static void main(String[] args) {
		
		
		 
		String tempFile="/sys/bus/w1/devices/28-000005e333d8/w1_slave";
		try {
			String[] command1 = {"sh","-c","sudo modprobe w1-gpio"};
			String[] command2 = {"sh","-c","sudo modprobe w1-therm"};
			Runtime.getRuntime().exec(command1);
			Runtime.getRuntime().exec(command2);
			
			String content=leerFichero(tempFile);
			System.out.println("contenido: \n "+content);
			String[] lineas=content.split("\\n");
			String segundaLinea=lineas[1];
			String[] chunks=segundaLinea.split(" ");
			String temp=chunks[9].substring(2, chunks[9].length());
			float temp1=Float.parseFloat(temp);
			float temfinal=temp1/1000;
			System.out.println("temperatura: "+ temfinal +" ºC");
		} catch (FileNotFoundException e) {
			System.out.println("No se ha encontrado el fichero de la temperatura");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("Error al leer el fichero");
			e.printStackTrace();
		}		
	}
	
	private static String leerFichero(String url) throws IOException{
		
		return new String(Files.readAllBytes(Paths.get(url)));
	}

}
