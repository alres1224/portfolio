package shopProduct;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductVO {
	int pidx, pprice, pdiscount, pdisprice, pea;
	String pbmenu, psmenu, pcode, pname, ptext1, psale, psoldout, ptext2, pimage1, pimage2, pimage3;
	MultipartFile image1, image2, image3;
}
