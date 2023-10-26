## 🚘 미션 자동차 경주  
- [ ] 경주할 자동차들의 이름을 입력 받는다.    
  - [ ] 자동차 이름은 쉼표로 구분한다.  
  - [ ] 이름은 5자 이하만 가능하다.  
  - [ ] 입력하는 자동차 이름 수는 2개 이상이어야 한다.    
- [ ] 몇 번 이동할 것인지 시도할 횟수를 입력 받는다.  
- [ ] 입력 받은 횟수 대로 차들이 이동을 한다.
  - [ ] 전진 또는 멈출 수 있다.
  - [ ] 전진 조건: 0에서 9 사이의 무작위 값을 구한 후 값이 4 이상일 때  
  - [ ] 차수 별로 이름과 함께 실행 결과를 표시한다.  
  - [ ] 입력 값이 ~~ 이하이어야 한다.(너무 많은 시도를 하면 게임이 진행이 어려우니까)  
- [ ] 최종 우승자를 출력한다.
  - [ ] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
  
## 📝 객체 별 메소드 정의  
1. Race(controller)  
- [ ] 이동(시도) 횟수를 설정한다.  
- [ ] 차 정보를 등록한다.  
- [ ] 차들의 이동 거리를 저장한다.  
- [ ] 설정된 횟수만큼 차들이 이동할 수 있도록 조율한다.  
    
2. Car  
- [ ] 이름을 저장한다.  
- [ ] 무작위 수를 뽑아 값이 4이상인지에 따라 이동 유무를 반환한다.  
  
3. Cars  
- [ ] 여러 자동차를 한꺼번에 이동시킨다.  
   
4. InputView  
- [ ] 경주할 자동차 이름을 입력받는다.  
- [ ] 시도할 횟수를 입력받는다.    
   
5. OutputView  
- [ ] 진행 상황을 출력한다.   
  - [ ] 실행 결과라는 스트링을 출력한다.  
  - [ ] 각 자동차의 진행 상황을 출력한다.  
- 최종 우승자를 출력한다.  
  
## 🛠️ 추가 구현 및 수정 사항  
- [ ] 일단 기능부터 완성한다.  
- [ ] 테스트에 통과하는지 확인한다.  
- [ ] 테스트를 추가로 작성한다.  
- [ ] 리팩토링을 한다.  
  - [ ] 객체지향 원칙에 따라 검토한다.  
  - [ ] 컨벤션을 잘 지켰는지 확인한다.  
  
## ⚠️ 지키기 위해 노력할 원칙  
1. Tell, Don't ask.  
2. 추상화하여 핵심 로직만 드러나도록!   
3. 여유가 난다면 다형성까지 고려해보자.  
4. 충분히 구체적으로 설명했는지. 처음 보는 사람도 이해할 수 있을지 생각해보자.   