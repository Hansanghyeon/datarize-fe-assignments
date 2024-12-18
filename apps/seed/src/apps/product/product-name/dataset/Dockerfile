# Python 기본 이미지 사용
FROM python:3.10-slim

# 작업 디렉토리 설정
WORKDIR /app

# 필요 파일 복사
COPY requirements.txt .
COPY main.py .

# 의존성 설치
RUN pip install --no-cache-dir -r requirements.txt

# 스크립트 실행
CMD ["python", "main.py"]