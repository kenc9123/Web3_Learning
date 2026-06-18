@echo off
cd /d G:\Study\Code
git add .
set /p msg=Explanation: 
git commit -m "%msg%"
git push
echo Pushing!
pause