# JavaScript를 멀티스레드처럼 사용하는 방법 - WebWorker

참고자료
- https://realmojo.tistory.com/109   
- https://boxfoxs.tistory.com/294   

### Web Worker
- Web Worker는 페이지 퍼포먼스에 영향을 주지 않고 독립적으로 백그라운드에서 실행되는 JavaScript입니다. 브라우저 UI에도, 다른 워커에서 실행하는 코드에도 영향을 주지 않습니다.
- Worker가 생성될 때마다 자바스크립트를 실행할 수 있는 고유 스레드를 생성하여 속도 성능을 크게 향상시킬 수 있습니다.

#### 용도
1. 매우 큰 문자열의 암호화/복호화
2. 복잡한 수학계산(이미지/비디오 처리 포함)
3. 매우 큰 배열의 정렬

