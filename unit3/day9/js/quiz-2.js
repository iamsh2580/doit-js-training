//pet클래스를 상속받는 cat만드는데 품종인 breed 프로퍼티
//viewInfo()메서드 추가 후 사용해보세요

class Pet{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        alert(`${this.name}은 달린다`);
    }
}

class Cat extends Pet{
    constructor(name,color,breed){
        super(name,color);
        this.breed=breed;
    }
    viewInfo(){
        alert(`이름:${this.name} 품종:${this.breed} 색상:${this.color}`);
    }
}

let cat = new Cat("버들냥","갈색","시고르자브");
cat.viewInfo();
