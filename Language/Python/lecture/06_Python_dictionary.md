# Python dictionary

> Contents <br>
>   01. 딕셔너리 자료형이란?
>   02. 딕셔너리 다루기
>   03. 튜플 응용

<br><br>

## 01. 딕셔너리 자료형이란?

<br>

`{키 : 값}`의 대응 관계를 가지는 자료형이다. 연관 배열(Associative array) 또는 해시(Hash)라고도 한다. 리스트와 튜플과는 다르게 순차적이지 않고, 오직 키(Key)를 이용해 값(Value)를 얻어낸다. 

<br>

**즉, 딕셔너리의 어떤 값을 찾기 위해 순차적으로 모든 키를 탐색할 필요 없이 해당하는 값의 키만 찾으면 된다는 의미이다.**

<br>

- **데이터 구조 : 딕셔너리 or 사전**
    - 선언 + 입력 : `변수명 = {}` 또는 `dict()` , `변수명 = {키:값}`
    - 읽기 : `변수명[키]`
    - 추가 : `변수명[새로운 키] = 새로운 값`
    - 삭제 : `del 변수명[삭제할 키]`
    - 수정 : `변수명[수정할 키] = 수정할 값`

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