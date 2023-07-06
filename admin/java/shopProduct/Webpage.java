package shopProduct;

import java.io.PrintWriter;
import java.util.Arrays;
import java.util.HashMap;
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
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Webpage {
	@Inject
	SqlSessionTemplate sqlSession;
	
	PrintWriter pw;
	
	// 상품 등록 페이지 로드 메소드
	@PostMapping("admin/shop_product_write.do")
	void shop_product_write() {
		
	}
	
	// 상품코드 중복확인 메소드
	@PostMapping("admin/shop_pcode.do")
	void shop_pcode(@ModelAttribute("board") ProductVO vo, HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		int result = sqlSession.selectOne("memberDB.selectPcode", vo);
		try {
			this.pw = response.getWriter();
			if(result == 0 ) {
				this.pw.print("y");
			}else {
				this.pw.print("n");
			}
		}catch(Exception e) {
			System.out.println("중복 체크 오류 : " + e);
		}
	}
	
	// 상품 등록 메소드
	@PostMapping("admin/shop_product_upload.do")
	void shop_product_upload(@ModelAttribute("board") ProductVO vo, Model m, HttpServletRequest request) {
		try {
			ServletContext sc = request.getServletContext();
			String realPath = sc.getRealPath("/uploads/");
			long date = System.currentTimeMillis();
			String fileName = date + vo.getImage1().getOriginalFilename();
			
			Module module = new Module();
			
			module.uploadImage(vo.getImage1(), realPath, fileName);
			vo.setPimage1("../uploads/" + fileName);
			
			if(vo.getImage2().getSize() != 0) {
				fileName = date + vo.getImage2().getOriginalFilename();
				module.uploadImage(vo.getImage2(), realPath, fileName);
				vo.setPimage2("../uploads/" + fileName);
			}
			
			if(vo.getImage3().getSize() != 0) {
				fileName = date + vo.getImage3().getOriginalFilename();
				module.uploadImage(vo.getImage3(), realPath, fileName);
				vo.setPimage3("../uploads/" + fileName);
			}
			
			int result = sqlSession.insert("memberDB.insertProduct", vo);
			
			if(result != 0) {
				m.addAttribute("msg", "상품이 정상적으로 등록되었습니다.");
			}else {
				m.addAttribute("msg", "오류가 발생했습니다.");
			}
			
		}catch (Exception e) {
	        System.out.println("상품 등록 오류: " + e);
	    }
	}
	
	private int perPage = 10;
	
	// 상품 관리 페이지 최초로 로드하는 메소드
	@PostMapping("admin/shop_product_list.do")
	void shop_product_list(Model m) {
		int productEA = sqlSession.selectOne("memberDB.allProductEA");
		
		int pageEA = (int)(Math.ceil((double)productEA / perPage));
		int start = 0;
		
		List<ProductVO> result = sqlSession.selectList("memberDB.selectProduct", start);
		
		JSONArray array = new Module().makeJSON(result);
		
		m.addAttribute("data",array);
		m.addAttribute("pageEA",pageEA);
	}
	
	// 상품 관리 페이지 페이지 버튼 눌렀을 때 JSON 보내주는 메소드
	@PostMapping("admin/shop_product_page.do")
	void shop_product_page(HttpServletRequest request, HttpServletResponse response) {
		try {
			request.setCharacterEncoding("UTF-8");
			response.setCharacterEncoding("UTF-8");
			int pageNum = Integer.valueOf(request.getParameter("index"));
			
			int start = (pageNum - 1) * this.perPage;
			
			List<ProductVO> result = sqlSession.selectList("memberDB.selectProduct", start);
			
			JSONArray array = new Module().makeJSON(result);
			PrintWriter pw = response.getWriter();
			pw.print(array);
			pw.flush();
			pw.close();
		}
		catch(Exception e) {
			System.out.println("페이지 출력 오류 : " + e);
		}
	}
	
	// 상품 삭제하는 메소드
	@PostMapping("admin/shop_product_delete.do")
	void shop_product_delete(HttpServletRequest request, Model m) {
		String[] codes = request.getParameterValues("pcode");
		
		System.out.println(Arrays.toString(codes));
		
		int count = 0;
		for(String pcode : codes) {
			int result = sqlSession.delete("memberDB.deleteProduct", pcode);
			if(result > 0) {
				count++;
			}
		}
		
		if(count == codes.length) {
			m.addAttribute("msg","상품이 정상적으로 삭제되었습니다.");
		}else if(count > 0 && count < codes.length) {
			m.addAttribute("msg", "일부 작업 수행에 문제가 발생했습니다.");
		}else {
			m.addAttribute("msg","오류가 발생했습니다.");
		}
	}
	
	// 상품 검색용 메소드
	@PostMapping("admin/search_product.do")
	void searchProduct(HttpServletResponse response, HttpServletRequest request) {
		try {
			response.setCharacterEncoding("UTF-8");
			request.setCharacterEncoding("UTF-8");
			
			String[] req = request.getParameter("param").split(",");
			Map<String,String> sqlParam = new HashMap<String, String>();
			sqlParam.put("column", req[0]);
			sqlParam.put("pdata",req[1]);
			
			List<ProductVO> result = sqlSession.selectList("memberDB.searchProduct",sqlParam);
			JSONArray array = new Module().makeJSON(result);
		
			PrintWriter pw = response.getWriter();
			pw.print(array);
			pw.flush();
			pw.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	// 상품 정보 불러오는 메소드
	@RequestMapping("new_product.do")
	void newProduct(HttpServletResponse response) {
		response.setCharacterEncoding("utf-8");
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Credentials", "true");
		
		List<ProductVO> result = sqlSession.selectList("memberDB.selectProductInfo");
		
		JSONArray array = new JSONArray();
		for(ProductVO data : result) {
			JSONObject obj = new JSONObject();
			obj.put("pname", data.getPname());
			obj.put("ptext1", data.getPtext1());
			obj.put("pprice", data.getPprice());
			obj.put("pdiscount", data.getPdiscount());
			obj.put("pdisprice", data.getPdisprice());
			obj.put("pimage1", "http://casabarragan.cafe24.com/admin/"+data.getPimage1().substring(3));
			
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
	
	
	// 메인 페이지 상품 출력용 메소드
	@RequestMapping("md_product")
	void mdProduct (HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Credentials", "true");
		
		List<ProductVO> result = sqlSession.selectList("memberDB.selectMDInfo");
		
		JSONArray array = new JSONArray();
		for(ProductVO data : result) {
			JSONObject obj = new JSONObject();
			obj.put("pname", data.getPname());
			obj.put("ptext1", data.getPtext1());
			obj.put("pprice", data.getPprice());
			obj.put("pdiscount", data.getPdiscount());
			obj.put("pdisprice", data.getPdisprice());
			obj.put("pimage1", "http://casabarragan.cafe24.com/admin/"+data.getPimage1().substring(3));
			
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
}
