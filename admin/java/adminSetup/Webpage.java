package adminSetup;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;
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
	
	// 쇼핑몰 관리 페이지 출력용
	@PostMapping("admin/shop_setup.do")
	void shop_setup(Model m) {
		List<SetupVO> result = sqlSession.selectList("memberDB.selectBannerInfo");
		
		//JSONArray array = new JSONArray();
		JSONObject outobj = new JSONObject();
		for(SetupVO data : result) {
			if(data.getIsort().equals("main")) {
				JSONObject obj1 = new JSONObject();
				obj1.put("images", data.getIimages());
				obj1.put("urls", data.getIurls());
				outobj.put("main", obj1);
			}else if(data.getIsort().equals("popup")) {
				JSONObject obj2 = new JSONObject();
				obj2.put("images",data.getIimages());
				obj2.put("urls", data.getIurls());
				outobj.put("popup", obj2);
			}else {
				JSONObject obj3 = new JSONObject();
				obj3.put("images",data.getIimages());
				obj3.put("urls", data.getIurls());
				outobj.put("ad", obj3);
			}
		}
		
		m.addAttribute("array", outobj);
	}
	
	
	// 메인 베너 정보 업데이트용
	@PostMapping("admin/shop_setup_banner.do")
	void mbanner_setup(@ModelAttribute("board") SetupVO vo, Model m, HttpServletRequest request) {
		int result = sqlSession.update("memberDB.updateBanner", vo);
		if(result > 0) {
			m.addAttribute("msg","정상적으로 업데이트 되었습니다.");
		}else {
			m.addAttribute("msg", "오류가 발생했습니다.");
		}
	}
	
	@RequestMapping("jsonAPI.do")
	void jsonAPI(@ModelAttribute("board") SetupVO vo, HttpServletResponse response) {
		List<SetupVO> result = sqlSession.selectList("memberDB.selectMainBanner");
		
		// CORS
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Credentials", "true");
		
		String images = "";
		String urls = "";
		for(SetupVO datas : result) {
			images = datas.getIimages();
			urls = datas.getIurls();
		}
		
		String[] image = images.split(",");
		String[] url = urls.split(",");
		
		JSONObject array = new JSONObject();
		JSONArray data1 = new JSONArray();
		for(int i = 0; i < image.length; i++) {
			data1.add(image[i]);
		}
		array.put("images", data1);
		JSONArray data2 = new JSONArray();
		for(int i = 0; i < url.length; i++) {
			data2.add(url[i]);
		}
		array.put("urls", data2);
		
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
