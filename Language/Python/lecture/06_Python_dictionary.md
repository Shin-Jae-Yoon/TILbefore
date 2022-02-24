# Python dictionary

- **데이터 구조 : 딕셔너리 or 사전**
    - 선언 + 입력 : `변수명 = {}` 또는 `dict()` , `변수명 = {키:값}`
    - 읽기 : `변수명[키]`
    - 추가 : `변수명[새로운 키] = 새로운 값`
    - 삭제 : `del 변수명[삭제할 키]`
    - 수정 : `변수명[키] = 새로운 값`

<br>

리스트, 튜플, 딕셔너리 빈 배열을 만드는 방법은 아래와 같다.

```python
data_list = list() # []
data_tuple = tuple() # ()
data_dict = dict() # {}
```

<br>

- 딕셔너리 선언과 입력
```python
data_dict = {'한국' : 'KR', '일본' : 'JP', '중국' : 'CN'}
print(data_dict['한국'])

출력결과 : 'KR'
```

<br>

- 딕셔너리 추가
```python
data_dict = {'한국' : 'KR', '일본' : 'JP', '중국' : 'CN'}
data_dict['미국'] = 'US'

print(data_dict)
출력결과 : {'한국' : 'KR', '일본' : 'JP', '중국' : 'CN', '미국' : 'US'}
```

<br>

- 딕셔너리 삭제
```python
data_dict = {'한국' : 'KR', '일본' : 'JP', '중국' : 'CN'}
del data_dict['한국']

print(data_dict)
출력결과 : {'일본': 'JP', '중국': 'CN'}
```

<br>

- 딕셔너리 수정
```python
data_dict = {'한국' : 'KR', '일본' : 'JP', '중국' : 'CN'}
data_dict['한국'] = 'Korea'

print(data_dict)
출력결과 : {'한국': 'Korea', '일본': 'JP', '중국': 'CN'}
```