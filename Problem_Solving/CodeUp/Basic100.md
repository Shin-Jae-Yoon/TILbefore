# 코드업 파이썬 기초 100제

## 2022년 03월 08일 (1번~24번)

<br>

### [2번](https://codeup.kr/problem.php?id=6002), [3번 문제](https://codeup.kr/problem.php?id=6003)

Hello World를 출력. 두 가지 방법 사용

- 첫 번째 방법
```python
# print("문장1 문장2")
print("Hello World")
```

- 두 번째 방법
    이것도 똑같이 문장 사이에 공백 들어감.
```python
#print("문장1", "문장2")
print("Hello", "World")
```

- 다른 언어와 다르게 이스케이프 `\n` 안쓰고도 줄바꿈 가능

```python
print("Hello\nWorld")

print("Hello")
print("World")
```

<br>

### [6번](https://codeup.kr/problem.php?id=6006), [7번](https://codeup.kr/problem.php?id=6007), [8번 문제](https://codeup.kr/problem.php?id=6008)

- 특수문자 앞에 이스케이프 `\` 붙이는건 `", ', \` 정도로 알고 있자.

```python
print("\"!@#$%^&*()'")
print('"!@#$%^&*()\'')
print("\"!@#$%^&*()\'")

출력결과 : "!@#$%^&*()'
```

```python
print("\"C:\Download\\\'hello\'.py\"")
print("\"C:\\Download\\'hello'.py\"")

출력결과 : "C:\Download\'hello'.py"
```

```python
print("print(\"Hello\\nWorld\")")

출력결과 : print("Hello\nWorld")
```

<br>

### [15번 문제](https://codeup.kr/problem.php?id=6015)

- 띄어쓰기로 입력 받기
    `a, b`는 튜플 형태인 것을 명심

```python
a, b = input().split()
print(b)
print(a)

입력 : 1 2
출력 : 1
       2
```

<br>

### [18번](https://codeup.kr/problem.php?id=6018), [20번 문제](https://codeup.kr/problem.php?id=6020)

- sep=' ' 사용하는 문제
- sep는 분류기호 seperator를 의미한다.
- 클론 기호`' '`를 사이에 두고 값을 출력

```python
a, b = input().split(':')
print(a, b, sep=':')

입력 : 3:16
출력 : 3:16
```

- 아무것도 없는 빈(empty) 문자는 그냥 `''`
- join() 함수, 반복문 섞어서도 가능
```python
(a, b) = input().split("-")
print(a, b, sep="")

a = input().split("-")
result = ''.join(s for s in a)
print(result)

입력 : 000907-1121112
출력 : 0009071121112
```

<br>

### [22번 문제](https://codeup.kr/problem.php?id=6022)

- sep 이용
```python
s = input()
print(s[0:2], s[2:4], s[4:6], sep=' ')

입력 : 200304
출력 : 20 03 04
```

- print 내부 콤마하면 스페이스 하는거 이용
```python
s = input()
print(s[0:2], s[2:4], s[4:6])

입력 : 200304
출력 : 20 03 04
```

<br>

### [23번 문제](https://codeup.kr/problem.php?id=6023)

- 무턱대고 슬라이싱 하지 말 것
```python
h, m, s = input().split(':')
print(m)

입력 : 17:23:57
출력 : 23
```

```python
# 틀린 예시
s = input()
print(s[3:5])

# 입력을 06:00:00 말고 6:00:00 이렇게 주면 틀리게 됨
```

<br>

### [24번 문제](https://codeup.kr/problem.php?id=6024)

- split()으로 쪼개지면 리스트처럼 되는 것을 다시 명심

```python
# 문자열 더하기
w1, w2 = input().split()
print(w1 + w2)
```

```python
# sep 이용해서 붙이기
w1, w2 = input().split()
print(w1, w2, sep="")
```