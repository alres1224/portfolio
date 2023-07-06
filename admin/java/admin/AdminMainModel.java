package admin;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class AdminMainModel {
	private String name;
	String userName() {
		return this.name;
	}
	String loginProcess(String id, String pass) {
		String result = "";
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
			String sql = "select aname, aconfirm from shopmember where aid=? and apass=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, id);
			ps.setString(2, sb.toString());
			
			ResultSet rs = ps.executeQuery();
			
			String sign = "";
			while(rs.next()) {
				sign = rs.getString("aconfirm");
				this.name = rs.getString("aname");
			}
			if(sign.equals("Y")) {
				result = "ok";
			}else if(sign.equals("N")) {
				result = "no";
			}else {
				result = "error";
			}
			con.close();
			ps.close();
			rs.close();
			
		}catch(Exception e) {
			System.out.println("로그인 오류 발생 : "+e);
		}
		return result;
	}
}
