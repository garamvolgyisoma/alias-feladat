const intToRoman = (input:number):string => {
    let nums:number[] = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let symbols:string[] = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let i = 12;

    let romanNum:string = "";
    
    while(input > 0) {
        let div = Math.floor(input/nums[i]);
        input = input%nums[i];
        
        while(div--) {
            romanNum += symbols[i];
        }

        i--;
    }
    return romanNum;
}

export default intToRoman;