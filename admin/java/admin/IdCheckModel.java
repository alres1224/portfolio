package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class IdCheckModel {
	String check(String id) {
		String sign = "";
		try {
			String ck = "";
			
			
			Connection con = DbConfig.info();
			String sql = "select * from shopmember where aid=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, id);
			
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				ck = "yes";
			}
			if(ck == "yes") {
				sign = "no";
			}else {
				sign = "ok";
			}
			
			con.close();
			ps.close();
			rs.close();
			
		}catch(Exception e) {
			System.out.println("아이디 중복 검사 오류 : "+e);
		}
		return sign;
	}
}
