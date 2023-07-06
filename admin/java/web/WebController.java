package web;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class WebController {
	@Inject
	private SqlSessionTemplate sqlSession;
	
	@GetMapping("goods_search.do")
	void good_search() {
		
	}
	
	// 회원 가입 메소드
	@PostMapping("member_join_ok.do")
	void memberJoinOk(@ModelAttribute("board") CustomerVO vo, Model m) {
		List<RegSetVO> def = sqlSession.selectList("memberDB.selectOkData");
		
		for(RegSetVO datas : def) {
			vo.setClvl(datas.getRlvl());
			vo.setCpoint(datas.getRpoint());
		}
		
		int result = sqlSession.insert("joinCustomer",vo);
		
		if(result > 0) {
			m.addAttribute("msg","회원가입에 성공했습니다.");
		}else {
			m.addAttribute("msg","오류가 발생했습니다.");
		}
	}
	
	// 고객 로그인 메소드
	@PostMapping("login_member.do")
	void loginMember(@ModelAttribute("board") CustomerVO vo, Model m, HttpServletRequest request) {
		List<CustomerVO> result = sqlSession.selectList("memberDB.loginCustomer",vo);
		
		String cid = "";
		String cname = "";
		if(result.size() != 0) {
			JSONArray array = new JSONArray();
			for(CustomerVO data : result) {
				cid = data.getCid();
				cname = data.getCname();
				array.add(cid);
				array.add(cname);
				array.add(vo.getSaveId());
			}
			m.addAttribute("array",array);
			m.addAttribute("msg", "yes");
			
			HttpSession session = request.getSession();
			session.setAttribute("id", cid);
			session.setAttribute("name", cname);
			
			vo.setCid(cid);
			vo.setClogdate(null);
		}else {
			m.addAttribute("msg","no");
		}

	}
}
