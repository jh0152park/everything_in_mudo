### 짤을 보고 무한도전 대사 맞추기!

💭 과연 나의 무도력은 얼마나 될까!!!? [테스트 하러가기](https://everything-in-mudo.vercel.app/)

> 제작 기간: 2024. 06. 17 ~ 2024. 06. 18

### FE

-   NextJS
-   React
-   Tailwind
-   TypeScript
-   Recoil

### Deployment

-   Vercel

### Design

-   Just my feeling

---

### Mobile Preview

| ![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/e5eaac89-bf21-479c-a6cf-56e93d1c7667) | ![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/f35af83b-a6bd-4e44-b9fc-092a989c330a) | ![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/3efba78e-278b-4ccb-9294-77dea69756b4) |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/bfc2966f-99b7-46bd-9799-a02a88c3638f) | ![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/1bfa0629-af83-4586-ade1-bdb989cf835e) |
| ---                                                                                                              | ---                                                                                                              |

### PC Preview

![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/b435d5b9-a189-4cdc-9243-132bd7e47fbf)
![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/f1ce32ed-200f-4a23-b559-4c6955f2eef8)
![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/f912fd51-b2a1-4f55-aaf9-3aa54252a281)
![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/71f6f392-4d5f-41aa-a282-62129918d313)
![image](https://github.com/jh0152park/everything_in_mudo/assets/118165975/91d88629-10e5-42d3-bdb5-a497d9e72942)

### Rule

-   ? ! . , 와 같은 문장기호는 포함되지 않는다
-   다만 공백은 포함이 된다
-   초급 난이도: 20문제, 초성 + 공백 힌트
-   중급 난이도: 30문제, 초성 힌트
-   고급 난이도: 50문제, 힌트 없음

### Logic

기본적으로 맞춰야할 문제는 50문제가 선정되어 있으나 난이도에 따라서 풀어야할 문제의 갯수는 변동됩니다.

동시에 매번 맞춰야하는 문제의 순서는 랜덤하게 달라집니다. 따라서 초급난이도로 2회연속 시도해도 내가 풀어야할 문제의 순서는 매번 다릅니다.

즉, 문제 순서에 따라서 정답을 외워서 고득점을 얻기에는 어렵도록 되어있습니다.

### 아쉬운점

유저에게 대사가 가려진 사진을 보여준 다음, 유저가 대사를 입력하게 되면 대사가 포함된 정답 이미지를 다시 보여주도록 설계했습니다.

따라서 CSR이 불가피하게 되었는데, 이로 인해서 유저가 이미지를 즉각적으로 볼 수 없고 로딩을 기다려야 합니다.

route가 `/quiz`로 고정되어 있음과 동시에 유저에게 보여줘야할 이미지가 유저의 인터랙션에 따라서 다르게 표시하기 때문에

server에서 pre-rendered된 html을 내려주면 이미지를 즉각적으로 볼 수 있어 성능적인 면과 UX적인 부분 모두 챙길 수 있을것 같다는 생각을 했는데 구현하지 못해서 아쉬움.

대사가 있는 이미지와 없는 이미지 각각 50개씩 총 100개의 pre-rendered static route를 만들어두고 문제 순서와 유저의 인터렉션에 따라서 route를 이동하는 방법으로 구현하는것도 고려해봄직 하지 않을까 라는 생각이고, 추후에 리팩토링 또는 비슷한 작업을 하게된다면 시도해봄직 하다고 생각됨.
