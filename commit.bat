@echo off
cd /d G:\Study\Code
git init
git add .
set /p msg=Explanation: 
git commit -m "%msg%"
git remote add origin https://github.com/kenc9123/Web3_Learning
git push -u origin main
echo Pushed!
pause