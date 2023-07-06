package admin;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminVO {
	int aidx;
	String aid, apass, aname, aemail, atel, adepart, aposition, aconfirm;
	Date adate;
	
	// 홈페이지 가입환경 설정 컬럼명(shopregset)
	int ridx, rpoint, rlvl;
	String rpagename, remail, rpointuse;
	
	// 홈페이지 기본환경 설정 컬럼명(shopdefset)
	int bidx;
	String bcorpname, bcorpnum, bchairname, bchairtel, btelbiznum, baddbiznum, bpostnum, baddr, bmgrname, bmgremail;
	
	// 결제 기본환경 설정 컬럼명(shoppayset)
	int pidx, pminpoint, pmaxpoint, pdelprice;
	String pbankname, pbanknum, pcredituse, pmobileuse, pgiftuse, pcashcheck, pdelname, pdeldate;
	
	// 고객 정보 컬럼명(shopcustomer)
	int cidx, clvl, cpoint;
	String cid, cname, cpass, cemail, cmobile, ctel, caddr, cemailok, csmsok, csleep;
	Date cindate, clogdate, coutdate;
}
