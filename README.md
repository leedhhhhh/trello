<div align="center">

# react-beautiful-dnd ๐ฐ

<img src="https://user-images.githubusercontent.com/86703459/188403181-0a93eef3-3d2b-40f2-a4b6-e619c92bb95c.gif" width="800" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/188403189-d2384daf-5479-47e9-9f17-eb3313ea6d3a.gif" width="800" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/188403193-c6366ebb-9811-4f2b-96f3-9218995e7690.gif" width="800" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/188403205-2cdfa398-34ac-4b36-9569-5db95ffebd89.gif" width="800" height="400" />

<br /><br />

# USE STACK ๐ง

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactHook-EC5990?style=flat-square&logo=React&logoColor=white"/>
<br />
๊ทธ๋ฆฌ๊ณ  react-beautiful-dnd

<br /><br />

# ํ๋ก์ ํธ ์๊ฐ

react-beautiful-dnd ๋ฅผ ๋ณด๊ณ  ๋๋ฌด ์ด๋ป์ ์์ํ ํ ์ดํ๋ก์ ํธ


<br /><br />

# ๊ฐ๋ฐํ๋ฉด์ ๋ฐฐ์ด์  ๋ฐ ์ด๋ ค์ ๋์ 

### 1. Object.fromEntries() , Object.entries()
<img src="https://user-images.githubusercontent.com/86703459/188404770-a67186e3-6889-43eb-a324-04c2fecd8cff.PNG" width="1000" height="400" />

<br /><br />

```c
Object.entries(obj)
๊ฐ์ฒด ==> ๋ฐฐ์ด
```
1.๊ฐ์ฒด๋ฅผ ๋ฐฐ์ด๋ก ๋ง๋ค์ด ์ค๋ค.<br />
2.๊ฐ์ฒด์ ํค์ ๊ฐ์ [key, value]์ ๋ฐฐ์ด๋ก ๋ฐํํ๋ค.
(๊ฐ์ฒด๊ฐ ๋ฐฐ์ด๋ก ๋ฐ๋์ ๋ฐ๋ผ key์ value๋ ์์์ฑ์ ๊ฐ์ง๊ฒ ๋จ)
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
๋ฐฐ์ด ==> ๊ฐ์ฒด
```
1.2์ฐจ์์ผ๋ก ๊ตฌ์ฑ๋ ๋ฐฐ์ด์ ํค ๊ฐ ์ ๋ชฉ๋ก์ ๊ฐ์ฒด๋ก ๋ฐ๊พผ๋ค.
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
๋ณด๋ ๊ฐ์ ์ด๋ ๊ธฐ๋ฅ์ ๊ฐ๋ฐํ๋ฉด์ state atom์ default ๊ฐ์ ๊ฐ์ฒด ์์ ๋ฐฐ์ด๋ก ์คฌ๋ค. <br />
์ฒ์์๋ ์คํ๋ ๋ ๋ฌธ๋ฒ์ ์ฌ์ฉํ์ฌ ๊ฐ์ฒด๋ฅผ ๋ฐฐ์ด๋ก ๋ด์๋ณด๋๊ฒ ์ด๋จ๊น ์๊ฐํด์ ์๋ํ์ง๋ง  <br />
TypeScript๋ก ์ธํด ์๋ฌ๊ฐ ๋ฐ์ํ์ฌ ๋ค๋ฅธ ๋ฐฉ๋ฒ์ ์ฐพ์๋ณด๋ ๋์ค์<br />
Object.fromEntries() , Object.entries() ์ด๋ผ๋ ์์ ์๊ฒ ๋์๊ณ  Object.entries() ๋ฅผ ์ฌ์ฉํด <br />
๊ฐ์ฒด๋ฅผ 2์ฐจ์ ๋ฐฐ์ด๋ก ๋ฐ๊ฟ์ฃผ๊ณ  Object.fromEntries()๋ฅผ ์ฌ์ฉํด 2์ฐจ์ ๋ฐฐ์ด์ ๊ฐ์ฒด๋ก ๋ง๋๋๋ฐ ์ฑ๊ณตํ๋ค.<br />
์ํ๋ ๊ฒฐ๊ณผ๋ฅผ ์ ๋ฝ์์๊ธฐ ๋๋ฌธ์ ๊ธฐ๋ฅ ๊ฐ๋ฐ์ ์ ์ฑ๊ณต์ํฌ์ ์์๋ค.


# ๋๋์ 

react-beautiful-dnd ๋ฅผ ์ฒ์ ์ ํ๊ฒ ๋๊ฑด ๊ฐ๋ฐ์ ๋ชจ์์์ ์ด๋ค ์ฌ๋์ด ๋จํก์ ์ฌ๋ ค์ค gif๋ฅผ ๋ดค์ ๋ ์๋ค.<br />
์ํธ๋ฅผ ์์ ์์ ๋ก ์์ง์ด๋๊ฒ ๋์ค์ ์ด๋ค ์์ผ๋ก๋  ์์ฉ ํ  ์๊ฐ ์์๊ฑฐ๋ผ๋ ์๊ฐ์ด ๋ค์๊ณ  ๋๋ฌด ๋งค๋ ฅ์ ์ผ๋ก ๋ค๊ฐ์๋ค.<br />
ํ๋ ์ผ๋ค์ ์ ์ ๋ฉ์ถ๊ณ  ์ ๋ณด๋ค์ ์ฐพ์๋ดค๊ณ  ์ ๋ณด๋ค์ ๊ธฐ์ดํ์ฌ ๊ฐ๋จํ๊ฒ ํ ์ดํ๋ก์ ํธ๋ฅผ ๋ง๋ค์ด๋ดค๋ค.<br />
react-beautiful-dnd ๊ฐ ์๋์๋ค๋ฉด ๊ฐ๋ฐํ๊ธฐ ์ด๋ ค์ ์๊บผ๊ฐ์ ๊ธฐ๋ฅ๋ค์ด ์กฐ๊ธ ๋ ์ฝ๊ฒ ๋ง๋ค์ด์ง๋๊ฒ ๋๋ฌด ๋ฉ์์๋ค.<br />
'Tech is created to fix problem' ๋ผ๋ ๋ฌธ์ฅ์ด ์กฐ๊ธ ๋ ๋ง์์ ์๋ฟ๋ ์๊ฐ์ด ๋์๋ค. <br />

## page
https://leedhhhhh.github.io/trello/
</div>



