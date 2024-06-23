# Spring Boot Application 개발

# 새로운 프로젝트 생성
- http://start.spring.io를 열고 아래와 같이 새로운 프로젝트 셋업을 한 후\
[Generate]버튼을 눌러 압축파일을 다운로드 함 \
![initialize](./images/create_project.png)

- 다운로드한 압축파일을 작업영역 디렉토리에 압축해제 함 \
![extract](./images/create_project2.png)

- IntelliJ를 실행하고 [File]-[Open]을 클릭한 후 helloworld디렉토리를 선택함\
![open](./images/create_project3.png)

# 어플리케이션 개발
- build.gradle을 열고 아래와 같이 java 버전 부분을 수정함. 리마크 부분은 삭제하세요. \ 
```
/*
java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(17)
	}
}
*/
java {
	sourceCompatibility = '17'
}
```

- 웹으로 요청을 받을 클래스를 생성 \
![add class](./images/add_class.png)

- 클래스 개발 \
```
@RestController
@RefreshScope      //Config서버와 연동하여 동적갱신이 가능한 Bean클래스로 만듦
public class Controller {
    @Value("${greeting:Hi}")
    private String greeting;

    @GetMapping("/greeting/{message}")
    public String echo(@PathVariable String message) {
        return greeting + " => " + message;
    }
}
```

- 컴파일 에러가 없어질 때까지 라이브러리를 import합니다. 최종 소스는 아래와 같습니다. \
```
package com.cna.helloworld;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RefreshScope      //Config서버와 연동하여 동적갱신이 가능한 Bean클래스로 만듦
public class Controller {
    @Value("${greeting:Hi}")
    private String greeting;

    @GetMapping("/greeting/{message}")
    public String echo(@PathVariable String message) {
        return greeting + " => " + message;
    }
}
```

- application.properties파일을 수정합니다. \
아직 Config서버와 연동 안하므로 spring.cloud.config.enabled=false를 추가합니다. \
![dev](./images/dev1.png)
```
spring.application.name=helloworld
spring.cloud.config.enabled=false
```


## 어플리케이션 실행 
- 아래 순서대로 어플리케이션 실행 설정을 합니다.\
    - 메인메뉴에서 실행환경 설정창 열기 \
    ![setup run1](./images/setup_run1.png)
    - Gradle 선택 \
    ![setup run2](./images/setup_run2.png)
    - 어플리케이션 실행 설정: ':bootRun'만 선택하면 됨 \
    ![setup run3](./images/setup_run3.png)
    - 하단에 있는 창에서 'Service'버튼 클릭하고 '+'아이콘을 눌러 실행유형 선택 \ 
    ![setup run4](./images/setup_run4.png)
    - 'Gradle'을 실행유형으로 선택 \ 
    ![setup run5](./images/setup_run5.png)
    - 실행환경 프로파일이 나타남  \
    ![setup run6](./images/setup_run6.png)

- 어플리케이션을 실행 합니다. \
![run1](./images/run1.png)