<div align="center">

# react-beautiful-dnd 📰

<img src="https://user-images.githubusercontent.com/86703459/188403181-0a93eef3-3d2b-40f2-a4b6-e619c92bb95c.gif" width="800" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/188403189-d2384daf-5479-47e9-9f17-eb3313ea6d3a.gif" width="800" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/188403193-c6366ebb-9811-4f2b-96f3-9218995e7690.gif" width="800" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/188403205-2cdfa398-34ac-4b36-9569-5db95ffebd89.gif" width="800" height="400" />

<br /><br />

# USE STACK 🔧

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactHook-EC5990?style=flat-square&logo=React&logoColor=white"/>
<br />
그리고 react-beautiful-dnd

<br /><br />

# 프로젝트 소개

react-beautiful-dnd 를 보고 너무 이뻐서 시작한 토이프로젝트


<br /><br />

# 개발하면서 배운점 및 어려웠던점

### 1. Object.fromEntries() , Object.entries()
<img src="https://user-images.githubusercontent.com/86703459/188404770-a67186e3-6889-43eb-a324-04c2fecd8cff.PNG" width="1000" height="400" />

<br /><br />

```c
Object.entries(obj)
객체 ==> 배열
```
1.객체를 배열로 만들어 준다.<br />
2.객체의 키와 값을 [key, value]의 배열로 반환한다.
(객체가 배열로 바뀜에 따라 key와 value는 순서성을 가지게 됨)
<br />

```c
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"

```
<br />

```c
Object.fromEntries(arr)
배열 ==> 객체
```
1.2차원으로 구성된 배열의 키 값 쌍 목록을 객체로 바꾼다.
<br />

```c
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```
<br />
보드 간의 이동 기능을 개발하면서 state atom의 default 값을 객체 안의 배열로 줬다. <br />
처음에는 스프레드 문법을 사용하여 객체를 배열로 담아보는게 어떨까 생각해서 시도했지만  <br />
TypeScript로 인해 에러가 발생하여 다른 방법을 찾아보는 도중에<br />
Object.fromEntries() , Object.entries() 이라는 식을 알게 되었고 Object.entries() 를 사용해 <br />
객체를 2차원 배열로 바꿔주고 Object.fromEntries()를 사용해 2차원 배열을 객체로 만드는데 성공했다.<br />
원하는 결과를 잘 뽑아왔기 때문에 기능 개발을 잘 성공시킬수 있었다.


# 느낀점

react-beautiful-dnd 를 처음 접하게 된건 개발자 모임에서 어떤 사람이 단톡에 올려준 gif를 봤을 때 였다.<br />
시트를 자유자제로 움직이는게 나중에 어떤 식으로든 응용 할 수가 있을거라는 생각이 들었고 너무 매력적으로 다가왔다.<br />
하던 일들을 잠시 멈추고 정보들을 찾아봤고 정보들에 기초하여 간단하게 토이프로젝트를 만들어봤다.<br />
react-beautiful-dnd 가 아니였다면 개발하기 어려웠을꺼같은 기능들이 조금 더 쉽게 만들어지는게 너무 멋있었다.<br />
'Tech is created to fix problem' 라는 문장이 조금 더 마음에 와닿는 시간이 되었다. <br />

</div>



