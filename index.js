var array = [
    "Javascript",
    "Ruby",
    "Python",
    "Ruby"
]

var array_2 = [0, 1, 2, 3, 10]

Array.prototype.filter2 = function(callback){
    var noname = []
    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i], i, this)
            if (result){
                noname.push(this[i])
                return noname
            }
            {return noname}
        }
    }
    // return noname
}

// for(var i in array){
//     console.log(array[i], i)
// }
Array.prototype.every2 = function(callback){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i], i, this)
            if(result){
                return true
            }
            {return false}
        }
    }

}

var bool = array_2.filter2(function(num, index){
    return num > 11
})

console.log(bool)

Array.prototype.map2 = function(callback, initial){
    // var output = []
    for (var i in this){
        if(this.hasOwnProperty(i)){
            var accum = initial;
            var result = callback(accum, this[i], i, this);
            // output.push(result);
        }
    }
    return result
}

var sth = array.map2(function(accum, num){
    return accum += num;
}, "shit ")

console.log(sth)

// var input = ["a", "b", "b", "c", "d", "d", "d"];
// var newSort = input.sort()
// // console.log(newArray)

// var newInput = new Set(input);
// console.log([...newInput])

// var input = document.querySelector('input[type="checkbox"]');
// input.oninput = function(e){
//     console.log(e.target.checked)
// }

// var select = document.querySelector('select');
// select.onchange = function(e){
//     console.log(e.target.value)
// }

function Validator(object){
    var selectorObject = {};

    function validate(inputElement, rule){
        var errorMessage = inputElement.parentElement.querySelector('span');
        var testMessage;

        var rules = selectorObject[rule.selector];
        for (var i = 0; i < rules.length; ++i) {
            testMessage = rules[i](inputElement.value);
            if (testMessage) break;
        }

        if(testMessage){
            errorMessage.innerText = testMessage
            errorMessage.style.color = "red";
            inputElement.style.borderBottom = "1px solid red";
            // container.style.height += Number('1vh');
        }
        else{
            errorMessage.innerText = ''
            inputElement.style.borderBottom = "1px solid black";
        }  
        return !testMessage;
    }

    var formELement = document.querySelector(object.form);
    if (formELement){
        formELement.onsubmit = function(e){
            e.preventDefault();

            var isFormValid = true;
            var enableInput = formELement.querySelectorAll("input")
            var formValue

            object.rules.forEach(function(rule){
                var inputElement = formELement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid){
                    isFormValid = false;
                }

                if(isFormValid){
                    if(typeof object.onSubmit === 'function'){
                        formValue = Array.from(enableInput).reduce(function(accum, curValue){
                            accum[curValue.name] = curValue.value;
                            return accum;
                        }, {})

                        
                        object.onSubmit({
                            // name: 'quan'
                        })
                    }
                }
                
            });
            
            if(isFormValid){
                window.location.href='./index.html';
            } else 
            {console.log("có lỗi")}
            console.log(formValue)
        }

        object.rules.forEach(function(rule){
            var inputElement = formELement.querySelector(rule.selector);
            
            if(Array.isArray(selectorObject[rule.selector])){
                selectorObject[rule.selector].push(rule.test);
            } else {
                selectorObject[rule.selector] = [rule.test]
            }

            if(inputElement){
                inputElement.onblur = function(){
                    validate(inputElement, rule)
                }

                inputElement.oninput = function(){
                    var errorMessage = inputElement.parentElement.querySelector('span');    
                    errorMessage.innerText = ''
                    inputElement.style.borderBottom = "1px solid black";
                }
            }
    })
    console.log(selectorObject)
}}

Validator.isRequired = function(nameClass){
    return {
        selector: nameClass,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(emailClass){
    return {
        selector: emailClass,
        test: function(value){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(value) ? null : "Vui lòng hoàn thành tên mail"
        }
    }
}

Validator.minLength = function(selector, minLength){
    return {
        selector: selector,
        test: function(value){
            return value.length >= minLength ? undefined : `Vui lòng nhập trên ${minLength} kí tự`
        }
    }
}

Validator.isConfirmed = function(selector, getValue, message){
    return {
        selector: selector,
        test: function(value){
            return value == getValue() ? null : message || 'Nhập mật khẩu sai'
        }
    }
}

console.log(document.getElementsByTagName('input')[0])





























