package reserve;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
	@Inject
	private SqlSessionTemplate sqlSession;
	
	PrintWriter pw;
	
	// 아이디 중복체크
	@PostMapping("idCheck.do")
	void idCheck(HttpServletRequest request, HttpServletResponse response) {
		String mid = request.getParameter("mid");
		
		String msg = "no";
		int result = sqlSession.selectOne("campDB.idCheck",mid);
		if(result == 0) {
			msg = "yes";
		}
		try {
			this.pw = response.getWriter();
			this.pw.write(msg);
			this.pw.flush();
			this.pw.close();
		}catch(Exception e) {
			System.out.println("중복체크 오류 발생 : " + e);
		}
	}
	
	// 회원가입
	@PostMapping("joinCamp.do")
	void joinCamp(@ModelAttribute("board") ReserveVO vo, Model m) {
		int result = sqlSession.insert("campDB.insertMember", vo);
		String msg = "";
		if(result > 0) {
			msg = "yes";
		}else {
			msg = "no";
		}
		m.addAttribute("msg", msg);
	}
	
	// 로그인
	@PostMapping("part1.do")
	void part1(@ModelAttribute("board") ReserveVO vo, HttpServletRequest request) {
		List<ReserveVO> result = new ArrayList<>();
		result = sqlSession.selectList("campDB.loginMember", vo);
		
		String mid = "";
		String mname = "";
		if(result.size() != 0) {
			for(ReserveVO datas : result) {
				mid = datas.getMid();
				mname = datas.getMname();
			}
			
			HttpSession session = request.getSession();
			session.setAttribute("mid", mid);
			session.setAttribute("mname", mname);
			
		}
	}
	
	// 로그아웃
	@RequestMapping("logout.do")
	void logout(HttpServletRequest request, Model m) {
		HttpSession session = request.getSession();
		session.invalidate();
		
		m.addAttribute("msg", "로그아웃 되셨습니다.");
		m.addAttribute("loca", "./part1.jsp");
	}
	
	// part2 예약 상태 조회용 메소드
	@RequestMapping("part2.do")
	void part2(@ModelAttribute("board") ReserveVO vo, Model m) {
		List<ReserveVO> result = sqlSession.selectList("campDB.reserved", vo);
		
		JSONArray array = new JSONArray();
		for(ReserveVO datas : result) {
			array.add(datas.getCcode().split("-")[2]);
		}
		m.addAttribute("array",array);
	}
	
	// 예약 확정자 정보 인서트 메소드
	@PostMapping("insert.do")
	void insert(@ModelAttribute("board") ReserveVO vo, Model m) {
		int result = sqlSession.insert("campDB.insertReser", vo);
		if(result > 0) {
			m.addAttribute("msg","예약이 완료되었습니다.");
		}else {
			m.addAttribute("msg", "오류가 발생했습니다.");
		}
	}
	
	// 예약 번호 조회 메소드
	@PostMapping("findReserve.do")
	void fineReserve(@ModelAttribute("board") ReserveVO vo, HttpServletResponse response) {
		List<ReserveVO> result = sqlSession.selectList("campDB.findRcode", vo);
		
		JSONArray array = new JSONArray();
		for(ReserveVO datas : result) {
			JSONArray in = new JSONArray();
			in.add(datas.getCcampname());
			in.add(datas.getCcamppart());
			in.add(String.valueOf(datas.getRindate()));
			in.add(String.valueOf(datas.getRoutdate()));
			in.add(datas.getCcode());
			in.add(datas.getRmoney());
			in.add(datas.getRname());
			in.add(datas.getRtel());
			in.add(datas.getRperson());
			in.add(datas.getRcode());
			in.add(datas.getRpay());
			in.add(datas.getRpayck());
			array.add(in);
		}
		
		response.setCharacterEncoding("UTF-8");
		try {
			PrintWriter pw = response.getWriter();
			pw.print(array);
		}catch(Exception e) {
			System.out.println(e);
		}
	}
	
	// 예약 취소 메소드
	@PostMapping("delete.do")
	void delete(@ModelAttribute("board") ReserveVO vo, Model m) {
		int result = sqlSession.delete("campDB.deleteReser", vo);
		if(result > 0) {
			m.addAttribute("msg","예약이 취소되었습니다.");
		}else {
			m.addAttribute("msg","오류가 발생했습니다.");
		}
		
	}
}
