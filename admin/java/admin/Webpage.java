package admin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

@Controller
public class Webpage {
	private int pageSize = 10;
	private int result = 0;

	@Inject
	private SqlSessionTemplate sqlSession;
	
	PrintWriter pw;
	
	// 타이틀 정보 가져오는 메소드
	@GetMapping("title.do")
	void title(HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		String title = sqlSession.selectOne("memberDB.title");
		
		try {
		this.pw = response.getWriter();
			pw.print(title);
			pw.flush();
			pw.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	// 로그인 메소드
	@PostMapping("admin/adminmain.do")
	void adminMain(HttpServletRequest request, Model m) {
		String aid = request.getParameter("aid");
		String apass = request.getParameter("apass");
		
		AdminMainModel model = new AdminMainModel();
		String result = model.loginProcess(aid, apass);
		String aname = model.userName();
		
		String msg = "";
		if(result.equals("ok")) {
			HttpSession session = request.getSession();
			session.setAttribute("userid", aid);
			session.setAttribute("username", aname);
			m.addAttribute("userid",aid);
			m.addAttribute("username",aname);
		}else if(result.equals("no")){
			msg = "관리자의 승인이 필요한 계정입니다.";
		}else {
			msg = "로그인 정보를 확인해주세요.";
		}
		m.addAttribute("msg", msg);
	}
	
	// 아이디 중복 확인 메소드
	@PostMapping("admin/idCheck.do")
	void idCheck(HttpServletRequest request, HttpServletResponse response) {
		String aid = request.getParameter("aid");		
		
		IdCheckModel model = new IdCheckModel();
		String sign = model.check(aid);
		
		try {
			this.pw = response.getWriter();
			this.pw.write(sign);
		}catch(Exception e) {
			System.out.println(e);
		}
	}
	
	// 회원가입 메소드
	@PostMapping("admin/adminjoin.do")
	void adminJoin(HttpServletRequest request) {
		String aid = request.getParameter("aid");
		String[] apass = request.getParameterValues("apass");
		String aname = request.getParameter("aname");
		String aemail = request.getParameter("aemail");
		String[] atel = request.getParameterValues("atel");
		String adepart = request.getParameter("adepart");
		String aposition = request.getParameter("aposition");
		
		AdminJoinModel model = new AdminJoinModel();
		Boolean result = model.join(aid, apass[0], aname, aemail, atel, adepart, aposition);
		
		if(result) {
			this.pw.write("<script>alert('회원가입이 완료되었습니다.'); location.href='./index.jsp';</script>");
		}else {
			this.pw.write("<script>alert('회원가입에 실패했습니다.'); history.go(-1);</script>");
		}
	}
	
	// 관리자 정보 수정 메소드
	@PostMapping("admin/admin_modify.do")
	void adminModify() {
		
	}
	
	// 관리자 로그아웃 메소드
	@PostMapping("admin/admin_logout.do")
	void adminLogout(HttpServletRequest request) {
		HttpSession session = request.getSession();
		session.invalidate();
	}
	
	// 고객 로그아웃 메소드
		@PostMapping("admin/customer_logout.do")
		void customerLogout(HttpServletRequest request,HttpServletResponse response) {
			HttpSession session = request.getSession();
			session.invalidate();
		}
	
	// 데이터베이스에서 관리자 정보 불러오는 메소드
	@PostMapping("admin/api.do")
	void api(HttpServletRequest request, HttpServletResponse response,  Model m) {
		response.setCharacterEncoding("UTF-8");
		String result = "";
		String key = request.getParameter("adminajaxok").intern();
		try {
			if(key == "passok") {
			
				List<AdminVO> datas = sqlSession.selectList("memberDB.selectAllRows");
				
				JSONArray array = new JSONArray();
		        for (AdminVO test : datas) {
		            Map<String, Object> dataMap = new LinkedHashMap<String, Object>();
		            dataMap.put("aidx", test.aidx);
		            dataMap.put("aname", test.aname);
		            dataMap.put("aid", test.aid);
		            dataMap.put("atel", test.atel);
		            dataMap.put("aemail", test.aemail);
		            dataMap.put("adepart", test.adepart);
		            dataMap.put("aposition", test.aposition);
		            dataMap.put("adate",test.adate.toString());
		            dataMap.put("aconfirm", test.aconfirm);
		            
		            JSONObject data = new JSONObject(dataMap);
		            array.add(data);
		        }
				
				result = array.toString();
			}
			this.pw = response.getWriter();
			this.pw.print(result);
			this.pw.flush();
			this.pw.close();
		}catch(Exception e) {
			System.out.println("관리자 정보 로드 오류 : " + e);
		}
	}
	
	// 관리자 자격 승인 메소드
	@PostMapping("admin/adminAssign.do")
	void adminAssign(HttpServletRequest request, HttpServletResponse response) throws Exception {		
		String msg = "";
		response.setCharacterEncoding("UTF-8");
		String aid = request.getParameter("aid");
		this.pw = response.getWriter();
		try {
			int result = sqlSession.update("memberDB.adminOk", aid);
			if(result > 0) {
				msg = "ok";
			}else {
				msg = "no";
			}
			this.pw.print(msg);
			this.pw.flush();
			this.pw.close();
		}catch(Exception e) {
			System.out.println("관리자 자격 변경 메세지 출력 오류 : "+ e);
		}
	}
	
	@PostMapping("admin/doSet.do")
	void doSet(@ModelAttribute("board") AdminVO vo, Model m) {
		int result0 = sqlSession.insert("memberDB.updateRegset", vo);
		int result1 = sqlSession.insert("memberDB.updateDefset", vo);
		int result2= sqlSession.insert("memberDB.updatePayset", vo);
		
		String msg = "";
		if(result0 <= 0) {
			msg = "홈페이지 가입환경 설정 업데이트 오류";
		}else if(result1 <= 0) {
			msg = "홈페이지 기본환경 설정 업데이트 오류";
		}else if(result2 <= 0) {
			msg = "결제 기본 환경 설정 업데이트 오류";
		}
		m.addAttribute("msg",msg);
	}
	
	@PostMapping("admin/shop_form.do")
	void shop_form(@ModelAttribute("board") AdminVO vo, Model m) {
		List<AdminVO> reg = sqlSession.selectList("memberDB.selectRegset", vo);
		List<AdminVO> def = sqlSession.selectList("memberDB.selectDefset", vo);
		List<AdminVO> pay = sqlSession.selectList("memberDB.selectPayset", vo);
		
		// shopregset 테이블 정보 JSON 화
		JSONObject regJ = new JSONObject();
		Map<String, Object> regMap = new LinkedHashMap<String, Object>();
		for(AdminVO datas : reg) {
			regMap.put("rpagename",datas.rpagename);
			regMap.put("remail",datas.remail);
			regMap.put("rpointuse",datas.rpointuse);
			regMap.put("rpoint",datas.rpoint);
			regMap.put("rlvl",datas.rlvl);
		}
		regJ.put("reg", regMap);
		// shopdefset 테이블 정보 JSON 화
		JSONObject defJ = new JSONObject();
		Map<String, Object> defMap = new LinkedHashMap<String, Object>();
		for(AdminVO datas : def) {
			JSONObject key = new JSONObject();
			defMap.put("bcorpname",datas.bcorpname);
			defMap.put("bcorpnum",datas.bcorpnum);
			defMap.put("bchairname",datas.bchairname);
			defMap.put("bchairtel",datas.bchairtel);
			defMap.put("btelbiznum",datas.btelbiznum);
			defMap.put("baddbiznum",datas.baddbiznum);
			defMap.put("bpostnum",datas.bpostnum);
			defMap.put("baddr",datas.baddr);
			defMap.put("bmgrname",datas.bmgrname);
			defMap.put("bmgremail",datas.bmgremail);
		}
		defJ.put("def", defMap);
		
		// shoppayset 테이블 정보 JSON 화
		JSONObject payJ = new JSONObject();
		Map<String, Object> payMap = new LinkedHashMap<String, Object>();
		for(AdminVO datas : pay) {
			payMap.put("pbankname",datas.pbankname);
			payMap.put("pbanknum",datas.pbanknum);
			payMap.put("pcredituse",datas.pcredituse);
			payMap.put("pmobileuse",datas.pmobileuse);
			payMap.put("pgiftuse",datas.pgiftuse);
			payMap.put("pminpoint",datas.pminpoint);
			payMap.put("pmaxpoint",datas.pmaxpoint);
			payMap.put("pcashcheck",datas.pcashcheck);
			payMap.put("pdelname",datas.pdelname);
			payMap.put("pdelprice",datas.pdelprice);
			payMap.put("pdeldate",datas.pdeldate);
		}
		payJ.put("pay", payMap);
		
		m.addAttribute("reg", regJ);
		m.addAttribute("def", defJ);
		m.addAttribute("pay", payJ);
	}
	
	// 전체 회원 수 불러오는 메소드
	@RequestMapping("admin/member_list.do")
	void member_list(Model m) {
		this.result = sqlSession.selectOne("memberDB.customerNum");
		m.addAttribute("result", this.result);
		m.addAttribute("pageSize", this.pageSize);
	}
	
	// 회원 페이지 별 출력 메소드
	@PostMapping("admin/member_api.do")
	void member_api(HttpServletRequest request, HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		int page = Integer.valueOf(request.getParameter("pageNo"));
		int start = (page - 1) * this.pageSize;
		
		Map<String, Integer> param = new HashMap<>();
		param.put("start", start);
		param.put("pageSize", this.pageSize);
		List<AdminVO> result =  sqlSession.selectList("memberDB.selectCustomer", param);

		JSONArray customer = new JSONArray();
		for(AdminVO datas : result) {
			Map<String,Object> map = new LinkedHashMap<String, Object>();
			map.put("cidx", datas.cidx);
			map.put("cid", datas.cid);
			map.put("cname", datas.cname);
			map.put("cmobile", datas.cmobile);
			map.put("ctel", datas.ctel);
			map.put("clvl", datas.clvl);
			map.put("cpoint", datas.cpoint);
			map.put("clogdate", String.valueOf(datas.clogdate));
			map.put("cindate", String.valueOf(datas.cindate));
			map.put("cemailok", datas.cemailok);
			map.put("csmsok", datas.csmsok);
			map.put("div", "div");
			
			JSONObject obj = new JSONObject(map);
			customer.add(obj);
		}
		
		try {
			this.pw = response.getWriter();
			//this.pw.print(customer.toJSONString());
			this.pw.print(customer);
			this.pw.flush();
			this.pw.close();
		}catch(Exception e) {
			System.out.println("JSON 전송 오류 : " + e);
		}
	}
	
	// 휴면 회원 전환 메소드
	@PostMapping("admin/member_stop.do")
	void member_stop(HttpServletResponse response, @ModelAttribute("board") AdminVO vo) {
		String cid = vo.getCid();
		int result = sqlSession.update("memberDB.updateCsleep", vo);
		
		try {
			this.pw = response.getWriter();
			this.pw.print(result);
		}catch(Exception e) {
			System.out.println("휴면회원전환 결과 전달 오류 : "+ e);
		}
	}
	
	// 회원 검색 메소드
	@PostMapping("admin/member_search.do")
	void member_search(HttpServletRequest request, HttpServletResponse response) {
		try{
			request.setCharacterEncoding("UTF-8");
			response.setCharacterEncoding("UTF-8");
			String param = request.getParameter("param");
			String column = param.split(",")[0];
			String cdata = param.split(",")[1];
			
			Map<String, String> sqlParam = new HashMap<>();
			sqlParam.put("column", column);
			sqlParam.put("cdata", cdata);
			List<AdminVO> result = sqlSession.selectList("memberDB.searchCustomer", sqlParam);
			
			this.result = result.size();
			
			JSONArray searched = new JSONArray();
			for(AdminVO datas : result) {
				Map<String, Object> map = new LinkedHashMap<String, Object>();
				map.put("cidx", datas.cidx);
				map.put("cid", datas.cid);
				map.put("cname", datas.cname);
				map.put("cmobile", datas.cmobile);
				map.put("ctel", datas.ctel);
				map.put("clvl", datas.clvl);
				map.put("cpoint", datas.cpoint);
				map.put("clogdate", String.valueOf(datas.clogdate));
				map.put("cindate", String.valueOf(datas.cindate));
				map.put("cemailok", datas.cemailok);
				map.put("csmsok", datas.csmsok);
				map.put("div", "div");
				
				JSONObject obj = new JSONObject(map);
				searched.add(obj);
			}
			this.pw = response.getWriter();
			this.pw.print(searched);
			
		}catch(Exception e) {
			System.out.println("검색 결과 전달 오류 : "+e);
		}
	}
	
	// 선택 회원 삭제 메소드
	@PostMapping("admin/member_delete.do")
	void member_delete(@ModelAttribute("board") AdminVO vo, HttpServletRequest request, Model m) {
		try {
			request.setCharacterEncoding("UTF-8");
			String[] ids = request.getParameter("delId").split(",");
			int result = 0;
			int count = 0;
			for(int i = 0; i < ids.length; i++) {
				String id = ids[i];
				result = sqlSession.delete("memberDB.delMembers", id);
				if(result > 0) {
					count++;
				}
			}
			if(count == ids.length) {
				m.addAttribute("delresult", "모든 결과가 정상 반영되었습니다.");
			}else if(count > 0 && count < ids.length) {
				m.addAttribute("delresult", "일부 작업 처리에 실패했습니다.");
			}else {
				m.addAttribute("delresult", "오류가 발생했습니다.");
			}
		}catch(Exception e) {
			System.out.println("회원 삭제 오류 : " + e);
		}
	}
	
	// 회원 정보 수정 팝업창 정보 전달 메소드
	@RequestMapping("admin/member_modify.do")
	void member_modify(HttpServletRequest request, Model m) {
		try {
			request.setCharacterEncoding("UTF-8");
			
			String id = request.getParameter("cid");
			
			List<AdminVO> result = sqlSession.selectList("memberDB.popup", id);
			
			JSONArray popup = new JSONArray();
			for(AdminVO datas : result) {
				popup.add(datas.getCid());
				popup.add(datas.getCname());
				popup.add(String.valueOf(datas.getClvl()));
				popup.add(String.valueOf(datas.getCpoint()));
				if(datas.getCoutdate()==null) {
					popup.add("");
				}else {
					popup.add(String.valueOf(datas.getCoutdate()));
				}
			}
			
			m.addAttribute("array", popup);
		}catch(Exception e) {
			System.out.println("팝업창 데이터 통신 오류 : " + e);
		}
	}
	
	// 회원 정보 수정 팝업창 정보 업데이트 및 결과 전달 메소드
	@PostMapping("admin/mod_result.do")
	void popup(@ModelAttribute("board") AdminVO vo, Model m) {
		int result = sqlSession.update("memberDB.popupUpdate", vo);
		
		m.addAttribute("result", result);
	}
	
	
	// CKEDITOR 이미지 업로드 가능하게 하는 메소드
	@RequestMapping("/admin/imageupload.do")
	public void imgupload(HttpServletRequest req, HttpServletResponse res, MultipartFile upload) {
		OutputStream out = null;
		PrintWriter pw = null;
		res.setCharacterEncoding("utf-8");
	    res.setContentType("text/html; charset=utf-8");
	    try {
	    	long date = System.currentTimeMillis();
	        String fileName = date + upload.getOriginalFilename(); 
	        byte[] bytes = upload.getBytes();
	       
	        
	        String uploadpath = req.getSession().getServletContext().getRealPath("/product_img/");
	        String imgsave = uploadpath + fileName;
	        out = new FileOutputStream(new File(imgsave));
	        out.write(bytes);
	        
	        pw = res.getWriter();
	        String fileurl = "../product_img/" + fileName;
	        pw.println("{\"filename\":\"" + fileName + "\", \"uploaded\":1,\"url\":\"" + fileurl + "\"}");
	        pw.flush();
	        
	    }
	    catch(Exception e) {
	    	e.printStackTrace();
	    }
	}
	
	// 카피라이트 정보 출력용
	@GetMapping("footerAPI.do")
	void footerAPI(HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Credentials", "true");
		List<AdminVO> result = sqlSession.selectList("memberDB.footerInfo");
		List<AdminVO> result2 = sqlSession.selectList("memberDB.footerInfo2");

		
		JSONObject array = new JSONObject();
		for(AdminVO data: result) {
			array.put("bcorpname", data.getBcorpname());
			array.put("bcorpnum",data.getBcorpnum());
			array.put("btelbiznum", data.getBtelbiznum());
			array.put("baddr", data.getBpostnum() + ")" + data.getBaddr());
			array.put("bmgrname", data.getBmgrname());
			array.put("bmgremail", data.getBmgremail());
			array.put("bchairtel", data.getBchairtel());
			array.put("bchairname", data.getBchairname());
		}
		for(AdminVO data : result2) {
			array.put("pbankname", data.getPbankname());
			array.put("pbanknum", data.getPbanknum());
		}
		try {
			PrintWriter pw = response.getWriter();
			pw.print(array);
			pw.flush();
			pw.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
}
