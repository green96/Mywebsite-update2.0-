// declare a variable named xp
// and we assigned to the value of 0
let xp = 0;// This is player experience points

// declare health variable(player health) assigned to the value of 100
let health = 100;// player health

// In javascript semicolons are optional(We mostly use semicolons just to signify that it is the end of a line)

let gold = 50; // mặc dinh la 50 (test de cao 999 )

//Camel case
//Camel Case (viết kiểu lạc đà) là cách viết nối nhiều từ lại với nhau, trong đó:
    //Từ đầu tiên viết thường hoàn toàn.
    //Các từ tiếp theo viết hoa chữ cái đầu tiên.
//Ví dụ:currentWeapon,totalScore
// nhìn giống như lưng con lạc đà, chỗ nhô lên chính là các chữ cái viết hoa giữa từ – nên được gọi là camel case.
// Vì sao dùng camelCase?

    //Là quy chuẩn đặt tên biến phổ biến trong JavaScript.

    //Giúp code dễ đọc, dễ hiểu.

    //Tránh lỗi khi làm việc với các thư viện hoặc framework có quy định chặt chẽ về cách đặt tên.
let currentWeapon = 0 // we start weapon with index 0 in the object array (which is a stick)
// We can also uses let,const or var to declare a variable

//let (hiện đại, nên dùng,ES6 trở lên)
    //Phạm vi block (thuộc về {} như trong if, for,...).

    //Có thể gán lại.

    //Bị hoisting nhưng không sử dụng được trước khi khai báo (gây lỗi nếu dùng trước khi khai báo).

//const (constant → hằng số, nên dùng nếu không thay đổi)
    //Phạm vi block giống let.

    //Không thể gán lại giá trị mới.

    //Tuy nhiên: vẫn có thể thay đổi bên trong object hoặc array.

    //Cũng bị hoisting nhưng không thể sử dụng trước khi khai báo.


//var (cũ, không nên dùng nữa) vì nhiều lý do liên quan đến lỗi logic và bảo mật
//Phạm vi (scope): thuộc hàm (function) hoặc toàn cục, không thuộc block (if, for, {}).
//Có thể gán lại.
//Bị hoisting: được “kéo lên” đầu hàm nhưng không có giá trị ban đầu.
//1.var không có phạm vi block (block scope)

    //var không tuân theo phạm vi khối lệnh (như trong {} của if, for, while...).

    //Điều này khiến biến có thể bị lộ ra ngoài, gây lỗi không mong muốn.
//2. var bị hoisting nguy hiểm
   // Biến khai báo bằng var sẽ được "kéo lên đầu" hàm, nhưng không mang theo giá trị, dễ gây bug khó hiểu.
// 3. var có thể khai báo lại nhiều lần
    //Điều này có thể vô tình ghi đè biến cũ mà không cảnh báo.

//declare a variable without inital
//Không có giá trị khởi tạo (initial value), nên biến fighting này sẽ có giá trị mặc định là undefined.
let fighting;
let monsterHealth;

// We used array because inventory can store many things
let inventory = ["stick"];//là gán giá trị ban đầu cho biến là một mảng (array) gồm 1 phần tử kiểu chuỗi..
// you can also used '', "" or ``

//var -> most changing
//let -> medium changing
//const -> least amount of changing(used for variable that will never change)
const button1 = document.querySelector("#button1");// khai bao bien constant ten la button1 bằng document(Đại diện cho toàn bộ tài liệu HTML.)
//.querySelector(...)	Tìm phần tử HTML đầu tiên khớp với bộ chọn CSS trong dấu ngoặc.
//"#button1"   Bộ chọn CSS dùng để chọn phần tử có id="button1".

//Tương tự trên
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");


//khai bao bien slime la css elemet co id la slime 
const slime = document.querySelector('#slime');

const witch = document.querySelector('#witch');

const dragon = document.querySelector('#dragon');

const dagger = document.querySelector('#dagger');

const greatsword = document.querySelector('#Greatsword');

const longsword = document.querySelector('#Longsword');


