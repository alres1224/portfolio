package adminNotice;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Webpage {
	@Inject
	private SqlSessionTemplate sqlSession;
	
	
	// 공지사항 관리 페이지 페이징 용 인스턴스
	private int perPage = 10;
	private int no = 0;
	
	// 공지사항 관리 페이지 최초 로딩 메소드
	@PostMapping("admin/notice_list.do")
	void notice_list(HttpServletRequest request, Model m) {
		int eas = sqlSession.selectOne("memberDB.noticeSelectNum");
		int page = (int)Math.ceil((double)eas / this.perPage);
		Integer start = no * perPage;
		
		List<NoticeVO> result = new ArrayList<NoticeVO>();
		result = sqlSession.selectList("memberDB.noticeSelect",start);
		
		JSONArray array = new JSONArray();
		for(NoticeVO datas : result) {
			Map<String, Object> map = new LinkedHashMap<String, Object>();
			map.put("nidx", datas.getNidx());
			map.put("ntop", datas.getNtop());
			map.put("nsubject", datas.getNsubject());
			map.put("nwriter",datas.getNwriter());
			map.put("ndate",String.valueOf(datas.getNdate()));
			map.put("nclick",datas.getNclick());
			
			JSONObject obj = new JSONObject(map);
			array.add(obj);
		}
		
		m.addAttribute("array",array);
		m.addAttribute("page",page);
	}
	
	// 공지사항 관리 페이지 페이지 버튼 핸들링 메소드
	@PostMapping("admin/notice_page.do")
	void notice_page(HttpServletRequest request, HttpServletResponse response) {
		try {
			request.setCharacterEncoding("UTF-8");
			response.setCharacterEncoding("UTF-8");
			
			this.no = Integer.parseInt(request.getParameter("pageno"));
			Integer start = no * perPage;
			
			List<NoticeVO> result = sqlSession.selectList("memberDB.noticeSelect",start);
			
			JSONArray array = new JSONArray();
			for(NoticeVO datas : result) {
				Map<String, Object> map = new LinkedHashMap<String, Object>();
				map.put("nidx", datas.getNidx());
				map.put("ntop", datas.getNtop());
				map.put("nsubject", datas.getNsubject());
				map.put("nwriter",datas.getNwriter());
				map.put("ndate",String.valueOf(datas.getNdate()));
				map.put("nclick",datas.getNclick());
				
				JSONObject obj = new JSONObject(map);
				array.add(obj);
			}
			
			PrintWriter pw = response.getWriter();
			pw.print(array);
			pw.flush();
			pw.close();
		}catch(Exception e) {
			System.out.println("페이징 오류 : " + e);
		}
	}
	
	// 공지사항 등록 페이지 로드 메소드
	@PostMapping("admin/notice_write.do")
	void notice_write() {}
	
	// 공지사항 등록하는 메소드
	@PostMapping("admin/notice_upload.do")
	void notice_upload(@ModelAttribute("board") NoticeVO vo, Model m, HttpServletRequest request) {
		try {
			
			ServletContext sc = request.getServletContext();
			String realPath = sc.getRealPath("/uploads/");
			
			if(vo.getFile().getSize() != 0) {
				new Module().uploadImage(vo.getFile(), realPath, vo.getFile().getOriginalFilename());
				vo.setNfile("./uploads/" + vo.getFile().getOriginalFilename());
			}
			
			int result = sqlSession.insert("memberDB.insertNotice", vo);
			
			if(result != 0) {
				m.addAttribute("msg", "공지사항이 등록되었습니다.");
			}else {
				m.addAttribute("msg", "오류가 발생했습니다.");
			}
		}catch(Exception e) {
			System.out.println("공지사항 업로드 오류 : " + e);
		}
	}
	
	// 공지사항 삭제하는 메소드
	@PostMapping("admin/notice_delete.do")
	void notice_delete(HttpServletRequest request, Model m) {
		String[] datas = request.getParameterValues("nidx");
		
		System.out.println(datas.length);
		int count = 0;
		for(String nidx : datas) {
			System.out.println(nidx);
			int result = sqlSession.delete("memberDB.noticeDelete", nidx);
			if(result > 0) {
				count ++;
			}
		}
		if(datas.length - 1 == count) {
			m.addAttribute("msg", "공지사항이 삭제되었습니다.");
		}else if(count > 0 && count < datas.length) {
			m.addAttribute("msg", "일부 공지사항을 삭제하는 데 문제가 발생했습니다.");
		}else {
			m.addAttribute("msg", "오류가 발생했습니다.");
		}
	}
	
	// notice_view 이동 메소드
	@PostMapping("admin/notice_view.do")
	void notice_view(@ModelAttribute("board") NoticeVO vo, Model m) {
		List<NoticeVO> result = sqlSession.selectList("memberDB.selectNotice", vo);

		JSONArray array = new JSONArray();
		for(NoticeVO datas : result) {
			array.add(String.valueOf(datas.getNdate()));
			array.add(datas.getNsubject());
			array.add(datas.getNwriter());
			array.add(datas.getNfile());
			array.add(datas.getNtext().replace("\\","\\\\").replace("\r", "\\r").replace("\n", "\\n"));
			array.add(datas.getNidx());
		}
		m.addAttribute("array", array);
	}
	
	// 공지사항 수정 페이지 로드 메소드
	@PostMapping("admin/notice_modify.do")
	void notice_modify(@ModelAttribute("board") NoticeVO vo, Model m, HttpServletRequest request) {
		List<NoticeVO> result = sqlSession.selectList("memberDB.selectNotice", vo);
		
		JSONArray array = new JSONArray();
		for(NoticeVO datas : result) {
			array.add(datas.getNidx());
			array.add(datas.getNtop());
			array.add(datas.getNsubject());
			array.add(datas.getNwriter());
			array.add(datas.getNtext().replace("\\","\\\\").replace("\r", "\\r").replace("\n", "\\n"));
		}
		m.addAttribute("array", array);
	}
	
	@PostMapping("admin/notice_modify_ok.do")
	void notice_modify_ok(@ModelAttribute("board") NoticeVO vo, Model m, HttpServletRequest request) {
		String realPath = request.getServletContext().getRealPath("/uploads/");
		try {
			if(vo.getFile().getSize() != 0) {
				new Module().uploadImage(vo.getFile(), realPath, vo.getFile().getOriginalFilename());
				vo.setNfile("./uploads/" + vo.getFile().getOriginalFilename());
			}
			
			int result = sqlSession.update("memberDB.updateNotice", vo);
			if(result > 0) {
				m.addAttribute("msg","정상적으로 수정되었습니다.");
			}else {
				m.addAttribute("msg", "오류가 발생했습니다.");
			}
		}catch(Exception e) {
			System.out.println("공지사항 수정 오류 : " + e);
		}
	}
	
	// 메인 페이지 출력용 공지사항 불러오는 메소드
	@RequestMapping("get_notice.do")
	void getNotice(HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Credentials", "true");
		
		
		List<NoticeVO> result = sqlSession.selectList("memberDB.selectNoticeInfo");
		
		JSONArray array = new JSONArray();
		for(NoticeVO data: result) {
			JSONObject obj = new JSONObject();
			obj.put("nidx", data.getNidx());
			obj.put("nsubject", data.getNsubject());
			obj.put("ndate", data.getNdate().toString().substring(0, 10));
			array.add(obj);
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
	
	// 메인 공지사항 페이지 전체 공지사항 개수 전달, 전체 공지사항 리스트 전달 용 메소드
	@PostMapping("callNotices.do")
	void callNotices(HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		int start = 0;
		int count = 0;
		
		int noticeEA = sqlSession.selectOne("memberDB.noticeSelectNum");
		List<NoticeVO> result = sqlSession.selectList("memberDB.noticeSelect",start);
		
		int pageEA = (int)Math.ceil((double)noticeEA / this.perPage);
		JSONObject array = new JSONObject();
		array.put("pageEA", pageEA);
		for(NoticeVO data : result) {
			JSONArray arr = new JSONArray();
			arr.add(data.getNidx());
			arr.add(data.getNsubject());
			arr.add(data.getNwriter());
			arr.add(data.getNclick());
			arr.add(data.getNdate().toString());
			array.put("noticeData" + count,arr);
			count++;
		}
		
		try {
			PrintWriter pw = response.getWriter();
			pw.print(array);
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	// 메인 페이지 공지사항 뷰 페이지
	@RequestMapping("notice_view.do")
	void noticeView(@ModelAttribute("board") NoticeVO vo, Model m) {
		List<NoticeVO> result = sqlSession.selectList("memberDB.selectNotice",vo);
		
		int click = 0;
		int nidx = 0;
		JSONArray array = new JSONArray();
		for(NoticeVO datas : result) {
			nidx = datas.getNidx();
			array.add(nidx);
			array.add(datas.getNsubject());
			array.add(datas.getNwriter());
			array.add(String.valueOf(datas.getNdate()));
			array.add(datas.getNtext().replace("\\","\\\\").replace("\r", "\\r").replace("\n", "\\n"));
			click = datas.getNclick();
			array.add(++click);
		}
		vo.setNclick(click);
		vo.setNidx(nidx);
		sqlSession.update("memberDB.updateNoticeClick", vo);
		m.addAttribute("array", array);
	}
	
	// 메인 페이지 공지사항 검색
	@PostMapping("notice_search.do")
	void noticeSearch(@ModelAttribute("board") NoticeVO vo, HttpServletResponse response) {
		
	}
}
