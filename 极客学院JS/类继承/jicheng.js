



(function(){
    var n = "CS";
    function People(name){
        this._name = name;
    }

    People.prototype.say = function(){
        alert("Peo-Hello-"+this._name + n);
    }
    window.People = People;
}());

(function(){
    function Student(name){
        this._name = name;
    }

    Student.prototype = new People();

    var supperSay = Student.prototype.say;

    Student.prototype.say = function() {
        supperSay.call(this);
        alert("Stu-Hello-" + this._name);
    }
    window.Student = Student;
}());
var stder = new Student("Sunby");
stder.say();

///////////////////////////////////

(function(){
    function Person(name){
        var _this = {};
        _this._name = name;
        _this.sayHello = function(){
            alert("Phello" + _this._name);
        }
        return _this;
    }
    window.Person = Person;
}());

function Teacher(name){
    var _this = Person(name);
    var superSay = _this.sayHello;
    _this.sayHello = function(){
        superSay.call(this);
        alert("Thello" + _this._name);
    }
    return _this;

}
var t = Teacher("Sunby");
t.sayHello();