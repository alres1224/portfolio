package admin;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class AdminJoinModel {
	Boolean join(String id, String pass, String name, String email, String[] tel, String depart, String position) {
		Boolean result = false;
		try {
			
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update(pass.getBytes("utf-8"));
			byte[] code = md.digest();
			StringBuilder sb = new StringBuilder();
			 for(byte b : code){
			 	String repass = String.format("%02x",b);
			 	sb.append(repass);
			 }
			 
			Connection con = DbConfig.info();
			String sql = "insert into shopmember values('0',?,?,?,?,?,?,?,default,default)";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, id);
			ps.setString(2, sb.toString());
			ps.setString(3, name);
			ps.setString(4, email);
			ps.setString(5, tel[0]+tel[1]+tel[2]);
			ps.setString(6, depart);
			ps.setString(7, position);
			
			int num = ps.executeUpdate();
			if(num > 0) {
				result = true;
			}
			
		}catch(Exception e) {
			System.out.println("회원가입오류 : "+e);
		}
		return result;
	}
}
