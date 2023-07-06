package shopProduct;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.DecimalFormat;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.web.multipart.MultipartFile;

public class Module {
	// 이미지 파일 업로드용 메소드
	void uploadImage(MultipartFile image, String realPath, String fileName) throws Exception {
		InputStream is = image.getInputStream();
		BufferedInputStream bis = new BufferedInputStream(is);
		
		OutputStream os = new BufferedOutputStream(new FileOutputStream(realPath + fileName));
		
		byte[] buffer = new byte[1024];
		int readBytes;
		while((readBytes = bis.read(buffer)) != -1) {
			os.write(buffer, 0, readBytes);
			os.flush();
		}
		os.close();
		bis.close();
	}
	
	// JOSN 제작 메소드
	JSONArray makeJSON(List<ProductVO> result) {
		JSONArray array = new JSONArray();
		DecimalFormat df = new DecimalFormat("###,###");
		
		for(ProductVO datas : result) {
			JSONArray data = new JSONArray();
			data.add(datas.getPcode());
			data.add(datas.getPimage1());
			data.add(datas.getPname());
			data.add(datas.getPbmenu());
			data.add(df.format(datas.getPprice()));
			data.add(df.format(datas.getPdisprice()));
			data.add(datas.getPdiscount()+"%");
			data.add(datas.getPea());
			data.add(datas.getPsale());
			
			array.add(data);
		}
		
		return array;
	}
}
