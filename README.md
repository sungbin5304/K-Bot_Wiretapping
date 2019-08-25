# K-Bot_Wiretapping
명령어

@log : 전체 채팅 로그를 확인

@log sender [이름: String] : 특정 이름을 가진 사람이 한 채팅만 필터링된 로그를 확인
ex) @log sender 보낸이

@log room [방 이름: String] : 특정 방에서 한 채팅만 필터링된 로그를 확인
ex) @log room 방이름

@log time [연도: int] [월?: int] [일?: int] [시?: int] [분?: int] [초?: int] (?: 없어도 됨을 의미) : 특정 시간동안 한 채팅만 필터링된 로그를 확인
ex) @log time 1970 1 1
ex2) @log time 1970 1 1 11 59 59

@log init : 저장된 로그를 초기화


