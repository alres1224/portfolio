package admin;

import java.sql.Connection;
import java.sql.DriverManager;

public class DbConfig {
	static Connection info() throws Exception {
		String dbDriver = "com.mysql.cj.jdbc.Driver";
		String dbURL = "jdbc:mysql://umj7-020.cafe24.com/casabarragan";
		String dbUser = "casabarragan";
		String dbPass = "dydfla1224!";
		
		Class.forName(dbDriver);
		Connection con = DriverManager.getConnection(dbURL,dbUser,dbPass);
		return con;
	}
}