//Cách khai báo tương tự locations array
const weapon = [
    {
        name: "stick",
        power: 5
    },

    {
        name: "dagger",
        power: 30
    },

    {
        name: "Greatsword",
        power: 50
    },

    {
        name: "Longsword",
        power: 100
    }

];

//Cách khai báo tương tự locations array
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "witch",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
];


//array can store any datatype including objects
//objects are similar to array except that instead of using indexes to access and modify data
//you access the data in objects through properties



//This store data of location in the game
//location là một mảng chứa nhiều đối tượng.
//Mỗi đối tượng mô tả một địa điểm trong game, bao gồm: tên, các lựa chọn nút bấm và hành động tương ứng.

// this locations array consist of 8 elements(8 object)
const locations = [      // declare a constant variable named location and set it to an empty array(inside the empty array we can also declare object ) 
    {
        //object consist of key value pairs
        //Key thường là chuỗi (string) không dấu cách, nhưng nếu có khoảng trắng thì phải để trong dấu " " hoặc ' '.
        name: "town square", // comma to separate pairs
        "button text": ["Go to store","Go to cave","Fight dragon"],
        "button functions": [goStore, goCave ,fightDragon],
        text: "You are in the town square. You see a sign that says \"Store.\""
        
        //Trên là một object có 4 cặp key-value.
        //Key	                                    Value
        //name	                                "town square"
        //"button text"	        ["Go to store", "Go to cave", "Fight dragon"]
        //"button functions"	        [goStore, goCave, fightDragon]
        //text	                        "You are in the town square."




//"button text": mảng các dòng chữ sẽ hiển thị trên các nút (buttons).
//"button functions": mảng chứa các tên hàm (function) sẽ được gọi khi người chơi nhấn vào từng nút tương ứng.
//text: mô tả tình huống/hoàn cảnh khi người chơi đang ở vị trí đó.
//Dấu \" để chèn dấu "Store" trong chuỗi mà không bị lỗi.
    },

    {
        //tương tự
        name: "store",
		"button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
		"button functions": [buyHealth, buyWeapon, goTown],
		text: "You enter the store."
    },

	{
		name: "cave",
		"button text": ["Fight slime", "Fight witch", "Go to town square"],
		"button functions": [fightSlime, fightBeast, goTown],
		text: "You enter the cave. You see some monsters."
	},
    {
		name: "fight",
		"button text": ["Attack", "Dodge", "Run"],
		"button functions": [attack, dodge, goTown],
		text: "You are fighting a monster."
	},

    {
		name: "kill monster",
		"button text": ["Go to town square", "Go to town square", "Go to town square"],
		"button functions": [goTown, goTown, easterEgg],
        // To used the double quotes for a word like "Arg!" the Text string has to be in a single quotes('')
		text: 'The enemy screams "Arg!" as it dies. You gain experience points and find gold.'
	},

    {
		name: "lose",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "You die. ☠️"
	},

    {
        name: "win",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "You defeat the dragon! YOU WIN THE GAME! 🎉"
    },

    {
		name: "easter egg",
		"button text": ["2", "8", "Go to town square?"],
		"button functions": [pickTwo, pickEight, goTown],
		text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
	}

]
// [] empty array
// [{}] 1 empty object in an empty array
// [{},{}] 2 empty object in an empty array

// This is a single line comment
/* This is a multi-line  comment */

// initialize buttons(khởi tạo hay khởi động)
//onclick là thuộc tính sự kiện trong JavaScript, dùng để xử lý hành động khi người dùng click chuột vào một phần tử HTML.

//Gán hàm cho biến hoặc thuộc tính sự kiện: thì hàm không có dấu ()
//VD: button1.onclick = goStore ==> goStore không có dấu ()

button1.onclick = goStore;//người dùng click vào button1(Biến chứa phần tử HTML có id="button1" (đã khai báo trước đó).), hàm goStore sẽ được gọi để xử lý hành động đó.

//Nếu viết button.onclick = sayHello(); thì hàm sẽ chạy ngay lập tức, không đợi click ❌

//Tương tự
button2.onclick = goCave;
button3.onclick = fightDragon;


