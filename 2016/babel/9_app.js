const max = process.argv[2];
let FizzBuzz = function*(){
    let currentValue = 1

    while (currentValue <= max) {
        let value = currentValue

        if(value % 15 === 0){
            value = 'FizzBuzz'
        }else if(value % 3 === 0){
            value = 'Fizz'
        }else if(value % 5 === 0){
            value = 'Buzz'
        }
        // yieldで値を返す
        currentValue++
        yield value
    }
        // return {
        //     next(){
        //         if(currentValue > max){
        //             return { done: true }
        //         }

        //         if(currentValue % 3 === 0 && currentValue % 5 === 0){
        //             currentValue++
        //             return { done: false, value: 'FizzBuzz' }
        //         }else if(currentValue % 3 === 0 ){
        //             currentValue++
        //             return { done: false, value: 'Fizz' }
        //         }else if(currentValue % 5 === 0){
        //             currentValue++
        //             return { done: false, value: 'Buzz' }
        //         }else{
        //             currentValue++
        //             return { done: false ,value: currentValue - 1}
        //         }
        //     }
        // }
        // ここに FizzBuzzの計算を書く
        // ヒント：
        // 計算を継続させたい時、つまり終了条件である繰り返し回数が max を超えていない時は
        // done: false のオブジェクトを返却する。
        // 逆に終了条件をみたすときには done: true のオブジェクトを返却する。
        // }
    }()

for (var n of FizzBuzz) {
    console.log(n);
}
