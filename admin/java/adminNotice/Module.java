package adminNotice;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

import org.springframework.web.multipart.MultipartFile;

public class Module {
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
}
