package adminNotice;

import java.sql.Date;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoticeVO {
	int nidx, nclick;
	String ntop, nsubject, nfile, nwriter, ntext;
	Date ndate;
	MultipartFile file; // POST로 넘어온 파일 저장용
}
