echo 'Внимание ! Эта стадия запускает очистку места после сборки.'
echo 'Вам дается ровно 1 (одна) минута для промежуточных конфигураций!'
echo После чего контейнер самоуничтожится !
sleep 2
echo Время пошло !
echo 
Mytimer=60
while [ $Mytimer -gt 0 ]
do
((Mytimer--));
echo Время: $Mytimer;
sleep 1;
done
echo Внимание контейнер стирается