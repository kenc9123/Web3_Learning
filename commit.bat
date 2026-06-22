@echo off
cd /d G:\Study\Code
git init
git add .
set /p msg=Explanation: 
git commit -m "%msg%"
git push
echo Pushing!
pause