// This update function take a parameter named location
// So data can be passed into this function when it called
function update(location)//Tạo hàm có tham số là location
{
    //hide the monsterStats when Monster is defeated
    monsterStats.style.display = "none";


    //.innerText	muốn đặt chữ thuần túy	    VD:Buy 10 health {10 gold}
    //.innerHTML	muốn đặt có định dạng HTML	VD:<b>Buy 10 health</b>
    button1.innerText = location["button text"][0];//location["button text"] This select the "button text" key in the location array
    //[0] select the first value in "button text" key 


    //tương tự
    //[1] select the seconds value in "button text" key 
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];


    button1.onclick = location["button functions"][0];//location["button functions"] This select the "button functions" key in the location array
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];



    //You can also access key in location array by:location.key_name  
    //This only work when key have only 1 value


    text.innerText = location.text;// can also used (location["text"])


    /*
    Một số ví dụ escape:
    Ký tự	Ý nghĩa
    \"	    Dấu nháy kép trong chuỗi
    \'	    Dấu nháy đơn
    \\	    Một dấu \
    \n	    Xuống dòng (newline)
    \t	    Tab
    */



    /*
    \" là cách để thoát (escape) dấu ngoặc kép ".
    Vì bạn đang đặt một chuỗi trong dấu ngoặc kép "...", nếu bạn muốn chèn một dấu " bên trong chuỗi, bạn cần escape nó bằng \.
    */
   //Nếu bạn không dùng \ → Sẽ bị lỗi vì JavaScript hiểu "store" là phần kết thúc chuỗi.
    //text.innerText = "You are in the town square. You see a sign that says \"store\".";//Để chèn dấu ngoặc kép bên trong 1 string ta dùng ký tự escape(\)
}




function goTown(){

    //hidden enemy because player is in town
    slime.style.display = "none";
    witch.style.display = "none";
    dragon.style.display = "none";
    // when we call a function we need to pass in a argument
    update(locations[0]);//call the update function with argument locations(locations array)
    //[0] call the first element in array(first object in this case)



}





//function 	Từ khóa để khai báo một hàm (function) trong JavaScript.
//goStore	Tên hàm – bạn sẽ gọi nó bằng cách viết goStore() trong mã.
//{ ... }	Khối mã chứa những gì hàm sẽ thực hiện khi được gọi.
function goStore(){

    update(locations[1]);//call the update function with argument locations(locations array)
    //[1] call the second element in array(second object in this case)==> Because array start at index 0





    //console.log("Going to store.");//console.log(...) In ra thông điệp trong Console của trình duyệt (dành cho lập trình viên xem(nút F12 hay Inspect)).
    
    //.innerTextThuộc tính dùng để thay đổi hoặc lấy nội dung văn bản hiển thị trong phần tử
    //"Buy 10 health {10 gold}"	Chuỗi văn bản được gán làm nội dung mới của nút
    //button1.innerText = "Buy 10 health {10 gold}";//button1.innerText = "Buy 10 health {10 gold}"; là cách thay đổi nội dung văn bản hiển thị trên nút button1(đã đổ dữ liệu vào biến button1)

    //.innerText	muốn đặt chữ thuần túy	    VD:Buy 10 health {10 gold}
    //.innerHTML	muốn đặt có định dạng HTML	VD:<b>Buy 10 health</b>

    //tương tự

    //button2.innerText = "Buy weapon {30 gold}";//thay đổi text trên button2
    //button3.innerText = "Go to town square";

    //button1.onclick = buyHealth;
    //button2.onclick = buyWeapon;
    //button3.onclick = goTown;

    //thay đổi biến text thành You enter the store (mà biến text là Biến chứa phần tử HTML có id="text" (đã khai báo trước đó).==> thay đổi text trong thẻ <div>)
    //text.innerText = "You enter the store";

}
//tương tự
function goCave(){
    console.log("Going to cave.");
    update(locations[2]);//call the update function with argument locations(locations array)
    //[2] call the third element in array(third object in this case)
}




