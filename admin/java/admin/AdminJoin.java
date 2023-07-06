package admin;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AdminJoin extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw;
	
    public AdminJoin() {
        super();

    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		
		String aid = request.getParameter("aid");
		String[] apass = request.getParameterValues("apass");
		String aname = request.getParameter("aname");
		String aemail = request.getParameter("aemail");
		String[] atel = request.getParameterValues("atel");
		String adepart = request.getParameter("adepart");
		String aposition = request.getParameter("aposition");
		
		AdminJoinModel model = new AdminJoinModel();
		Boolean result = model.join(aid, apass[0], aname, aemail, atel, adepart, aposition);
		
		this.pw = response.getWriter();
		if(result) {
			this.pw.write("<script>alert('회원가입이 완료되었습니다.'); location.href='./index.jsp';</script>");
		}else {
			this.pw.write("<script>alert('회원가입에 실패했습니다.'); history.go(-1);</script>");
		}
	}

}
