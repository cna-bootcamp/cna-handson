# 회원관리 서비스 개발  


회원관리 서비스의 패키지 구조는 아래와 같습니다.    
클린아키텍처를 더 잘 적용하기 위하여 biz와 infra프로젝트를 나누었습니다.   
biz프로젝트는 애플리케이션 본연의 수행이 있고,   
infra프로젝트는 외부와의 인터페이스가 구현되어 있습니다.    

```
com.subride
│
├── common
│   └── dto
│       ├── ResponseDTO    : API 응답시 사용하며 code, message, 응답객체로 구성   
│   └── util
│       └── CommonUtils    : API 응답 객체인 ResponseDTO 생성 처리 
│
└── member
    ├── MemberApplication
    │
    ├── biz
    │   ├── domain
    │   │   ├── Account  : 계정 도메인 객체로 비즈니스 로직 구현
    │   │   └── Member   : 회원 도메인 객체로 비즈니스 로직 구현 
    │   │
    │   ├── exception
    │   │   └── BizException  : 예외처리 
    │   │
    │   └── usecase
    │       ├── inport
    │       │   └── IAuthService        :입력 usecase
    │       │
    │       ├── outport
    │       │   └── IAuthProvider       :출력 usecase
    │       │
    │       └── service
    │           └── AuthServiceImpl     : 입력 usecase의 구현체로 애플리케이션 로직 구현
    │
    └── infra
        ├── common
        │   ├── config
        │   │   ├── LoggingAspect   : 메소드의 시작과 완료 로그를 자동으로 생성
        │   │   ├── SecurityConfig  : 보안설정-CORS(Cross Origin Resource Sharing:다른 도메인간 통신 허용)설정, 인증관련   
        │   │   └── SpringDocConfig : Swagger(API 문서화 툴) 설정      
        │   │
        │   ├── dto
        │   │   ├── JwtTokenDTO         : JWT Access 토큰 구조체
        │   │   ├── JwtTokenRefreshDTO  : JWT Refresh 토큰 구조체
        │   │   ├── JwtTokenVarifyDTO   : Access 토큰 검증 요청 구조체
        │   │   ├── LoginRequestDTO     : 로그인 요청 구조체
        │   │   └── SignupRequestDTO    : 회원가입 요청 구조체 
        │   │
        │   ├── jwt                           : JWT(JSON Web Token)인증 관련 설정
        │   │   ├── CustomUserDetailsService  : 인증 시 Account테이블에서 사용자 정보 검색하여 리턴  
        │   │   ├── JwtAuthenticationFilter   : API 요청 헤더의 Access Token 검증(JwtTokenProvider 호출) 
        │   │   └── JwtTokenProvider          : Access/Refresh Token 발행 및 검증
        │   │
        │   └── util
        │       └── MemberCommonUtils   : 공통유틸리티
        │
        ├── exception
        │   └── InfraException          : 예외 처리
        │
        ├── in
        │   └── web
        │       ├── AuthController          : 계정관련 Controller-로그인, 회원가입, 인증토큰 검증, 인증토큰 갱신
        │       ├── AuthControllerHelper    : 계정처리 객체
        │       ├── MemberController        : 회원관리 Controller-모든 회원정보 조회, 특정 회원정보조회 
        │       └── MemberControllerHelper  : 회원관리 처리 객체
        │
        └── out
            ├── adapter
            │   └── AuthProviderImpl        : 출력 usecase 구현체
            │
            ├── entity
            │   ├── AccountEntity           : 계정 테이블 객체
            │   └── MemberEntity            : 회원 테이블 객체
            │
            └── repo
                ├── IAccountRepository      : 계정 테이블 처리 인터페이스
                └── IMemberRepository       : 회원 테이블 처리 인터페이스
```



