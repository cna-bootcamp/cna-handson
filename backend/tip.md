# Tip

- [Tip](#tip)
  - [백엔드 서비스 강제 종료](#백엔드-서비스-강제-종료)
  - [로컬 Cache 삭제](#로컬-cache-삭제)
  - [GitHub 인증 토큰 생성](#github-인증-토큰-생성)
  - [Git 인증정보 저장](#git-인증정보-저장)

--- 

## 백엔드 서비스 강제 종료  
가끔 백엔드 서비스가 종료되지 않는 경우가 있습니다.  
윈도우는 아래와 같이 작업관리자에서 java로 검색한 후 Java process를 강제로 종료하십시오.  
![alt text](./images/image-kill.png) 

Mac은 아래 명령으로 java process를 찾은후 kill명령으로 프로세스를 종료합니다.  
process id는 결과 목록의 첫번째 컬럼입니다.  
```
ps -ef | grep java 
kill -9 {process id}
```

## 로컬 Cache 삭제      
IntelliJ에서는 잘 발생 안하지만 아주 가끔 로컬 캐싱에 문제가 생겨 컴파일이 안되는 경우가 있습니다.    
이때는 아래와 같이 로컬 캐시를 전부 지우고, 다시 만들면 해결됩니다.    
![alt text](./images/image-17.png)

## GitHub 인증 토큰 생성  
우측 상단의 프로파일 이미지를 클릭하고 'Settings'선택  
![alt text](./images/image-token.png)  

좌측 메뉴에서 맨 아래에 있는 Developer settings 선택   
![alt text](./images/image-token-1.png)  

좌측 메뉴에서 'Personal access tokens'를 펼치고 Tokens(classic) 선택  
오른쪽에서 'Generate new token' 클릭하고 두번째 것 선택      
![alt text](./images/image-token-2.png)

Note(토큰이름: 적절히 지정)를 입력하고 Expiration 기간을 지정한 후 'repo'와 'workflow'를 체크함    

![](./images/2025-02-25-17-16-04.png)  

## Git 인증정보 저장  
Git에 푸시할 때 매번 ID와 인증토큰을 입력하는건 매우 불편합니다.  
vscode나 IntelliJ와 같은 IDE를 사용하면 한번만 설정하면 되나 터미널에서는 추가 설정을 해줘야 합니다.   
아래 명령을 먼저 수행하고 한번만 더 ID/토큰을 입력하고 푸시하면 지정된 시간까지는 다시 묻지 않습니다.  
아래 예제는 3600초(60분)동안 인증정보를 저장하겠다는 의미입니다.  
```
git config credential.helper 'cache --timeout=3600'
``` 

권장하지는 않지만 영구적으로 저장하고 싶으면 아래 명령을 사용하세요.   
```
git config credential.helper store --global
```