function buyHealth(){

    // if player have 10 or more than 10 gold we execute the block of code below
    if (gold >= 10){
        // -10 gold beacause you just buy Health
        gold = gold - 10;// You can also do it like this: gold -= 10(this called compound assignment) 

        // add 10 health to your player 
        health = health + 10;// You can also do it like this: health += 10(this called compound assignment)


        //make new gold appear to the web
        goldText.innerText = gold;// add the innerText of the goldText to the new gold variable

        //make new health appear to the web
        healthText.innerText = health;//"Hiển thị giá trị máu (health) lên màn hình trong phần tử HTML tên là healthText."
    }

    //If player have less than 10 gold we run this code
    else{
        // set the html element (id=text) to: You do not have enough gold to buy health.
        text.innerText ="You do not have enough gold to buy health.";
    }

}


function buyWeapon(){
    

    // if player have less weapon then the weapon.length - 1(-1 because index start at 0)  ==> we allow them to buy more
    if(currentWeapon < weapon.length - 1){
        if(gold >= 30){
        gold -= 30;// -30 gold from the current gold

        // add 1 to the currentWeapon variable (move to the next element(next object(next weapon) in the weapon array)))
        currentWeapon += 1// You can also used this: currentWeapon++
        //show the new gold 
        goldText.innerText = gold;

        let newWeapon = weapon[currentWeapon].name// access the currentWeapon in the weapon array(.name mean just take the name)
        
        
        // Hiện vũ khí mới(của currentWeapon (vì currentWeapon tăng thì array dựa vào n cũng tăng theo ))
        document.getElementById(newWeapon).style.display = "block";

        //show text say the player now have a new weapon
        // dấu cộng(+) dùng để cộng chuỗi(string)
        text.innerText ="You now have a " + newWeapon + ".";// add the newWeapon name to the text 
        
        // This add the newWeapon in the inventory
        //push(...)
            //Là một hàm có sẵn của mảng trong JavaScript, dùng để thêm phần tử mới vào cuối mảng.
        inventory.push(newWeapon);

        //we used += to add Text after the string: You now have a " + newWeapon + "." (above)
        text.innerText += " In your inventory you have: " + inventory;
        }

        else{
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    }
    else{
        text.innerText = "You already have the most powerful weapon!";
        // allow player to sell weapon
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }

}


function sellWeapon(){
    //only allow to sell if have more than 1 weapon(length of the inventory array is greater than 1)
    if(inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        //because we used let the currentWeapon variable only inside this if scope
        //Đây là một khai báo biến cục bộ chỉ dùng trong if
        //inventory.shift():Xoá phần tử đầu tiên của mảng inventory và trả về phần tử đó.
        //let currentWeapon = ...:Lưu phần tử đó vào biến currentWeapon để bạn có thể sử dụng sau 
        let currentWeapon = inventory.shift();

        document.getElementById(currentWeapon).style.display = "none";  // Ẩn vũ khí bị bán

        text.innerText = " You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
    }
    else{
        text.innerText = "Don't sell your only weapon!";
    }
}



function fightSlime(){
    slime.style.display = "block";
    fighting = 0;// the index of the slime in the monsters object array
    GoFight();//This called the GoFight() function
}



function fightBeast(){
    witch.style.display = "block";
    fighting = 1;// the index of the Beastin the monsters object array
    GoFight();
}

function fightDragon(){

    dragon.style.display = "block";

    fighting = 2;
    GoFight();

    console.log("Fighting dragon");
}

function GoFight() {
    update(locations[3]);//call the update function with argument locations(locations array)
    //[3] call the fourth element in array(fourth object in this case)
    monsterHealth = monsters[fighting].health;//monsters[fighting].health this take the health of monsters by the index of fighting variable 

    //This update css style thourgh javascript
    monsterStats.style.display = "block"// change monsterStats css display property from none to block

    /*
monsterStats:Là tên biến trong JavaScript, chứa phần tử HTML mà bạn muốn điều khiển.
 .style.display:

Là cách bạn điều khiển việc hiển thị (hiện/ẩn) của phần tử trong trình duyệt.

    display = "none" → Ẩn đi

    display = "block" → Nghĩa là hiển thị phần tử theo dạng khối (chiếm hết 1 dòng, giống như <div>).

    display = "inline" → Hiện theo kiểu dòng (ít dùng cho div)

    display = "flex" → Hiện kiểu bố cục linh hoạt

    */



    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack() {
    text.innerText = " The " + monsters[fighting].name + " attacks.";

    text.innerText += " You attack it with your " + weapon[currentWeapon].name + ".";


    // if Monster is hit we subjact it health 
    // else we don't
    if (isMonsterHit())
    {


        //monsters[fighting].level passing the level of the monsters you are fighting to the getMonsterAttackValue function
        health -= getMonsterAttackValue(monsters[fighting].level);//player get damage
    }
   else{
     text.innerText += " You miss.";

   }

    //monster get damage by the power of the currentWeapon and Random xp(Math.random() * xp) of the player and round it up by Math.floor and +1 to make sure the monster take aleast 1 damage
    monsterHealth -= weapon[currentWeapon].power + Math.floor(Math.random() * xp ) + 1;

    /*
    Math.random() * xp
    Math.random() tạo ra số ngẫu nhiên từ 0 đến nhỏ hơn 1.
    Nhân với xp để tạo ra sát thương phụ ngẫu nhiên theo kinh nghiệm người chơi.
    Math.floor(...)Làm tròn xuống: (Vd:Math.floor(4.9) → 4.)
    + 1:Đảm bảo sát thương tối thiểu luôn lớn hơn 0.
    */

    //display the new player health and monsterHealth
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;


    if(health <= 0){
        //if player health smaller than or equal to 0 we called the Lose function
        lose();
    } 
    else if( monsterHealth <=0) {
        // a single equal sign is a assignment operator
        // = (Toán tử gán) Ý nghĩa:Dùng để gán giá trị cho biến.

        // == or === for comparing
        // == will compare for equality after type conversion
        // === will NOT DO type conversion (two value have to be the exact same type)

        //. == (Toán tử so sánh lỏng, gọi là "loose equality")
        // Ý nghĩa:So sánh giá trị, nhưng cho phép ép kiểu tự động nếu kiểu dữ liệu khác nhau.
        // JavaScript sẽ cố gắng chuyển đổi kiểu (type coercion) để so sánh.

        // === (Toán tử so sánh chặt, gọi là "strict equality")
        // Ý nghĩa:So sánh giá trị và kiểu dữ liệu luôn. Không ép kiểu.

        //👉 Luôn ưu tiên dùng === và !== để tránh lỗi ngầm!
        if(fighting === 2){// Kiểm tra nếu đang ở lượt đánh quái cuối cùng
            // Gọi hàm thắng game nếu đánh bại quái cuối
            dragon.style.display = "none";
            winGame();
        }else{
            //hidden the enemy because player kill it
            slime.style.display = "none";
            witch.style.display = "none";
             // Nếu chưa phải quái cuối, gọi hàm đánh bại quái thường
            defeatMonster();
        }


//Toán tử	Tên gọi	                So sánh kiểu dữ liệu?	           Ví dụ	     Kết quả
//!=	    So sánh lỏng (loose)	❌ Không kiểm tra kiểu	         '5' != 5	    false
//!==	    So sánh chặt (strict)	✅ Có kiểm tra kiểu	             '5' !== 5	    true



        //You can also rewrite the if else code above using a ternary statement
        //It gonna look like this: fighting === 2 ? winGame() : defeatMonster();
        // if Math.random() smaller then 0.1(10%) AND inventory.length is not 1 ==> the weapon break
        if(Math.random() <= .1 && inventory.length !== 1 )
        {
            // pop() là một phương thức của mảng dùng để:Xoá phần tử cuối cùng của mảng.Trả về giá trị vừa bị xoá.
            // inventory.pop() pop the last element(the strongest weapon) in the inventory array and return It's value
            text.innerText += " Your " + inventory.pop() + " breaks. ";
            currentWeapon--;// minus 1 weapon from the inventory
        }
    }
}

function getMonsterAttackValue(level){
    //This allow player to get hit(damage) based on level of monster and xp of the monster
    //  Math.random(* xp) to random the xp
    // Math.floor() to round the number up
    let hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    // keyword return will return the hit value to used when called
    return hit;
}

function isMonsterHit(){
    // If Math.random()(between 0 and 1)
    //Trả về một số thực (float) ngẫu nhiên trong khoảng: >= 0 và < 1 Ví dụ: 0.23523, 0.98542, 0.00123, v.v.
    // If Math.random() > .2 (.2 mean 0.2 (20%)) ==> will return true(hit the monster)
    // If Math.random() NOT > .2 (.2 mean 0.2 (20%)) ==> will return false(miss the monster)
    // || this is a OR LOGICAL OPERATOR

    return Math.random() > .2 || health < 20;// IF random above 20% ==> A HIT TO MONSTER OR player health smaller than 20 ==> A HIT TO MONSTER TOO
    //only need 1 condition to be TRUE to return TRUE
}

function dodge() {
        text.innerText = "You dodge the attack from the " + monsters[fighting].name + ".";
}


function defeatMonster() {
    //add gold depend on the level of the monster that you are fight time 6.7(kidda defaul value gold(you can change this if you want) for a boss ) 
    //Math.floor just round up the number
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level; //add player xp depend on the level of the moster you are fighting

    //display gold and xp to the website
    goldText.innerText = gold;
    xpText.innerText = xp;


    // call the fourth index in the location array (the fifth element (fifth object))
    update(locations[4]);
}

function lose() {
    // call the fifth index in the location array (the sixth element (sixth object))
    update(locations[5]);
}


function winGame(){
    // call the sixth index in the location array (the seventh element (seventh object))
    update(locations[6]);

}

// This function just assign everythings back to it defaults value
function restart()
{
    // assign to the defaults value like before
	xp = 0;
	health = 100;
	gold = 50;
	currentWeapon = 0;
	inventory = ["stick"];
	goldText.innerText = gold;
	healthText.innerText = health;
	xpText.innerText = xp;

    //Called the goTown() function
	goTown();
}



function easterEgg(){
    update(locations[7])
}


function pickTwo(){
pick(2); // guess = 2
}


function pickEight() {
pick(8); // guess = 8
}



function pick(guess){
    // Tạo một mảng rỗng để chứa các số ngẫu nhiên
    let numbers =[];
    // Lặp cho đến khi mảng có đủ 10 phần tử
    while (numbers.length < 10) {
        // Tạo một số nguyên ngẫu nhiên từ 0 đến 10
        // Math.random() tạo số thực từ 0 đến <1
        // *11 để đưa thành khoảng từ 0 đến <11
        // Math.floor(...) để làm tròn xuống, cho kết quả từ 0 đến 10
        // Thêm số này vào mảng 'numbers'
        numbers.push(Math.floor(Math.random() * 11));
    }
   
    // \n là ký tự xuống dòng trong chuỗi
    // Hiển thị số người chơi đã đoán và chuẩn bị in danh sách 10 số ngẫu nhiên
     text.innerText = "You picked " + guess + ". Here are the random numbers:\n"; // \n is the newline character

    // Duyệt qua mảng numbers và in từng số ra màn hình
    for (let i = 0; i < 10; i++) {
         text.innerText += numbers[i] + "\n";
    }

    // Kiểm tra xem guess có nằm trong mảng numbers hay không
    // Nếu indexOf(guess) trả về khác -1 thì guess có tồn tại trong mảng
     if (numbers.indexOf(guess) !== -1)//if !== -1 ==> it is the list
    {
        // Người chơi đoán đúng → cộng 20 vàng
        text.innerText += "Right! You win 20 gold!"
        gold += 20;
        goldText.innerText = gold; // Cập nhật lại số vàng trên giao diện
    } else {
        // Người chơi đoán sai → trừ 10 máu
        text.innerText += "Wrong! You lose 10 health!"
        health -= 10;
        healthText.innerText = health// Cập nhật lại máu trên giao diện
        // Nếu máu ≤ 0 thì gọi hàm lose() để xử lý thua cuộc
        if (health <= 0) {
          lose();
        }
    }
}





//Học xong (link:https://www.youtube.com/watch?v=SYx885hX0OY&t=5355s)