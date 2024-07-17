const express = require('express');
const path = require('path');
const app = express();

// 요청 로깅 미들웨어를 추가합니다.
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 빌드 결과물을 정적 파일로 제공합니다.
app.use(express.static(path.join(__dirname, 'build')));

// 모든 요청에 대해 index.html을 제공합니다.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 서버 포트를 환경 변수에서 가져옵니다.
const port = process.env.PORT || 3000;

// 서버를 시작합니다.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});