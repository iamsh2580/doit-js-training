/*pet 클래스 인스턴스 객체
name,color 프로퍼티,run메서드
이름 달린다 문자열 알림창에 표시 */

class Pet{
    constructor(name,color){
        this.name= name;
        this.color= color;
    }
    run(name) {
        alert(`${this.name}은 달린다`);
    }
}

const dog=new Pet("박버들","흰");
dog.run();


