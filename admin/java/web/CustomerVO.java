package web;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerVO {
	int cidx;
	String cid, cname, cpass, cemail, cmobile, ctel, caddr, cemailok, csmsok, csleep;
	Date cindate, clogdate, coutdate;
	int clvl, cpoint;
	
	
	String saveId;
}
