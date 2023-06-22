package reserve;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReserveVO {
	String ccampname, ccamppart, ccode;
	int ridx, rmoney, midx;
	String rcode, rname, rtel, rperson, rpayname, rpay, rpayck;
	String mid, mpass, mname, mtel, memail, msms, mad;
	Date rindate, routdate;
}
